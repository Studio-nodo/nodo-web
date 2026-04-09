# Nodo Landing — Contexto del Proyecto

## Descripción
Landing page corporativa para Studio Nodo. Muestra los 6 servicios principales del studio con componentes 3D interactivos.

## Stack
- Next.js 15 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Three.js + React Three Fiber + Drei
- Deploy: Vercel

## Estructura del proyecto
```
nodo-landing/
├── src/
│   ├── app/              # App Router de Next.js
│   ├── components/       # Componentes React
│   └── lib/              # Utilidades
├── public/               # Assets estáticos
├── documentacion/        # Documentación del proyecto
│   ├── brief.md         # Brief del cliente
│   ├── decisiones.md    # Log de decisiones técnicas
│   ├── requisitos.md    # Requisitos funcionales y no funcionales
│   ├── seo.md           # Estrategia y checklist SEO
│   ├── ux-mejoras.md    # Mejoras UX implementadas
│   └── notas.md         # Notas de desarrollo e ideas
├── AGENTS.md            # Recordatorio sobre Next.js 15 breaking changes
└── CLAUDE.md            # Este archivo
```

## Reglas específicas del proyecto

### Componentes 3D
- Siempre usar `dynamic import` con `ssr: false`
- Incluir skeleton loader durante carga
- Fallback estático para usuarios sin WebGL o con reduced-motion
- DPR limitado a [1, 2]
- Shadows deshabilitados (`castShadow={false}`)

### Accesibilidad
- Todos los componentes 3D deben tener `aria-label` descriptivo
- `role="img"` en Canvas
- Detectar y respetar `prefers-reduced-motion`
- Contraste mínimo WCAG AA en todos los textos

### Performance
- Core Web Vitals objetivo: LCP <2.5s, CLS <0.1, FID <100ms
- Skeleton loaders para evitar layout shift
- Dimensiones fijas reservadas para componentes 3D
- Optimización de imágenes con next/image

### SEO
- Metadata completo en cada página
- Structured Data (JSON-LD) con Organization + Services
- Alt text descriptivo en todas las imágenes
- Keywords orientadas a beneficios, no features

## Comandos frecuentes
```bash
npm run dev          # servidor de desarrollo (localhost:3000)
npm run build        # build de producción
npm run lint         # linter
vercel deploy        # deploy a preview
vercel --prod        # deploy a producción
```

## Próximos pasos
- [ ] Implementar formulario de contacto funcional
- [ ] Crear og-image.jpg para redes sociales
- [ ] Configurar Google Analytics
- [ ] Agregar botón flotante de WhatsApp
- [ ] Deploy a producción con dominio custom

## Documentación
Para contexto detallado consultar la carpeta `documentacion/`:
- **brief.md** — objetivo del proyecto y público objetivo
- **decisiones.md** — decisiones técnicas tomadas y su justificación
- **requisitos.md** — requisitos funcionales y no funcionales
- **seo.md** — estrategia SEO y checklist
- **ux-mejoras.md** — mejoras UX implementadas
- **notas.md** — notas de desarrollo, ideas, issues conocidos
