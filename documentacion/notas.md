# Notas de Desarrollo — Nodo Landing

## Notas Generales

### Fecha: 2026-04-07
**Tema:** Inicio del proyecto  
**Nota:** Bootstrap del proyecto con Next.js 15. Se optó por usar componentes 3D con React Three Fiber para diferenciación visual. La landing será one-page con scroll suave entre secciones.

---

### Fecha: 2026-04-07
**Tema:** SEO implementation  
**Nota:** Se implementó structured data completo con JSON-LD. Cada servicio está mapeado en el schema como un Service individual. Esto debería ayudar a que Google indexe correctamente cada servicio por separado.

**Pendiente:** Crear og-image.jpg para mejorar preview en redes sociales.

---

### Fecha: 2026-04-08
**Tema:** UX improvements con ui-ux-pro-max  
**Nota:** Aplicadas todas las mejoras críticas de accesibilidad y performance. El CLS bajó significativamente con los skeleton loaders. La decisión de deshabilitar pan y limitar ángulos polares mejoró mucho la UX en mobile.

**Aprendizaje:** prefers-reduced-motion es crítico para 3D — algunos usuarios se marean con rotación automática.

---

### Fecha: 2026-04-08
**Tema:** Organización de documentación  
**Nota:** Reestructurado el proyecto siguiendo la nueva convención del studio:
- `docs/` → `documentacion/`
- Archivos separados: brief, decisiones, requisitos, seo, ux-mejoras, notas

Esto hace más fácil encontrar información específica sin tener que leer un solo archivo gigante.

---

## Ideas para Futuras Iteraciones

### Portfolio / Casos de Éxito
**Prioridad:** Media  
**Idea:** Agregar sección con 3-4 proyectos destacados. Mostrar screenshots, stack usado y resultados obtenidos (métricas, testimonios).

**Por qué:** Genera confianza, demuestra experiencia real, ayuda con SEO (más contenido único).

**Cómo implementar:**
- Nueva sección después de servicios
- Grid de cards con imagen, título, descripción breve
- Modal o página dedicada para ver detalles completos

---

### Blog / Recursos
**Prioridad:** Baja  
**Idea:** Sección de blog con artículos técnicos, guías para PYMEs (ej: "Cómo elegir el mejor stack para tu e-commerce").

**Por qué:** SEO a largo plazo, posiciona como referentes, genera tráfico orgánico recurrente.

**Cómo implementar:**
- Usar Next.js App Router con dynamic routes
- MDX para escribir artículos con componentes React
- RSS feed automático

---

### Calculadora de Presupuesto
**Prioridad:** Media  
**Idea:** Herramienta interactiva donde el usuario selecciona qué necesita (landing, e-commerce, branding) y obtiene un presupuesto estimado.

**Por qué:** Lead magnet potente, ayuda a calificar leads, diferenciación vs competencia.

**Cómo implementar:**
- Multi-step form con estado local
- Opciones: tipo de sitio, features, urgencia, diseño custom vs template
- Al final, captura email y envía presupuesto por correo

---

### Integraciones con WhatsApp Business
**Prioridad:** Alta  
**Idea:** Botón flotante de WhatsApp que lleva a chat directo con mensaje pre-filled.

**Por qué:** En Argentina, WhatsApp es el canal preferido para contacto comercial. Reduce fricción vs formulario.

**Cómo implementar:**
```tsx
<a
  href="https://wa.me/5491112345678?text=Hola,%20me%20interesa%20un%20presupuesto%20para..."
  className="fixed bottom-4 right-4 bg-green-500 ..."
  target="_blank"
  rel="noopener noreferrer"
>
  <WhatsAppIcon />
</a>
```

---

### Testimonios de Clientes
**Prioridad:** Alta  
**Idea:** Sección con 3-5 testimonios reales de clientes satisfechos.

**Por qué:** Prueba social, genera confianza, aumenta conversión.

**Cómo implementar:**
- Cards con foto del cliente (o logo de su empresa)
- Quote breve (1-2 oraciones)
- Nombre + cargo + empresa
- Opcional: rating con estrellas

---

### Dark Mode
**Prioridad:** Baja  
**Idea:** Toggle para cambiar entre tema claro y oscuro.

**Por qué:** Preferencia personal de usuarios, modernidad, accesibilidad para usuarios sensibles a luz.

**Cómo implementar:**
- next-themes para persistencia
- Tailwind dark: modifier
- Toggle en navbar o footer

**Consideración:** Los componentes 3D tendrían que adaptarse también (cambiar colores de materiales).

---

## Issues Conocidos

### Issue #1: Formulario de contacto no funcional
**Status:** Pendiente  
**Descripción:** El formulario existe pero no envía emails. Necesita integración con backend.

**Soluciones posibles:**
1. **Resend + React Email** (recomendado) — $0 hasta 3000 emails/mes
2. **SendGrid** — gratis hasta 100 emails/día
3. **n8n webhook** — self-hosted, gratis
4. **Email directo con API Route** — requiere servidor SMTP

**Decisión pendiente:** Definir proveedor según necesidades de tracking y volumen esperado.

---

### Issue #2: Falta og-image.jpg
**Status:** Pendiente assets  
**Descripción:** El meta tag apunta a `/og-image.jpg` pero el archivo no existe.

**Impacto:** Preview roto al compartir en redes sociales (Twitter, LinkedIn, WhatsApp).

**Solución:**
- Crear imagen 1200×630px en Figma con branding
- Exportar como JPG optimizado (<200KB)
- Ubicar en `/public/og-image.jpg`

---

### Issue #3: Sin Analytics
**Status:** Pendiente configuración  
**Descripción:** No hay tracking de visitas, conversiones ni comportamiento del usuario.

**Solución:**
- Google Analytics 4 (gratis, completo)
- Vercel Analytics (integrado, simple pero limitado)
- Plausible (privado, $9/mes)

**Recomendación:** Empezar con GA4, migrar a Plausible si la privacidad se vuelve concern para los clientes.

---

## Decisiones Pendientes

### ¿Multilenguaje (EN + ES)?
**Contexto:** El mercado principal es Argentina (ES) pero podrían llegar clientes internacionales.

**Opciones:**
1. Solo ES — más simple, enfoque local
2. ES + EN — más complejo, mayor alcance

**Consideración:** Next.js i18n requiere configuración de rutas (`/es/`, `/en/`). No es trivial.

**Decisión actual:** Solo ES hasta validar tracción local. Reevaluar en 6 meses.

---

### ¿Agregar precios?
**Contexto:** Algunos studios muestran precios aproximados, otros solo "solicitar presupuesto".

**Pros de mostrar precios:**
- Filtra leads no calificados
- Genera confianza (transparencia)
- Reduce consultas de presupuestos fuera de rango

**Contras:**
- Los proyectos varían mucho (difícil poner precio fijo)
- Competencia puede usar esa info
- Puede espantar leads que luego negociarían

**Decisión actual:** No mostrar precios. Ofrecer presupuesto personalizado vía formulario o WhatsApp.

---

### ¿Self-host fonts o usar Google Fonts?
**Contexto:** Actualmente se usa Geist (font de Vercel) con next/font.

**Opciones:**
1. **next/font local** — mejor performance, privacidad, sin latencia de Google
2. **Google Fonts** — más variedad, fácil cambiar

**Decisión actual:** next/font con Geist. Es rápido, moderno y viene optimizado por Vercel.

---

## Métricas a Monitorear

### Performance
- Core Web Vitals (LCP, CLS, FID)
- Time to Interactive (TTI)
- Total Blocking Time (TBT)
- Tamaño de bundle JS

**Herramienta:** Lighthouse, PageSpeed Insights, Vercel Analytics

---

### SEO
- Posición en Google para keywords principales
- Impresiones y clics (Search Console)
- CTR desde SERP
- Backlinks (Ahrefs, Moz)

**Herramienta:** Google Search Console, Ahrefs (opcional)

---

### Conversión
- Tasa de conversión formulario de contacto
- Tasa de conversión WhatsApp
- Bounce rate
- Tiempo en página
- Scroll depth (cuántos llegan al footer)

**Herramienta:** Google Analytics 4, Hotjar (opcional para heatmaps)

---

## Links Útiles

### Recursos de diseño
- Figma del proyecto: (pendiente link)
- Paleta de colores: (definir y documentar aquí)
- Tipografía: Geist (Variable font de Vercel)

### Herramientas de desarrollo
- Vercel Dashboard: https://vercel.com/dashboard
- Cloudflare Dashboard: https://dash.cloudflare.com/
- Repo GitHub: (pendiente si se sube a GitHub)

### Validación y testing
- PageSpeed Insights: https://pagespeed.web.dev/
- Schema Validator: https://validator.schema.org/
- Meta Tags Preview: https://metatags.io/
- WAVE Accessibility: https://wave.webaim.org/

---

## Changelog

### v1.0.0 — 2026-04-07
- ✅ Setup inicial con Next.js 15
- ✅ Componentes 3D implementados para 6 servicios
- ✅ Hero section con CTA
- ✅ Grid de servicios responsive
- ✅ SEO básico (metadata, sitemap, robots.txt)
- ✅ Structured Data (JSON-LD)

### v1.1.0 — 2026-04-08
- ✅ Mejoras UX (ui-ux-pro-max)
- ✅ Skeleton loaders para componentes 3D
- ✅ Fallback para usuarios sin WebGL
- ✅ Soporte para prefers-reduced-motion
- ✅ Optimización de performance (DPR, shadows)
- ✅ Accesibilidad mejorada (aria-labels, role="img")

### Futuro (v2.0.0)
- [ ] Formulario de contacto funcional
- [ ] WhatsApp floating button
- [ ] Sección de testimonios
- [ ] og-image.jpg creado
- [ ] Google Analytics configurado
- [ ] Deploy a producción con dominio custom
