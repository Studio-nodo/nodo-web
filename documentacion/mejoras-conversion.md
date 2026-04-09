# Mejoras de Conversión — Nodo Landing

## 🎯 Objetivo
Transformar la landing de informativa a orientada a conversión, facilitando que visitantes se conviertan en leads/clientes.

---

## ✅ Implementado (2026-04-08)

### 1. CTA "Solicitar presupuesto" en cada servicio

**Ubicación:** `ServiceCard.tsx`

**Funcionalidad:**
- Botón en cada servicio que abre cliente de email
- Asunto pre-rellenado: "Consulta sobre [SERVICIO]"
- Body del email con mensaje inicial cortés

**Código:**
```typescript
const getMailtoLink = (serviceName: string) => {
  const subject = encodeURIComponent(`Consulta sobre ${serviceName}`);
  const body = encodeURIComponent(
    `Hola,\n\nEstoy interesado en obtener más información sobre el servicio de ${serviceName}.\n\nGracias.`
  );
  return `mailto:mmartone@studio-nodo.com?subject=${subject}&body=${body}`;
};
```

**Impacto esperado:**
- ↑ Conversión: Reduce fricción (1 click vs escribir email completo)
- ↑ Calidad de leads: El asunto pre-rellenado identifica el servicio de interés
- ✅ UX: El usuario sabe exactamente qué pasará al hacer click

---

### 2. WhatsApp Floating Button

**Ubicación:** `WhatsAppButton.tsx` + `page.tsx`

**Características:**
- Botón fijo bottom-left con z-index alto
- Color verde WhatsApp (#25D366)
- Animación de pulso para llamar la atención
- Mensaje pre-rellenado al abrir WhatsApp
- Animación spring al aparecer (delay 1.5s)
- Hover effect (scale + shadow)

**Por qué WhatsApp:**
- En Argentina, WhatsApp es el canal preferido para contacto comercial
- Convierte mejor que formularios (inmediatez, plataforma conocida)
- Permite conversación fluida vs email formal

**Nota:** 
⚠️ El número de WhatsApp actual es placeholder: `5491112345678`
🔧 **ACCIÓN REQUERIDA:** Actualizar con número real en `WhatsAppButton.tsx` línea 6

---

### 3. Sección "Cómo trabajamos" (Proceso)

**Ubicación:** `ProcessSection.tsx`

**Estructura:** 5 pasos con diseño vertical conectado

| # | Paso | Descripción |
|---|------|-------------|
| 01 | Consulta inicial | Primera reunión para entender el proyecto |
| 02 | Propuesta | Presupuesto, timeline y stack tecnológico |
| 03 | Desarrollo | Diseño → Desarrollo → Revisiones |
| 04 | Entrega | Deploy, capacitación y documentación |
| 05 | Soporte | Acompañamiento post-lanzamiento |

**Por qué esto aumenta conversión:**
- Reduce incertidumbre: el cliente sabe qué esperar
- Genera confianza: proceso estructurado y profesional
- Diferenciación: muchos competidores no muestran su proceso
- Expectativas claras: reduce consultas repetitivas

**Diseño:**
- Números en círculos conectados por línea vertical
- Animación secuencial (stagger) al hacer scroll
- Consistente con el aesthetic del sitio (glass effect)

---

### 4. Sección "Por qué elegirnos" (Beneficios)

**Ubicación:** `BenefitsSection.tsx`

**3 Pilares:**

#### 🚀 Entrega rápida
- **Promesa:** 2-4 semanas en producción
- **Beneficio:** Sin demoras innecesarias
- **Por qué importa:** Las PYMEs necesitan resultados rápidos

#### 💰 Precio transparente
- **Promesa:** Presupuesto fijo sin sorpresas
- **Beneficio:** El cliente sabe exactamente qué paga y qué obtiene
- **Por qué importa:** Reduce fricción de "¿cuánto cuesta?"

#### 🤝 Soporte continuo
- **Promesa:** No abandonar al cliente post-lanzamiento
- **Beneficio:** Acompañamiento y ajustes
- **Por qué importa:** Genera confianza a largo plazo, recurrencia

**Diseño:**
- Grid responsive (1 col mobile, 3 cols desktop)
- Iconos SVG custom con glow effect
- Cards con glass morphism
- Hover effect (lift + border glow)

---

## 📊 Impacto Esperado

### Antes de las mejoras
- Landing informativa (muestra servicios)
- Sin CTAs claros más allá del contacto genérico al final
- Visitante tiene que decidir qué hacer (fricción)

### Después de las mejoras
- Landing orientada a conversión
- 4 puntos de contacto:
  1. CTA en cada servicio (email)
  2. WhatsApp flotante (chat inmediato)
  3. Sección de proceso (reduce objeciones)
  4. Sección de beneficios (diferenciación)

### Métricas a trackear (con GA4)
- **Bounce rate:** Esperamos ↓ 10-15%
- **Scroll depth:** Esperamos ↑ 20% (más gente llega a proceso/beneficios)
- **Clicks en CTAs:**
  - Botones "Solicitar presupuesto": 15-20 clicks/100 visitantes
  - WhatsApp button: 10-15 clicks/100 visitantes
- **Conversión general:** Esperamos ↑ 30-50% vs landing anterior

---

## 🔄 Flujo del Usuario Actualizado

### Usuario interesado en un servicio específico (ej: E-Commerce)

**Antes:**
1. Lee sobre E-Commerce
2. Scrollea hasta el footer
3. Busca email o formulario
4. Escribe mensaje desde cero
5. **Fricción alta** ❌

**Ahora:**
1. Lee sobre E-Commerce
2. Ve botón "Solicitar presupuesto"
3. Click → abre email con asunto ya puesto
4. Agrega detalles específicos y envía
5. **Fricción baja** ✅

**O alternativa WhatsApp:**
1. Ve botón flotante verde (siempre visible)
2. Click → abre WhatsApp
3. Mensaje pre-rellenado
4. Chat inmediato
5. **Fricción mínima** ✅✅

---

## 🎨 Consistencia de Diseño

Todas las nuevas secciones mantienen:
- ✅ Paleta de colores del sitio (grises, blancos, glass effect)
- ✅ Tipografías: Sulphur Point (títulos), Roboto Condensed (body)
- ✅ Animaciones con framer-motion (fade in, slide, stagger)
- ✅ Viewport triggers con `whileInView`
- ✅ Mobile-first responsive
- ✅ Accesibilidad (aria-labels, contraste)

---

## 📝 Contenido Copywriting

### Principios aplicados

1. **Orientado a beneficios, no features**
   - ❌ "Usamos Next.js y React"
   - ✅ "Tu proyecto en producción en 2-4 semanas"

2. **Lenguaje claro y directo**
   - Sin jerga técnica innecesaria
   - Tono profesional pero cercano
   - Uso de "vos" para mercado argentino

3. **Reducción de objeciones**
   - Transparencia en precio
   - Claridad en proceso
   - Compromiso de soporte

---

## 🚀 Próximos Pasos Sugeridos

### Prioridad MEDIA (implementar próximamente)

#### FAQ (Preguntas Frecuentes)
**Por qué:** Anticipa objeciones, mejora SEO, reduce consultas repetitivas

**Preguntas sugeridas:**
- ¿Cuánto tarda un proyecto típico?
- ¿Trabajan con clientes fuera de Argentina?
- ¿El hosting está incluido?
- ¿Cuántas revisiones hacen?
- ¿Qué pasa si necesito cambios después del lanzamiento?
- ¿Hacen mantenimiento continuo?
- ¿Qué tecnologías usan?

#### Mejorar Copy en Hero
**Actual:**
- Título: "TECNOLOGÍA Y DISEÑO EN UNIÓN."
- Subtítulo: "Construimos experiencias digitales"

**Propuesta:**
- Agregar sub-CTA: "Transformamos tu idea en un producto digital que genera resultados"
- Más orientado a beneficio tangible

#### Indicador de Disponibilidad
**Ubicación:** Footer, cerca de emails

**Contenido:**
```
📅 Disponibilidad: Lun-Vie 9-18hs (GMT-3)
🚀 Nuevos proyectos: Cupos disponibles
```

**Por qué:** Genera urgencia, clarifica expectativas de respuesta

---

### Prioridad BAJA (futuro)

#### Portfolio / Casos de Éxito
**Estructura:**
- 3-4 proyectos destacados
- Screenshot + título + industria
- Stack usado
- Resultados (métricas): ej. "↑150% conversión"

**Estado:** Dejar estructura preparada para cuando tengan casos

#### Social Proof
- Logos de clientes (si los tienen)
- "15+ proyectos entregados"
- Reviews / testimonios
- Rating si aplica

#### Navbar Sticky
**Elementos:**
- Servicios
- Proceso
- Beneficios
- Nosotros
- Contacto

**Nota:** Solo si el sitio crece. Actualmente es one-page corto, no es crítico.

---

## 🔧 Configuración Pendiente

### WhatsApp
⚠️ **URGENTE:** Actualizar número de teléfono

**Archivo:** `src/components/WhatsAppButton.tsx`  
**Línea:** 6  
**Actual:** `5491112345678` (placeholder)  
**Requerido:** Número real de WhatsApp Business

**Formato:** `549` + código de área sin 0 + número

Ejemplos:
- Buenos Aires: `5491112345678`
- Córdoba: `5493511234567`

---

## 📐 Estructura de Página Actualizada

```
┌─────────────────────────────────────┐
│ Hero Section                        │ ← Título + subtítulo + scroll hint
├─────────────────────────────────────┤
│ Services Section                    │ ← 6 servicios + CTA cada uno ✨ NUEVO CTA
├─────────────────────────────────────┤
│ Benefits Section                    │ ← Por qué elegirnos (3 pilares) ✨ NUEVO
├─────────────────────────────────────┤
│ Process Section                     │ ← Cómo trabajamos (5 pasos) ✨ NUEVO
├─────────────────────────────────────┤
│ Contact Section                     │ ← Emails + Instagram + copyright
└─────────────────────────────────────┘

Elementos flotantes:
- WhatsApp button (bottom-left) ✨ NUEVO
- Logo Nodo (bottom-right)
- Scroll progress bar (top)
- Partículas de fondo
```

---

## 🎯 KPIs a Monitorear

### Conversión
- **Lead capture rate:** (clicks en CTAs / visitantes únicos) × 100
  - Meta: >3% en primer mes
  - Meta: >5% en 3 meses
- **Canal preferido:**
  - Email vs WhatsApp (cuál convierte más)
  - Ajustar estrategia según data

### Engagement
- **Scroll depth:** % de usuarios que llegan a cada sección
  - Services: >90%
  - Benefits: >70%
  - Process: >60%
  - Contact: >50%
- **Time on page:** Esperamos >2min (vs ~1min anterior)

### Comportamiento
- **Bounce rate:** Meta <55%
- **Páginas por sesión:** Esperamos >1.2 (si agregan blog/portfolio)

### Fuentes de tráfico
- Orgánico (SEO)
- Directo (tarjetas, recomendaciones)
- Redes sociales (Instagram)
- Referral (si tienen backlinks)

---

## 📚 Archivos Modificados

### Componentes nuevos
- `src/components/WhatsAppButton.tsx` — Botón flotante de WhatsApp
- `src/components/ProcessSection.tsx` — Sección "Cómo trabajamos"
- `src/components/BenefitsSection.tsx` — Sección "Por qué elegirnos"

### Componentes modificados
- `src/components/ServiceCard.tsx` — Agregado CTA por servicio
- `src/app/page.tsx` — Integrados nuevos componentes

### Documentación
- `documentacion/mejoras-conversion.md` — Este archivo
