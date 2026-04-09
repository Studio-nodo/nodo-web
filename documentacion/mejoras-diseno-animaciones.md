# Mejoras de Diseño y Animaciones — Nodo Landing

## 🎯 Objetivo
Crear una experiencia fluida, consistente y profesional con espaciado uniforme y animaciones bien orquestadas.

---

## ✅ Mejoras Implementadas (2026-04-08)

### 1. **Espaciado Unificado**

#### Padding vertical de secciones
Todas las secciones ahora usan el mismo espaciado:
```tsx
py-24 md:py-32  // Mobile: 96px | Desktop: 128px
```

**Secciones afectadas:**
- ServicesSection
- BenefitsSection
- ProcessSection
- ContactSection

**Impacto:** Ritmo visual consistente, mejor flow de scroll

---

#### Margin bottom de headers
Headers de sección estandarizados:
```tsx
mb-20  // 80px de separación entre header y contenido
```

**Antes:** Variaba entre 12-16 (48-64px)  
**Ahora:** Consistente 20 (80px)

---

#### Gaps entre elementos

**Benefits grid:**
- Mobile: `gap-8` (32px)
- Desktop: `gap-8` (32px)

**Process steps:**
- Entre pasos: `mb-16 md:mb-20` (64px mobile, 80px desktop)

**Contact cards:**
- Entre cards: `gap-5` (20px)

---

### 2. **Diseño Visual Consistente**

#### Títulos de sección
Todos los h2 ahora usan el mismo gradiente:
```tsx
style={{
  background: "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, #ffffff 30%, #ffffff 70%, rgba(255,255,255,0.2) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}}
```

**Secciones actualizadas:**
- Servicios: "Nuestros servicios"
- Beneficios: "Por qué elegirnos"
- Proceso: "Cómo trabajamos"
- Contacto: "Hablemos"

---

#### Glass morphism unificado
Todas las cards/containers ahora usan valores consistentes:

```tsx
background: "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))"
border: "1px solid rgba(255,255,255,0.12)"
backdropFilter: "blur(12px)"
```

**Aplicado en:**
- Benefits cards
- Process step numbers
- Contact cards
- CTA buttons

---

#### Border radius estandarizado

| Elemento | Radius | Uso |
|----------|--------|-----|
| Cards grandes | `rounded-2xl` (16px) | Benefits, Contact |
| Buttons | `rounded-lg` (8px) | CTAs |
| Process circles | `rounded-full` | Números |

---

### 3. **Sistema de Animaciones Fluidas**

#### Easing function consistente
Todas las animaciones usan el mismo easing de Material Design:
```tsx
ease: [0.16, 1, 0.3, 1]  // Cubic bezier "easeOutExpo"
```

**Por qué:** Movimiento natural, suave al inicio y rápido al final

---

#### Timing de animaciones

| Tipo | Duration | Delay | Uso |
|------|----------|-------|-----|
| Headers | 0.8s | 0s | Títulos de sección |
| Cards | 0.9s | stagger 0.15s | Benefits, Contact |
| Steps | 0.9s | stagger 0.12s | Process steps |
| Icons | 0.8s | +0.25s | Iconos dentro de cards |
| CTAs | 0.7s | +0.5s | Botones de acción |

**Stagger:** Elementos similares aparecen en secuencia, no todos a la vez

---

#### Animaciones de entrada (inicial)

**Fade + Slide vertical:**
```tsx
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
```
**Usado en:** Headers, Cards, CTAs

**Fade + Slide + Scale:**
```tsx
initial={{ opacity: 0, y: 50, scale: 0.95 }}
whileInView={{ opacity: 1, y: 0, scale: 1 }}
```
**Usado en:** Benefits cards, Contact cards

**Fade + Slide lateral + Vertical:**
```tsx
initial={{ opacity: 0, y: 40, x: -20 }}
whileInView={{ opacity: 1, y: 0, x: 0 }}
```
**Usado en:** Process steps (sugiere dirección de lectura)

**Fade + Scale + Rotate:**
```tsx
initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
```
**Usado en:** Iconos de beneficios (efecto playful)

---

#### Animaciones de hover

**Benefits cards:**
```tsx
whileHover={{
  background: "...",  // Más opaco
  borderColor: "...", // Más visible
  y: -6,              // Levita 6px
  scale: 1.02,        // Crece 2%
  boxShadow: "..."    // Sombra profunda
}}
```

**Contact cards:**
```tsx
whileHover={{
  y: -4,
  scale: 1.01,
  boxShadow: "0 12px 36px rgba(0,0,0,0.35)"
}}
```

**CTAs:**
```tsx
whileHover={{
  y: -3,
  scale: 1.02,
  boxShadow: "0 8px 24px rgba(0,0,0,0.4)"
}}
```

**Process numbers:**
```tsx
whileHover={{
  scale: 1.1,
  borderColor: "rgba(255,255,255,0.35)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.3)"
}}
```

---

#### Animaciones de tap/click
Todas las interacciones tienen feedback:
```tsx
whileTap={{ scale: 0.98 }}  // CTAs, Contact cards
whileTap={{ scale: 0.96 }}  // Mobile CTAs (más evidente)
```

**Por qué:** Feedback táctil claro, especialmente importante en mobile

---

#### Animaciones continuas (loop)

**Glow de iconos (Benefits):**
```tsx
animate={{
  opacity: [0.5, 1, 0.5],
  scale: [1.6, 1.9, 1.6]
}}
transition={{
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
  delay: index * 0.3  // Stagger para no sincronizar
}}
```

**Glow de números (Process):**
```tsx
animate={{
  opacity: [0.6, 1, 0.6],
  scale: [0.9, 1.1, 0.9]
}}
transition={{
  duration: 2.5,
  repeat: Infinity,
  ease: "easeInOut",
  delay: index * 0.4
}}
```

**Por qué:** Atrae la atención sutilmente, agrega vida a la página

---

### 4. **Mejoras de ServicesSection**

#### Header rediseñado
**Antes:**
```tsx
<div className="glass px-12 py-3">
  <span>Nuestros servicios</span>
</div>
```

**Ahora:**
```tsx
<span>SERVICIOS</span>  // Label superior
<h2>Nuestros servicios</h2>  // Título con gradiente
```

**Consistente** con todas las demás secciones

---

#### Category labels mejorados
**Antes:**
- Espaciado: `pt-2 pb-4`
- Opacidad: `text-white/60`

**Ahora:**
- Espaciado: `pt-8 pb-12` (más aire)
- Opacidad: `text-white/50` (más sutil)
- Animación: fade + slide vertical

---

#### Separadores actualizados
**Antes:** Entre todos los servicios  
**Ahora:** Solo entre servicios del mismo grupo (no antes de category labels)

```tsx
{index < services.length - 1 && !categoryLabels[index + 1] && (
  <Separator />
)}
```

**Gradiente mejorado:**
```tsx
background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
```

---

### 5. **Mejoras de ServiceCard**

#### Espaciado interno
**Padding:**
- Mobile: `px-6 py-12`
- Desktop: `px-10 py-16`

**Max width:** `max-w-5xl` (más amplio, mejor uso del espacio)

---

#### CTAs mejorados
**Cambios:**
- Padding: `px-7 py-3` (más generoso)
- Border radius: `rounded-lg` (más suave)
- Backdrop blur: Agregado para consistencia
- Hover lift: `-3px` (más pronunciado)
- Scale on hover: `1.02`
- Scale on tap: `0.98` (feedback claro)

---

### 6. **Mejoras de BenefitsSection**

#### Cards más espaciosas
**Padding:**
- Mobile: `p-10`
- Desktop: `p-12`

**Border radius:** `rounded-2xl` (más suave)

---

#### Iconos con personalidad
**Animación de entrada:**
- Rotate inicial: `-8deg`
- Scale: `0.7 → 1`
- Duration: `0.8s`

**Glow animado:**
- Pulsa suavemente
- Stagger entre iconos (no todos a la vez)
- Blur: `20px` (más pronunciado)

---

### 7. **Mejoras de ProcessSection**

#### Números más grandes y prominentes
**Size:**
- Mobile: `w-14 h-14`
- Desktop: `w-20 h-20`

**Font size:** `clamp(18px, 2.5vw, 24px)` (antes: 16-20px)

---

#### Animación de entrada de números
```tsx
initial={{ scale: 0.8, rotate: -12 }}
whileInView={{ scale: 1, rotate: 0 }}
```

**Efecto:** Los números "ruedan" hacia su posición

---

#### Líneas conectoras mejoradas
**Width:** `w-0.5` (más gruesas, más visibles)  
**Height mínima:** `60px` (antes: 50px)  
**Gradiente:** 3 colores para fade suave

---

#### Contenido más legible
**Títulos:**
- Font size: `clamp(22px, 3.5vw, 32px)` (más grandes)
- Letter spacing: `-0.8px` (mejor tracking)

**Descripciones:**
- Font size: `clamp(15px, 1.8vw, 18px)` (más legibles)

---

### 8. **Mejoras de ContactSection**

#### Header agregado
**Antes:** Solo label "NOSOTROS"  
**Ahora:**
- Label: "CONTACTO"
- Título: "Hablemos" (con gradiente)

**Consistente** con todas las secciones

---

#### Cards más generosas
**Padding:**
- Mobile: `px-8 py-6`
- Desktop: `px-10 py-7`

**Gap entre cards:** `gap-5` (consistente)

**Max width:** `max-w-3xl` (más amplio)

---

#### Flecha de hover más clara
**Size:** `text-2xl` (más grande)  
**Opacidad:** `text-white/70` (más visible)

---

#### Copyright mejorado
**Spacing:** `mt-16` (más separado)  
**Font size:** `text-sm` (más legible)  
**Opacidad:** `text-white/25` (más visible)

---

## 📊 Impacto de las Mejoras

### Antes
- ❌ Espaciado inconsistente entre secciones
- ❌ Headers con diseños diferentes
- ❌ Animaciones sin timing definido
- ❌ Glass effect con valores variados
- ❌ Falta de feedback táctil en interacciones

### Después
- ✅ Espaciado uniforme y predecible
- ✅ Todos los headers con mismo estilo
- ✅ Sistema de animaciones orquestado
- ✅ Glass morphism consistente
- ✅ Feedback claro en todas las interacciones

---

## 🎨 Sistema de Diseño Resultante

### Espaciado
```
Section padding: py-24 md:py-32
Header margin: mb-20
Card gaps: gap-8 (benefits) | gap-5 (contact)
Step gaps: mb-16 md:mb-20
```

### Animaciones
```
Easing: [0.16, 1, 0.3, 1]
Duration base: 0.8-0.9s
Stagger delay: 0.12-0.15s
Hover lift: -3px to -6px
```

### Glass Effect
```
Background: linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))
Border: 1px solid rgba(255,255,255,0.12)
Backdrop: blur(12px)
```

### Hover States
```
Background: +0.05-0.08 opacity
Border: +0.10-0.15 opacity
Lift: y: -4 to -6
Scale: 1.01-1.02
Shadow: 0 12px 36px rgba(0,0,0,0.35)
```

---

## 🚀 Performance

### Optimizaciones aplicadas
- **Animaciones GPU-accelerated:** Todas usan `transform` y `opacity`
- **Viewport triggers:** `whileInView` solo anima cuando es visible
- **Once: true:** Animaciones de entrada solo se ejecutan una vez
- **Will-change implícito:** Framer Motion optimiza automáticamente

### No hay impacto negativo en:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)

**Por qué:** Las animaciones son CSS transforms, no layout changes

---

## 📝 Código de Referencia

### Template de sección
```tsx
<section className="relative z-10 w-full flex flex-col items-center px-6 py-24 md:py-32">
  {/* Header */}
  <motion.div
    className="text-center mb-20 w-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  >
    <span className="text-xs md:text-sm tracking-[10px] text-white/35 uppercase font-light mb-4 block">
      LABEL
    </span>
    <h2 style={{ gradiente }}>Título</h2>
  </motion.div>
  
  {/* Content */}
</section>
```

### Template de card
```tsx
<motion.div
  className="relative p-10 md:p-12 rounded-2xl"
  style={{
    background: "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
    border: "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(12px)",
  }}
  initial={{ opacity: 0, y: 50, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
  whileHover={{
    background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
    borderColor: "rgba(255,255,255,0.25)",
    y: -6,
    scale: 1.02,
    boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
  }}
/>
```

---

## 🎯 Próximos Pasos

### Micro-interacciones adicionales (opcional)
- [ ] Parallax sutil en scroll
- [ ] Cursor personalizado con glow
- [ ] Transitions entre secciones con IntersectionObserver
- [ ] Partículas reactivas al mouse

### Accesibilidad de animaciones
- [x] `prefers-reduced-motion` respetado (ya implementado en 3D)
- [ ] Extender a todas las animaciones de framer-motion
- [ ] Opción para desactivar animaciones en settings

---

## 📚 Referencias

- **Framer Motion:** https://www.framer.com/motion/
- **Material Design Motion:** https://m3.material.io/styles/motion/overview
- **Apple HIG Motion:** https://developer.apple.com/design/human-interface-guidelines/motion
- **Cubic Bezier Preview:** https://cubic-bezier.com/#.16,1,.3,1
