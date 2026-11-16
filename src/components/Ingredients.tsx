"use client";

import Image from "next/image";

export default function Ingredients() {
  return (
    <section id="ingredientes" className="py-16">
      <div className="container">

        {/* Título */}
        <div className="mb-12">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-(--belmar-border)" />

            <h2 className="font-serif text-3xl mb-4">
              Ingredientes y Calidad
            </h2>

            <div className="flex-1 h-px bg-(--belmar-border)" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Imagen */}
          <div className="relative w-full h-80 rounded-xl overflow-hidden">
            <Image
              src="images/ingredientes2.jpg"
              alt="Aceite de jojoba Belmar - Ingredientes naturales"
              fill
              className="object-cover"
            />
          </div>

          {/* Contenido */}
          <div className="text-sm text-gray-700 leading-relaxed space-y-5">

            <p className="font-medium">
              100% Aceite de Jojoba puro{" "}
              <span className="italic">(Simmondsia chinensis)</span>
            </p>

            <p>
              Nuestro aceite de jojoba se obtiene mediante{" "}
              <strong>prensado en frío</strong>, preservando intactas todas sus
              propiedades naturales. Es un aceite de{" "}
              <strong>grado cosmético premium</strong>, libre de aditivos,
              perfumes y conservantes.
            </p>

            <p>
              Cultivado de forma responsable, ofrece un cuidado eficaz, seguro
              y respetuoso con la piel y el entorno.
            </p>

            {/* Propiedades */}
            <ul className="space-y-3">

              <li className="relative group flex items-center gap-3">
                <IconLeaf />
                <span>Hipoalergénico</span>
                <Tooltip text="Formulado para minimizar el riesgo de reacciones." />
              </li>

              <li className="relative group flex items-center gap-3">
                <IconDrop />
                <span>No comedogénico</span>
                <Tooltip text="No obstruye los poros de la piel." />
              </li>

              <li className="relative group flex items-center gap-3">
                <IconRabbit />
                <span>Cruelty-Free</span>
                <Tooltip text="No testado en animales." />
              </li>

              <li className="relative group flex items-center gap-3">
                <IconMap />
                <span>Origen: Perú</span>
                <Tooltip text="Cultivado de forma responsable en Perú." />
              </li>
            </ul>

            {/* CTA */}
            <a
              href="https://wa.me/34615350156?text=Hola%20quiero%20comprar%20el%20Aceite%20de%20Jojoba%20Belmar"
              className="btn-primary inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar aceite de jojoba →
            </a>
          </div>
        </div>
      </div>

    
    </section>
  );
}

/* ───────────────── SVG ICONS ───────────────── */

function IconLeaf() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 12c6-6 12-6 18-6-1 6-5 12-12 12S3 18 3 12z" />
    </svg>
  );
}

function IconDrop() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 2s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z" />
    </svg>
  );
}

function IconRabbit() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 16a5 5 0 0 1 10 0" />
      <path d="M7 6v6M17 6v6" />
    </svg>
  );
}

function IconMap() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  );
}

function Tooltip({ text }: { text: string }) {
  return <span className="tooltip">{text}</span>;
}
