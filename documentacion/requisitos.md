# Requisitos — Nodo Landing

## Requisitos Funcionales

### RF-01: Mostrar servicios del studio
**Prioridad:** Alta  
**Descripción:** La landing debe mostrar los 6 servicios principales del studio con descripciones claras y visuales atractivos  
**Servicios:**
1. Landing Page
2. E-Commerce
3. Web Corporativa
4. Branding
5. Logotipo
6. Redes Sociales

**Criterio de aceptación:**
- Cada servicio tiene título, descripción y visual 3D interactivo
- Grid responsive que se adapta a mobile/tablet/desktop
- Descripciones orientadas a beneficios del cliente, no features técnicos

---

### RF-02: Hero section con call-to-action
**Prioridad:** Alta  
**Descripción:** Sección principal con título, subtítulo y botón de contacto  
**Elementos:**
- Título: "Creamos experiencias digitales que conectan"
- Subtítulo: con keywords SEO
- CTA: botón de contacto

**Criterio de aceptación:**
- CTA visible sin scroll (above the fold)
- Botón lleva a sección de contacto o WhatsApp

---

### RF-03: Componentes 3D interactivos
**Prioridad:** Alta  
**Descripción:** Cada servicio tiene un modelo 3D que el usuario puede rotar con mouse/touch  
**Comportamiento:**
- Rotación automática lenta
- Usuario puede rotar manualmente (OrbitControls)
- Limits de rotación para mantener vista óptima
- Skeleton loader durante carga

**Criterio de aceptación:**
- Todos los 3D cargan correctamente
- Interacción suave en mobile y desktop
- Fallback estático si WebGL no está disponible

---

### RF-04: Sección "Sobre Nosotros"
**Prioridad:** Media  
**Descripción:** Breve descripción del studio y su filosofía  
**Contenido:**
- Quiénes somos (2 personas: dev + diseñadora)
- Qué hacemos (web + branding + automatizaciones)
- Por qué elegirnos (calidad, rapidez, precio competitivo)

**Criterio de aceptación:**
- Máximo 3 párrafos cortos
- Tono profesional pero cercano

---

### RF-05: Formulario de contacto
**Prioridad:** Alta  
**Descripción:** Formulario funcional para que clientes potenciales se contacten  
**Campos:**
- Nombre
- Email
- Servicio de interés (dropdown)
- Mensaje

**Criterio de aceptación:**
- Validación de campos obligatorios
- Validación de formato de email
- Mensaje de confirmación al enviar
- Integración con email o webhook

---

### RF-06: Footer con links y redes sociales
**Prioridad:** Baja  
**Descripción:** Footer con información de contacto y links a redes  
**Contenido:**
- Email de contacto
- Links a Instagram, LinkedIn, Behance (cuando estén disponibles)
- Copyright

---

## Requisitos No Funcionales

### RNF-01: Performance
**Métrica:** Core Web Vitals de Google  
**Objetivo:**
- LCP (Largest Contentful Paint) < 2.5s
- CLS (Cumulative Layout Shift) < 0.1
- FID (First Input Delay) < 100ms

**Cómo lograrlo:**
- Optimización de imágenes con next/image
- Lazy loading de componentes 3D
- Skeleton loaders
- DPR limitado a [1, 2]

---

### RNF-02: SEO
**Objetivo:** Posicionar en primeras páginas de Google para keywords principales  
**Requisitos técnicos:**
- Metadata completo (title, description, keywords)
- Open Graph para redes sociales
- Structured Data (JSON-LD) con Organization + Services
- Sitemap.xml y robots.txt
- URLs semánticas
- Alt text en todas las imágenes

**Keywords objetivo:**
- desarrollo web argentina
- diseño web pymes
- e-commerce argentina
- branding diseño

---

### RNF-03: Accesibilidad
**Estándar:** WCAG 2.1 nivel AA  
**Requisitos:**
- Contraste mínimo 4.5:1 en textos
- aria-labels en componentes interactivos
- role="img" en canvas 3D
- Fallback para usuarios sin WebGL
- Soporte para prefers-reduced-motion
- Navegación por teclado funcional

---

### RNF-04: Responsive Design
**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

**Requisitos:**
- Mobile-first approach
- Grid de servicios: 1 col (mobile), 2 cols (tablet), 3 cols (desktop)
- Touch-friendly (botones mínimo 44×44px)
- Sin scroll horizontal
- Componentes 3D adaptados a cada tamaño

---

### RNF-05: Compatibilidad
**Navegadores soportados:**
- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Safari iOS (últimas 2 versiones)

**Dispositivos:**
- Desktop (Windows, macOS, Linux)
- Mobile (iOS, Android)
- Tablet (iPad, Android tablets)

**Fallbacks:**
- WebGL no disponible → imágenes estáticas
- JavaScript deshabilitado → contenido estático visible

---

### RNF-06: Seguridad
**Requisitos:**
- HTTPS obligatorio en producción
- Headers de seguridad (CSP, X-Frame-Options)
- Sin API keys hardcodeadas
- Validación server-side en formulario de contacto
- Protección contra spam (reCAPTCHA o similar)

---

### RNF-07: Mantenibilidad
**Código:**
- TypeScript estricto (no `any`)
- Componentes funcionales con hooks
- Convenciones de nombres consistentes
- Comentarios solo donde sea necesario (código autoexplicativo)

**Documentación:**
- CLAUDE.md con contexto del proyecto
- README.md con instrucciones de setup
- Carpeta `documentacion/` con brief, decisiones, requisitos

---

## Dependencias Técnicas

### Stack obligatorio
- **Framework:** Next.js 15 (App Router)
- **UI:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **3D:** Three.js + React Three Fiber + Drei
- **Deploy:** Vercel
- **DNS:** Cloudflare

### Dependencias NPM
```json
{
  "next": "^15.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "three": "^0.160.0",
  "@react-three/fiber": "^8.15.0",
  "@react-three/drei": "^9.92.0",
  "tailwindcss": "^3.4.0"
}
```

---

## Restricciones

### Presupuesto
- **Tiempo estimado:** 2-3 días de desarrollo
- **Hosting:** Plan gratuito de Vercel (suficiente para tráfico esperado)
- **Dominio:** ~$15/año en Cloudflare

### Contenido
- Textos en español (mercado argentino)
- Imágenes de servicios generadas con 3D (no stock photos)
- Sin generación de contenido por IA visible al usuario

### Legal
- Footer con copyright
- Política de privacidad (si se captura data personal en formulario)
- Términos y condiciones (opcional para landing simple)

---

## Criterios de Éxito

### Lanzamiento (MVP)
- [x] 6 servicios mostrados con 3D funcional
- [x] Hero section con CTA
- [x] SEO básico implementado
- [x] Performance: Core Web Vitals en verde
- [x] Accesibilidad: WCAG AA cumplido
- [ ] Formulario de contacto funcional
- [ ] Deploy en producción con dominio

### Post-lanzamiento (3 meses)
- [ ] 500+ visitas orgánicas/mes
- [ ] CTR > 2% desde Google
- [ ] Bounce rate < 60%
- [ ] Al menos 5 leads/mes desde formulario

### Mantenimiento continuo
- [ ] Monitoreo de Core Web Vitals
- [ ] Actualización de contenido según feedback de clientes
- [ ] A/B testing de CTA y descripciones de servicios
- [ ] Agregar casos de éxito / portfolio
