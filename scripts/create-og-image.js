// Script para crear og-image.jpg
// Usamos canvas para crear una imagen 1200x630 con el logo y texto

const fs = require('fs');
const path = require('path');

// Por ahora creamos un placeholder
// Para producción real, usar Sharp o Pillow para generar imagen profesional

const svgContent = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#07080c;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0a0b0f;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Fondo -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Texto principal -->
  <text x="600" y="280"
        font-family="Arial, sans-serif"
        font-size="72"
        font-weight="bold"
        fill="#ffffff"
        text-anchor="middle">
    Studio Nodo
  </text>

  <!-- Subtítulo -->
  <text x="600" y="360"
        font-family="Arial, sans-serif"
        font-size="36"
        fill="#c8c5c5"
        text-anchor="middle">
    Tecnología y Diseño en Unión
  </text>

  <!-- URL -->
  <text x="600" y="520"
        font-family="Arial, sans-serif"
        font-size="28"
        fill="#808080"
        text-anchor="middle">
    studio-nodo.com
  </text>
</svg>
`;

console.log('⚠️  NOTA: Este es un placeholder SVG.');
console.log('📸 Para producción, crear og-image.jpg profesional en Figma/Photoshop:');
console.log('   - Dimensiones: 1200x630px');
console.log('   - Incluir logo Studio Nodo');
console.log('   - Texto: "Desarrollo Web, E-Commerce y Branding"');
console.log('   - Fondo oscuro (#07080c)');
console.log('   - Guardar como og-image.jpg en /public');

fs.writeFileSync(
  path.join(__dirname, '../public/og-image.svg'),
  svgContent
);

console.log('\n✅ Placeholder SVG creado en /public/og-image.svg');
console.log('🔄 Renombrar manualmente a og-image.jpg después de crear la versión final');
