# SEO — Studio Nodo Landing

## ✅ Implementado

### Metadata básico
- [x] Título optimizado: "Studio Nodo | Diseño Web & Branding en Argentina"
- [x] Descripción con keywords: desarrollo web, e-commerce, branding
- [x] Keywords relevantes para búsqueda local
- [x] Canonical URL configurado

### Open Graph & Social
- [x] Open Graph completo (title, description, type, url, image)
- [x] Twitter Card configurado
- [x] Metadata específico para compartir en redes

### Structured Data (JSON-LD)
- [x] Schema.org Organization
- [x] Schema.org Services (todos los servicios listados)
- [x] Información de contacto y ubicación
- [x] URLs canónicas

### Archivos técnicos
- [x] Sitemap.xml generado automáticamente
- [x] Robots.txt configurado
- [x] Web Manifest para PWA

### On-page SEO
- [x] Subtítulo del hero mejorado con keywords
- [x] Descripciones de servicios optimizadas (orientadas a beneficios)
- [x] Alt text descriptivo en todas las imágenes
- [x] Estructura semántica HTML

---

## ⏳ Pendiente (requiere assets)

### Imágenes para redes sociales
- [ ] `/public/og-image.jpg` (1200×630px) — imagen para Open Graph/Twitter
- [ ] `/public/icon-192.png` (192×192px) — icono PWA
- [ ] `/public/icon-512.png` (512×512px) — icono PWA
- [ ] `/public/logo.png` — logo principal para schema.org
- [ ] `/public/favicon.ico` — favicon estándar
- [ ] `/public/apple-touch-icon.png` (180×180px) — iOS home screen

### Configuración externa
- [ ] Google Analytics o similar
- [ ] Google Search Console
- [ ] Enviar sitemap a Search Console
- [ ] Verificar propiedad del sitio

---

## 📊 Keywords principales

### Servicios core
- desarrollo web argentina
- diseño web
- landing page conversión
- e-commerce argentina
- tienda online
- web corporativa

### Diseño & branding
- branding diseño
- diseño logotipo
- identidad de marca
- diseño gráfico

### Marketing digital
- redes sociales gestión
- estrategia digital
- contenido redes sociales

### Localización
- argentina
- buenos aires
- pymes argentina

---

## 🎯 Próximos pasos

### 1. Generar assets visuales
**Prioridad:** Alta  
**Acciones:**
- Crear og-image.jpg en Figma o Canva con branding consistente
- Exportar logo en múltiples tamaños (192, 512, 180px)
- Generar favicon.ico

### 2. Validación técnica
**Prioridad:** Alta  
**Herramientas:**
- https://validator.schema.org/ — validar JSON-LD
- https://metatags.io/ — preview de meta tags
- https://www.opengraph.xyz/ — Open Graph debugger
- https://search.google.com/test/rich-results — Google Rich Results

### 3. Performance audit
**Prioridad:** Media  
**Métricas objetivo:**
- LCP < 2.5s
- CLS < 0.1
- FID < 100ms

**Herramientas:**
- https://pagespeed.web.dev/
- Lighthouse en Chrome DevTools
- WebPageTest

### 4. Monitoreo post-launch
**Prioridad:** Media  
**Acciones:**
- Configurar Google Search Console
- Monitorear Core Web Vitals
- Revisar posiciones para keywords principales
- Analizar tráfico orgánico

---

## 🔗 URLs de validación

| Herramienta | URL | Propósito |
|-------------|-----|-----------|
| Schema Validator | https://validator.schema.org/ | Validar JSON-LD |
| Meta Tags Preview | https://metatags.io/ | Preview social sharing |
| Open Graph Debugger | https://www.opengraph.xyz/ | Debug OG tags |
| Google Rich Results | https://search.google.com/test/rich-results | Verificar structured data |
| PageSpeed Insights | https://pagespeed.web.dev/ | Performance audit |
| Mobile-Friendly Test | https://search.google.com/test/mobile-friendly | Verificar responsive |

---

## 📈 Métricas de éxito

### Posicionamiento orgánico
- Top 10 para "desarrollo web argentina" (6 meses)
- Top 5 para "diseño web pymes" (6 meses)
- Top 3 para "studio nodo" (inmediato)

### Tráfico
- 500+ visitas orgánicas/mes (3 meses)
- 1000+ visitas orgánicas/mes (6 meses)

### Conversión
- CTR > 2% desde SERP
- Bounce rate < 60%
- Tiempo en sitio > 1:30min

---

## 📝 Notas técnicas

### Metadata actual
Ubicación: `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Studio Nodo | Diseño Web & Branding en Argentina",
  description: "Desarrollo web, e-commerce y branding para PYMEs...",
  keywords: ["desarrollo web argentina", "diseño web", ...],
  openGraph: { ... },
  twitter: { ... },
}
```

### JSON-LD Schema
Ubicación: `src/app/layout.tsx` (script tag en body)

Incluye:
- Organization con contacto y ubicación
- Servicios individuales con descripción y URL
- SameAs links (redes sociales cuando estén disponibles)

### Sitemap
Generado automáticamente en: `src/app/sitemap.ts`  
Actualización: Dinámica al build  
URL: `/sitemap.xml`

### Robots.txt
Ubicado en: `src/app/robots.ts`  
Permite: Todos los user-agents  
Sitemap: `https://studionodo.com/sitemap.xml`
