# TODO — Studio Nodo Landing

## 🚨 Crítico (Esta Semana)

- [ ] **Crear og-image.jpg profesional**
  - Diseñar en Figma (1200x630px)
  - Incluir logo Studio Nodo
  - Texto: "Desarrollo Web, E-Commerce y Branding"
  - Fondo: #07080c
  - Exportar como JPG optimizado
  - Reemplazar `/public/og-image.jpg`

- [ ] **Setup Google Analytics 4**
  ```tsx
  // En layout.tsx, agregar:
  <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
  ```

- [ ] **Optimizar imágenes de servicios**
  - Descargar desde Figma CDN → /public/services/
  - Convertir a WebP con Sharp
  - Actualizar rutas en ServiceCard.tsx

---

## 🎯 Importante (Próxima Semana)

- [ ] **Agregar sección Portfolio**
  - Ubicación: Entre Servicios y Beneficios
  - 3-6 proyectos con screenshots
  - Filtro por tipo (Landing/E-commerce/Branding)
  - Links a sitios live o caso de estudio

- [ ] **Formulario de Contacto**
  - Opción A: Web3Forms (gratis, sin backend)
  - Opción B: Resend + API Route
  - Validación con Zod
  - Toast de confirmación

- [ ] **Mejorar menu mobile**
  - Drawer animado con Framer Motion
  - Overlay con backdrop-filter
  - Close on outside click

---

## 💡 Mejoras (2 Semanas)

- [ ] **Agregar Testimonios**
  - 2-3 testimonios de clientes
  - Foto/logo + quote + nombre
  - Resultados específicos
  - Ubicación: Después de Beneficios

- [ ] **Implementar tracking de eventos**
  ```js
  // Trackear:
  - Click en servicios
  - Scroll a Contacto
  - Click en WhatsApp
  - Click en emails/Instagram
  ```

- [ ] **Crear favicon completo**
  - favicon.ico (32x32)
  - icon.png (512x512)
  - apple-touch-icon.png (180x180)

- [ ] **Accesibilidad**
  - Skip link al contenido
  - Mejorar alt texts
  - aria-labels en menu mobile
  - Focus states más visibles

---

## 🚀 Crecimiento (1 Mes)

- [ ] **Iniciar Blog SEO**
  - "Cómo elegir diseño web para tu PYME"
  - "E-commerce vs Marketplace"
  - "Branding: por qué lo necesitás"
  - Setup con MDX o Contentlayer

- [ ] **Calculadora de Presupuesto**
  - Widget interactivo
  - Seleccionar tipo de proyecto + features
  - Estimación automática + CTA

- [ ] **Setup Analytics Avanzado**
  - Hotjar o Microsoft Clarity
  - Event tracking detallado
  - Conversion funnels
  - A/B testing framework

- [ ] **FAQs con Schema**
  ```json
  {
    "@type": "FAQPage",
    "mainEntity": [...]
  }
  ```

---

## 🛠️ Técnico

- [ ] **Lighthouse CI**
  - Setup en GitHub Actions
  - Score mínimo: 90/100
  - Alerts en PRs

- [ ] **Bundle Analysis**
  ```bash
  npm install @next/bundle-analyzer
  ```

- [ ] **Implementar ISR**
  ```tsx
  export const revalidate = 3600; // 1 hora
  ```

- [ ] **Preconnect a dominios externos**
  ```tsx
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  ```

---

## 🎨 Diseño

- [ ] **Favicon profesional**
  - Diseñar en Figma
  - Exportar todos los tamaños

- [ ] **Micro-interacciones**
  - Confetti al enviar form
  - Toast notifications
  - Progress bar mejorado

- [ ] **Dark mode toggle** (opcional)
  - Si se decide agregar modo claro

---

## 📝 Contenido

- [ ] **Copy review**
  - Revisar textos con copywriter
  - A/B test de headlines
  - CTAs más persuasivos

- [ ] **Case studies detallados**
  - Problema → Solución → Resultado
  - Screenshots before/after
  - Testimonios integrados

- [ ] **Lead Magnet**
  - "Checklist: Qué incluir en tu web corporativa"
  - PDF descargable
  - Captura de email

---

## 🔒 Seguridad

- [ ] **CSP Headers**
  ```js
  // next.config.js
  headers: {
    'Content-Security-Policy': "..."
  }
  ```

- [ ] **Rate Limiting**
  - Implementar en formulario
  - Upstash Redis + Vercel KV

- [ ] **Variables de entorno**
  - Crear .env.example
  - Documentar todas las vars

---

## 📊 Marketing

- [ ] **Setup Meta Pixel**
  - Para retargeting
  - Tracking de conversiones

- [ ] **Email Marketing**
  - Integrar Mailchimp/ConvertKit
  - Lead magnet → nurture sequence

- [ ] **Referral Program**
  - "Recomendá y obtené 10% descuento"
  - Tracking de referidos

---

## ✅ Completado

- [x] Limpiar SVGs sin uso
- [x] Eliminar documentación temporal
- [x] Corregir clase "noise"
- [x] Agregar logo.png
- [x] Crear og-image.jpg (temporal)
- [x] Optimizar espaciado entre secciones
- [x] Restaurar diseño de servicios (imagen al costado)
- [x] Navbar a la derecha
- [x] Reducir círculos en Proceso
- [x] Remover botón "Solicitar presupuesto"
- [x] Unificar gradientes de títulos

---

**Última actualización:** 2026-04-09
