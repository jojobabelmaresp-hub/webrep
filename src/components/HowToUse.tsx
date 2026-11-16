import Image from "next/image";

const uses = [
  {
    title: "Rostro",
    subtitle: "Aplicar en rostro limpio.",
    hoverText:
      "Aplica de 2 a 3 gotas sobre la piel limpia y masajea suavemente hasta su completa absorción.",
    image: "/images/use-face.jpg",
  },
  {
    title: "Cabello",
    subtitle: "En puntas y cuero cabelludo.",
    hoverText:
      "Usa unas gotas en las puntas para nutrir o masajea el cuero cabelludo antes del lavado.",
    image: "/images/use-hair.jpg",
  },
  {
    title: "Cuerpo",
    subtitle: "Masaje en zonas secas.",
    hoverText:
      "Aplica después de la ducha para hidratar profundamente zonas secas como codos y rodillas.",
    image: "/images/use-body.jpg",
  },
];

export default function HowToUse() {
  return (
    <section id="como-usarlo" className="py-16">
      <div className="container">

        {/* Título con líneas */}
        <div className="mb-12">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-(--belmar-border)" />
            <h2 className="font-serif text-3xl whitespace-nowrap">
              Cómo usarlo
            </h2>
            <div className="flex-1 h-px bg-(--belmar-border)" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {uses.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-xl overflow-hidden bg-white shadow-sm"
            >
              {/* Imagen */}
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay hover */}
              <div className="
                absolute inset-0
                bg-black/55
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
                flex items-center justify-center
                px-6
              ">
                <p className="
                  text-white text-sm text-center
                  opacity-0
                  translate-y-4
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all duration-300
                ">
                  {item.hoverText}
                </p>
              </div>

              {/* Texto base */}
              <div className="
                relative z-10
                p-5 text-center
                bg-white
                transition-opacity duration-300
                group-hover:opacity-0
              ">
                <h3 className="font-serif text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
