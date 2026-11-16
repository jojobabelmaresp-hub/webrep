"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Es apto para piel grasa?",
    a: "Sí, ayuda a regular el sebo sin obstruir los poros.",
  },
  {
    q: "¿Tiene perfume?",
    a: "No, es 100% puro y sin fragancia añadida.",
  },
  {
    q: "¿Puedo usarlo en cabello teñido?",
    a: "Sí, es seguro para cabello teñido y ayuda a nutrir las puntas.",
  },
  {
    q: "¿Es comedogénico?",
    a: "No, el aceite de jojoba es no comedogénico y apto para piel sensible.",
  },
  {
    q: "¿Se puede usar en el rostro diariamente?",
    a: "Sí, puede usarse a diario en rostro limpio, mañana o noche.",
  },
  {
    q: "¿Es apto para todo tipo de piel?",
    a: "Sí, es adecuado para piel seca, mixta, grasa y sensible.",
  },
  {
    q: "¿Cómo debo conservar el producto?",
    a: "Guárdalo en un lugar fresco, seco y alejado de la luz directa.",
  },
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">

          {/* TÍTULO CENTRADO CON LÍNEAS */}
          <div className="flex items-center gap-6 mb-10">
            <div className="flex-1 h-px bg-(--belmar-border)" />
            <h2 className="text-3xl font-serif whitespace-nowrap text-center">
              Preguntas Frecuentes
            </h2>
            <div className="flex-1 h-px bg-(--belmar-border)" />
          </div>

          {/* FAQ */}
          <div className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={item.q}
                  className="rounded-md border border-(--belmar-border) bg-white/40"
                >
                  <button
                    className="w-full flex items-center justify-between px-4 py-2.5 text-left text-sm font-medium"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : i)
                    }
                  >
                    {item.q}
                    <span className="text-xs opacity-50">
                      {isOpen ? "▲" : "▼"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pt-1 pb-2.5 text-sm text-gray-600">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="font-serif text-lg mb-4">
              ¡Obtén el tuyo hoy!
            </p>

            <a
  href="https://wa.me/34615350156?text=Hola%20quiero%20comprar%20el%20Aceite%20de%20Jojoba%20Belmar"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary"
>
  Comprar
</a>
          </div>

        </div>
      </div>
    </section>
  );
}
