# Espaciado y Proporciones — Nodo Landing

## 🎯 Objetivo
Crear espacio visual abundante entre secciones, mejorar la respiración del contenido y asegurar proporciones armónicas en todos los tamaños de pantalla.

---

## ✅ Ajustes Finales Implementados (2026-04-08)

### 1. **Padding Vertical de Secciones**

#### Antes
```tsx
py-24 md:py-32  // 96px mobile, 128px desktop
```

#### Ahora

| Sección | Mobile | Desktop | Cambio |
|---------|--------|---------|--------|
| **ServicesSection** | 128px | 160px | +33% mobile, +25% desktop |
| **BenefitsSection** | 160px | 192px | +66% mobile, +50% desktop |
| **ProcessSection** | 160px | 192px | +66% mobile, +50% desktop |
| **ContactSection** | 160px | 192px | +66% mobile, +50% desktop |

**Código:**
```tsx
// Services
py-32 md:py-40

// Benefits, Process, Contact
py-40 md:py-48
```

**Resultado:** Secciones respiran mucho mejor, separación clara entre áreas

---

### 2. **Margin Bottom de Headers**

#### Antes
```tsx
mb-20  // 80px
```

#### Ahora
```tsx
mb-24 md:mb-32  // 96px mobile, 128px desktop
```

**Incremento:** +20% mobile, +60% desktop

**Aplicado en:**
- Todos los headers de sección (Servicios, Beneficios, Proceso, Contacto)

---

### 3. **Gap Entre Servicios**

#### Services List Container
**Antes:** `gap-4` (16px)  
**Ahora:** `gap-12 md:gap-16` (48px mobile, 64px desktop)

**Incremento:** +200% mobile, +300% desktop

---

#### Category Labels
**Antes:**
```tsx
pt-8 pb-12  // 32px top, 48px bottom
```

**Ahora:**
```tsx
pt-12 md:pt-16 pb-16 md:pb-20  // 48-64px top, 64-80px bottom
```

**Incremento:** +50-100% según breakpoint

---

#### Separadores Entre Servicios
**Antes:** `my-6` (24px arriba/abajo = 48px total)  
**Ahora:** `my-12 md:my-16` (48px mobile, 64px desktop arriba/abajo)

**Total:** 96px mobile, 128px desktop entre servicios del mismo grupo

---

### 4. **ServiceCard Spacing**

#### Container
**Max width:**
- Antes: `max-w-5xl` (1024px)
- Ahora: `max-w-6xl` (1152px)

**Incremento:** +12.5% (más horizontal space)

**Padding:**
- Antes: `px-6 md:px-10 py-12 md:py-16`
- Ahora: `px-6 md:px-12 py-16 md:py-20`

**Cambio:** 
- Horizontal: +20% desktop
- Vertical: +33% mobile, +25% desktop

---

#### Gap Imagen-Texto
**Mobile:**
- Antes: `gap-6` (24px)
- Ahora: `gap-8` (32px)
- **+33%**

**Desktop:**
- Antes: `gap-14` (56px)
- Ahora: `gap-16 lg:gap-20` (64px → 80px en pantallas grandes)
- **+14% a +43%**

---

#### Desktop Row
Agregado `justify-center` para centrar perfectamente el contenido

**Antes:**
```tsx
className="hidden md:flex items-center gap-14 w-full"
```

**Ahora:**
```tsx
className="hidden md:flex items-center justify-center gap-16 lg:gap-20 w-full"
```

---

### 5. **BenefitsSection Spacing**

#### Grid Container
**Max width:**
- Antes: `max-w-5xl`
- Ahora: `max-w-6xl`

**Gap entre cards:**
- Antes: `gap-8 md:gap-8` (32px)
- Ahora: `gap-10 md:gap-10` (40px)

**Incremento:** +25%

---

### 6. **ProcessSection Spacing**

#### Steps Container
**Max width:**
- Antes: `max-w-4xl` (896px)
- Ahora: `max-w-5xl` (1024px)

**Incremento:** +14%

---

#### Gap Entre Número y Contenido
**Antes:** `gap-8 md:gap-12` (32px mobile, 48px desktop)  
**Ahora:** `gap-10 md:gap-16` (40px mobile, 64px desktop)

**Incremento:** +25% mobile, +33% desktop

---

#### Margin Entre Steps
**Antes:** `mb-16 md:mb-20` (64px mobile, 80px desktop)  
**Ahora:** `mb-20 md:mb-24` (80px mobile, 96px desktop)

**Incremento:** +25% mobile, +20% desktop

---

### 7. **ContactSection Spacing**

#### Cards Container
**Max width:**
- Antes: `max-w-3xl` (768px)
- Ahora: `max-w-4xl` (896px)

**Incremento:** +16%

---

#### Gap Entre Cards
**Antes:** `gap-5` (20px)  
**Ahora:** `gap-6 md:gap-7` (24px mobile, 28px desktop)

**Incremento:** +20% mobile, +40% desktop

---

#### Copyright Margin
**Antes:** `mt-16` (64px)  
**Ahora:** `mt-20 md:mt-24` (80px mobile, 96px desktop)

**Incremento:** +25% mobile, +50% desktop

---

## 📊 Resumen de Cambios

### Espaciado Vertical (Padding de Secciones)

| Breakpoint | Antes | Ahora | Incremento |
|------------|-------|-------|------------|
| **Mobile** | 96px | 128-160px | +33-66% |
| **Desktop** | 128px | 160-192px | +25-50% |

### Gaps Internos

| Elemento | Antes | Ahora | Incremento |
|----------|-------|-------|------------|
| Header → Content | 80px | 96-128px | +20-60% |
| Services gap | 16px | 48-64px | +200-300% |
| Benefits gap | 32px | 40px | +25% |
| Process steps | 64-80px | 80-96px | +25% |
| Contact cards | 20px | 24-28px | +20-40% |

### Max Widths (Contenedores)

| Componente | Antes | Ahora | Incremento |
|------------|-------|-------|------------|
| ServiceCard | 1024px | 1152px | +12.5% |
| Benefits grid | 1024px | 1152px | +12.5% |
| Process steps | 896px | 1024px | +14% |
| Contact cards | 768px | 896px | +16% |

---

## 🎨 Resultado Visual

### Antes
```
[Hero]
  ↓ 96px
[Services]  (contenido denso)
  ↓ 96px
[Benefits]  (cards apretadas)
  ↓ 96px
[Process]   (steps juntos)
  ↓ 96px
[Contact]   (cards angostas)
```

### Ahora
```
[Hero]
  ↓ 128-160px ✨
[Services]  (contenido espacioso, bien separado)
  ↓ 160-192px ✨
[Benefits]  (cards amplias con aire)
  ↓ 160-192px ✨
[Process]   (steps bien distanciados)
  ↓ 160-192px ✨
[Contact]   (cards generosas)
```

---

## 💡 Principios Aplicados

### 1. **Espaciado Progresivo**
Más espacio a medida que avanzamos hacia desktop:
- Mobile: Base sólida pero conservadora (espacio de scroll limitado)
- Desktop: Muy generoso (aprovecha espacio horizontal)

### 2. **Jerarquía Visual Clara**
```
Sección → Sección:    160-192px (mayor)
Header → Content:     96-128px (medio)
Elementos internos:   24-96px (variable según contexto)
```

### 3. **Proporciones Armónicas**
Todos los valores son múltiplos de 4px (Tailwind's spacing scale):
- 24px (gap-6)
- 32px (gap-8)
- 40px (gap-10)
- 48px (gap-12)
- 64px (gap-16)
- 80px (gap-20)
- 96px (gap-24)
- 128px (py-32)
- 160px (py-40)
- 192px (py-48)

### 4. **Centrado Perfecto**
Todos los containers usan:
```tsx
flex flex-col items-center  // Centrado vertical
justify-center              // Centrado horizontal (cuando aplica)
mx-auto                    // Centrado del contenedor
```

### 5. **Max Widths Proporcionales**
```
Contact (más angosto)  → 896px  (max-w-4xl)
Process                → 1024px (max-w-5xl)
Benefits, Services     → 1152px (max-w-6xl)
```

Orden lógico: Contact debe ser íntimo, Services puede ser amplio

---

## 📱 Breakpoints y Responsive

### Mobile (< 768px)
- Padding conservador pero generoso
- Gaps suficientes para no apretar
- Max widths 100% del viewport menos padding

### Desktop (≥ 768px)
- Padding muy espacioso
- Gaps amplios
- Max widths limitan para mantener line length óptima

### Large Desktop (≥ 1024px)
- Gaps extra en ServiceCards (gap-20)
- Aprovecha espacio horizontal sin perder legibilidad

---

## 🎯 Impacto en UX

### Antes
- ❌ Sensación de densidad
- ❌ Secciones se mezclan visualmente
- ❌ Difícil distinguir bloques de contenido
- ❌ Eye strain por falta de aire

### Ahora
- ✅ Sensación de amplitud y lujo
- ✅ Separación clara entre secciones
- ✅ Fácil navegar visualmente
- ✅ Lectura descansada y placentera

---

## 📐 Fórmulas de Espaciado

### Padding de Sección
```
Base mobile:  py-40  (160px)
Base desktop: py-48  (192px)
Excepción Services: py-32 md:py-40 (tiene muchos elementos internos)
```

### Header Margin
```
mb-24 md:mb-32  (96px mobile, 128px desktop)
Consistente en todas las secciones
```

### Gaps Internos
```
Pequeño:  gap-6 md:gap-7   (24-28px) → Contact cards
Medio:    gap-8            (32px)    → Mobile ServiceCard
Grande:   gap-10           (40px)    → Benefits grid
X-Grande: gap-12 md:gap-16 (48-64px) → Services list
XX-Grande: gap-16 lg:gap-20 (64-80px) → ServiceCard desktop
```

---

## 🔍 Checklist de Espaciado

- [x] Padding vertical de secciones incrementado 33-66%
- [x] Headers con margin consistente (96-128px)
- [x] Services con gaps amplios (48-64px)
- [x] Category labels con más aire (64-80px)
- [x] ServiceCards más anchas (max-w-6xl)
- [x] Gap imagen-texto aumentado (64-80px desktop)
- [x] Benefits grid espaciada (gap-10, max-w-6xl)
- [x] Process steps bien separados (80-96px)
- [x] Process container más ancho (max-w-5xl)
- [x] Contact cards más anchas (max-w-4xl)
- [x] Contact cards gap aumentado (24-28px)
- [x] Copyright con más margen (80-96px)
- [x] Todos los elementos centrados con justify-center

---

## 🚀 Resultado Final

**Espaciado total de página (mobile):**
```
Hero: 100vh
  ↓
Services: ~160px padding + ~800px content = ~960px
  ↓
Benefits: ~160px padding + ~600px content = ~760px
  ↓
Process: ~160px padding + ~700px content = ~860px
  ↓
Contact: ~160px padding + ~400px content = ~560px

Total aproximado: 100vh + 3140px
```

**Espaciado total de página (desktop):**
```
Hero: 100vh
  ↓
Services: ~192px padding + ~1200px content = ~1392px
  ↓
Benefits: ~192px padding + ~500px content = ~692px
  ↓
Process: ~192px padding + ~650px content = ~842px
  ↓
Contact: ~192px padding + ~350px content = ~542px

Total aproximado: 100vh + 3468px
```

**Scroll time estimado:**
- Mobile: ~45-60 segundos
- Desktop: ~40-50 segundos

**Perfecto balance** entre contenido y espacio blanco ✨
