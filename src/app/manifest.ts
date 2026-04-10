import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Studio Nodo — Desarrollo Web y Branding",
    short_name: "Studio Nodo",
    description: "Estudio de diseño y desarrollo web en Argentina. Landing pages, e-commerce, branding y sitios corporativos.",
    start_url: "/",
    display: "standalone",
    background_color: "#07080c",
    theme_color: "#07080c",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
