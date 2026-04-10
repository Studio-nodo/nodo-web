'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';

export interface DockApp {
  id: string;
  name: string;
  icon: React.ReactNode;
  description?: string;
}

interface MacOSDockProps {
  apps: DockApp[];
  onAppClick?: (appId: string) => void;
  onAppHover?: (appId: string | null) => void;
  className?: string;
}

const MacOSDock: React.FC<MacOSDockProps> = ({
  apps,
  onAppClick,
  onAppHover,
  className = '',
}) => {
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [currentScales, setCurrentScales] = useState<number[]>(apps.map(() => 1));
  const [currentPositions, setCurrentPositions] = useState<number[]>([]);
  const dockRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastMouseMoveTime = useRef<number>(0);

  const getResponsiveConfig = useCallback(() => {
    if (typeof window === 'undefined') {
      return { baseIconSize: 72, maxScale: 1.7, effectWidth: 260 };
    }
    const w = window.innerWidth;
    if (w < 375) return { baseIconSize: 44, maxScale: 1.2, effectWidth: 140 };
    if (w < 480) return { baseIconSize: 52, maxScale: 1.4, effectWidth: 180 };
    if (w < 768) return { baseIconSize: 62, maxScale: 1.55, effectWidth: 220 };
    return { baseIconSize: 72, maxScale: 1.7, effectWidth: 280 };
  }, []);

  const [config, setConfig] = useState(getResponsiveConfig);
  const { baseIconSize, maxScale, effectWidth } = config;
  const minScale = 1.0;
  const baseSpacing = Math.max(8, baseIconSize * 0.14);

  useEffect(() => {
    const handleResize = () => setConfig(getResponsiveConfig());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getResponsiveConfig]);

  const calculateTargetScales = useCallback((mx: number | null) => {
    if (mx === null) return apps.map(() => minScale);
    return apps.map((_, i) => {
      const center = i * (baseIconSize + baseSpacing) + baseIconSize / 2;
      const dist = Math.abs(mx - center);
      if (dist > effectWidth / 2) return minScale;
      const theta = (dist / (effectWidth / 2)) * Math.PI;
      const factor = (1 + Math.cos(theta)) / 2;
      return minScale + factor * (maxScale - minScale);
    });
  }, [apps, baseIconSize, baseSpacing, effectWidth, maxScale, minScale]);

  const calculatePositions = useCallback((scales: number[]) => {
    let x = 0;
    return scales.map((s) => {
      const w = baseIconSize * s;
      const cx = x + w / 2;
      x += w + baseSpacing;
      return cx;
    });
  }, [baseIconSize, baseSpacing]);

  useEffect(() => {
    const s = apps.map(() => minScale);
    /* eslint-disable react-hooks/set-state-in-effect */
    setCurrentScales(s);
    setCurrentPositions(calculatePositions(s));
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [apps, calculatePositions, config, minScale]);

  const animateToTargetRef = useRef<(() => void) | null>(null);

  const animateToTarget = useCallback(() => {
    const targetScales = calculateTargetScales(mouseX);
    const targetPositions = calculatePositions(targetScales);
    const lerp = mouseX !== null ? 0.2 : 0.12;

    setCurrentScales(prev => prev.map((s, i) => s + (targetScales[i] - s) * lerp));
    setCurrentPositions(prev => prev.map((p, i) => p + (targetPositions[i] - p) * lerp));

    animationFrameRef.current = requestAnimationFrame(() => animateToTargetRef.current?.());
  }, [mouseX, calculateTargetScales, calculatePositions]);

  useEffect(() => {
    animateToTargetRef.current = animateToTarget;
  }, [animateToTarget]);

  useEffect(() => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(() => animateToTargetRef.current?.());
    return () => { if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current); };
  }, [animateToTarget]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const now = performance.now();
    if (now - lastMouseMoveTime.current < 16) return;
    lastMouseMoveTime.current = now;
    if (dockRef.current) {
      const rect = dockRef.current.getBoundingClientRect();
      const padding = Math.max(10, baseIconSize * 0.14);
      setMouseX(e.clientX - rect.left - padding);
    }
  }, [baseIconSize]);

  const handleMouseLeave = useCallback(() => {
    setMouseX(null);
    onAppHover?.(null);
  }, [onAppHover]);

  const handleIconEnter = useCallback((appId: string) => {
    onAppHover?.(appId);
  }, [onAppHover]);

  const handleAppClick = (appId: string, index: number) => {
    const el = iconRefs.current[index];
    if (el) {
      el.style.transition = 'transform 0.15s ease-out';
      el.style.transform = `translateY(-${Math.round(baseIconSize * 0.14)}px)`;
      setTimeout(() => {
        if (el) { el.style.transform = 'translateY(0px)'; }
      }, 150);
    }
    onAppClick?.(appId);
  };

  const padding = Math.max(10, baseIconSize * 0.14);
  const contentWidth = currentPositions.length > 0
    ? Math.max(...currentPositions.map((p, i) => p + (baseIconSize * currentScales[i]) / 2))
    : apps.length * (baseIconSize + baseSpacing) - baseSpacing;

  return (
    <div
      ref={dockRef}
      className={`backdrop-blur-md ${className}`}
      style={{
        width: `${contentWidth + padding * 2}px`,
        background: 'rgba(30, 30, 30, 0.72)',
        borderRadius: `${Math.max(16, baseIconSize * 0.38)}px`,
        border: '1px solid rgba(255,255,255,0.13)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)',
        padding: `${padding}px`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative" style={{ height: `${baseIconSize}px`, width: '100%' }}>
        {apps.map((app, index) => {
          const scale = currentScales[index] ?? 1;
          const pos = currentPositions[index] ?? 0;
          const size = baseIconSize * scale;

          return (
            <div
              key={app.id}
              ref={(el) => { iconRefs.current[index] = el; }}
              className="absolute cursor-pointer flex flex-col items-center justify-end"
              title={app.name}
              onClick={() => handleAppClick(app.id, index)}
              onMouseEnter={() => handleIconEnter(app.id)}
              style={{
                left: `${pos - size / 2}px`,
                bottom: '0px',
                width: `${size}px`,
                height: `${size}px`,
                zIndex: Math.round(scale * 10),
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  filter: `drop-shadow(0 ${scale > 1.2 ? 6 : 3}px ${scale > 1.2 ? 16 : 8}px rgba(0,0,0,${0.25 + (scale - 1) * 0.2}))`,
                }}
              >
                {app.icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MacOSDock;
