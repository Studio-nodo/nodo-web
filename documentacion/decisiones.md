# Decisiones Técnicas — Nodo Landing

## Arquitectura

### Next.js 15 con App Router
**Fecha:** 2026-04-07  
**Decisión:** Usar Next.js 15 con App Router en lugar de Pages Router  
**Por qué:** App Router es el estándar actual, mejor soporte para Server Components y layouts anidados  
**Cómo aplicar:** Toda la estructura de rutas vive en `/src/app`

### Three.js para componentes 3D
**Fecha:** 2026-04-07  
**Decisión:** Implementar modelos 3D interactivos con React Three Fiber  
**Por qué:** Diferenciación visual, engagement del usuario, modernidad del sitio  
**Cómo aplicar:**
- Dynamic imports con `ssr: false`
- Skeleton loaders durante carga
- Fallback estático para usuarios sin WebGL

---

## Performance

### DPR limitado a [1, 2]
**Fecha:** 2026-04-08  
**Decisión:** Limitar Device Pixel Ratio a máximo 2  
**Por qué:** Evitar overhead en pantallas 4K/5K, mejor balance performance/calidad  
**Cómo aplicar:** `dpr={[1, 2]}` en todos los Canvas

### Shadows deshabilitados
**Fecha:** 2026-04-08  
**Decisión:** No usar sombras en modelos 3D (`castShadow={false}`)  
**Por qué:** Reducir costo de renderizado, las sombras no son críticas para la experiencia  
**Cómo aplicar:** Omitir castShadow/receiveShadow en todos los meshes

### Skeleton loading obligatorio
**Fecha:** 2026-04-08  
**Decisión:** Implementar skeleton loader en todos los componentes 3D  
**Por qué:** Evitar layout shift (CLS), mejor UX durante carga  
**Cómo aplicar:** Usar `loading` prop en dynamic imports con mismo tamaño que componente final

---

## Accesibilidad

### Fallback estático para usuarios sin WebGL
**Fecha:** 2026-04-08  
**Decisión:** Mostrar imágenes estáticas si WebGL no está disponible o si el usuario prefiere reduced-motion  
**Por qué:** Inclusión, cumplimiento WCAG, soporte universal  
**Cómo aplicar:**
```tsx
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
return prefersReducedMotion ? <StaticFallback /> : <Scene3D />;
```

### aria-label descriptivos
**Fecha:** 2026-04-08  
**Decisión:** Incluir descripciones específicas por servicio en componentes 3D  
**Por qué:** Screen readers necesitan contexto de lo que representa el 3D  
**Cómo aplicar:** Prop `ariaLabel` en Scene3DWrapper con descripción completa

---

## SEO

### Structured Data (JSON-LD)
**Fecha:** 2026-04-07  
**Decisión:** Implementar schema.org completo con Organization + Services  
**Por qué:** Rich snippets en Google, mejor posicionamiento, legitimidad  
**Cómo aplicar:** Script JSON-LD en layout.tsx con todos los servicios

### Metadata optimizado
**Fecha:** 2026-04-07  
**Decisión:** Keywords orientadas a beneficios, no features  
**Por qué:** Los clientes buscan soluciones ("landing page conversión") no tecnologías  
**Cómo aplicar:** Revisar keywords en `documentacion/seo.md`

---

## UX/UI

### Mobile-first siempre
**Fecha:** 2026-04-07  
**Decisión:** Diseñar desde breakpoint móvil y escalar hacia desktop  
**Por qué:** Mayoría del tráfico web es mobile en Argentina  
**Cómo aplicar:**
- Dimensiones 3D: `200px × 220px` en mobile, `clamp(180px, 25vw, 300px)` en desktop
- Grid de servicios: `grid-cols-1` mobile, `md:grid-cols-2` tablet, `lg:grid-cols-3` desktop

### Pan deshabilitado en OrbitControls
**Fecha:** 2026-04-08  
**Decisión:** `enablePan: false` en todos los OrbitControls  
**Por qué:** Evitar conflictos con scroll de página, mejor experiencia touch  
**Cómo aplicar:** Configuración por defecto en Scene3DWrapper

### Límites de ángulos polares
**Fecha:** 2026-04-08  
**Decisión:** Restringir rotación vertical entre π/3 y π/1.5  
**Por qué:** Mantener vista óptima del modelo, evitar orientaciones confusas  
**Cómo aplicar:**
```tsx
minPolarAngle={Math.PI / 3}
maxPolarAngle={Math.PI / 1.5}
```

---

## Deploy

### Vercel como plataforma principal
**Fecha:** 2026-04-07  
**Decisión:** Deploy en Vercel con dominio en Cloudflare  
**Por qué:** Integración nativa Next.js, zero-config, edge functions  
**Cómo aplicar:**
- `vercel deploy` para previews
- `vercel --prod` para producción
- DNS en Cloudflare con proxy activado

---

## Mantenimiento

### AGENTS.md para Next.js breaking changes
**Fecha:** 2026-04-07  
**Decisión:** Recordatorio para consultar docs de Next.js antes de asumir APIs  
**Por qué:** Next.js 15 tiene breaking changes vs versiones anteriores  
**Cómo aplicar:** Siempre leer `node_modules/next/dist/docs/` antes de implementar features nuevos
