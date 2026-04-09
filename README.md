# Nodo Landing

Landing page corporativa para **Studio Nodo** — Web studio especializado en desarrollo web, e-commerce y branding para PYMEs en Argentina.

## 🚀 Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **3D:** Three.js + React Three Fiber + Drei
- **Deploy:** Vercel

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Linter
npm run lint
```

El servidor de desarrollo estará disponible en [http://localhost:3000](http://localhost:3000)

## 🎨 Características

- ✅ Componentes 3D interactivos para cada servicio
- ✅ SEO optimizado con structured data (JSON-LD)
- ✅ Accesibilidad WCAG 2.1 nivel AA
- ✅ Performance optimizado (Core Web Vitals)
- ✅ Mobile-first responsive design
- ✅ Soporte para `prefers-reduced-motion`
- ✅ Fallback estático para usuarios sin WebGL

## 📁 Estructura

```
nodo-landing/
├── src/
│   ├── app/              # App Router (páginas y layouts)
│   ├── components/       # Componentes React
│   │   ├── 3d/          # Componentes Three.js
│   │   └── ui/          # Componentes UI
│   └── lib/              # Utilidades
├── public/               # Assets estáticos
├── documentacion/        # Documentación del proyecto
│   ├── brief.md         # Brief del cliente
│   ├── decisiones.md    # Decisiones técnicas
│   ├── requisitos.md    # Requisitos funcionales
│   ├── seo.md           # Estrategia SEO
│   ├── ux-mejoras.md    # Mejoras UX
│   └── notas.md         # Notas de desarrollo
└── CLAUDE.md            # Contexto para Claude Code
```

## 📝 Documentación

Para contexto completo del proyecto, consultar la carpeta **`documentacion/`**:

- **brief.md** — Objetivo del proyecto y público objetivo
- **decisiones.md** — Decisiones técnicas y su justificación
- **requisitos.md** — Requisitos funcionales y no funcionales
- **seo.md** — Estrategia SEO y checklist
- **ux-mejoras.md** — Mejoras UX implementadas
- **notas.md** — Notas de desarrollo, ideas, issues

## 🔧 Configuración

### Variables de entorno

Crear archivo `.env.local` (opcional, por ahora no hay secrets):

```env
NEXT_PUBLIC_SITE_URL=https://studionodo.com
```

### Deploy a Vercel

```bash
# Deploy a preview
vercel deploy

# Deploy a producción
vercel --prod
```

## 📊 Performance

Métricas objetivo (Core Web Vitals):
- **LCP** (Largest Contentful Paint): < 2.5s ✅
- **CLS** (Cumulative Layout Shift): < 0.1 ✅
- **FID** (First Input Delay): < 100ms ✅

## 🎯 Próximos pasos

- [ ] Implementar formulario de contacto funcional
- [ ] Crear og-image.jpg para redes sociales
- [ ] Configurar Google Analytics
- [ ] Agregar botón flotante de WhatsApp
- [ ] Deploy a producción con dominio custom

## 📄 Licencia

Copyright © 2026 Studio Nodo. Todos los derechos reservados.
