import { DropIcon } from "@/components/icons/DropIcon";
import { LeafIcon } from "@/components/icons/LeafIcon";
import { BubbleIcon } from "@/components/icons/BubbleIcon";
import { SproutIcon } from "@/components/icons/SproutIcon";

const benefits = [
  {
    label: "Hidratación profunda",
    description: "Ayuda a retener la humedad natural de la piel.",
    Icon: DropIcon,
  },
  {
    label: "Equilibra el sebo",
    description: "Regula la producción de grasa sin resecar.",
    Icon: LeafIcon,
  },
  {
    label: "No comedogénico",
    description: "No obstruye los poros.",
    Icon: BubbleIcon,
  },
  {
    label: "Vegano y puro",
    description: "Sin aditivos ni ingredientes de origen animal.",
    Icon: SproutIcon,
  },
];




export default function Benefits() {
  return (
    <section id="beneficios" className="py-20">
      <div className="container">

        {/* Título con líneas */}

          {/* Título con líneas */}
        <div className="mb-12">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-(--belmar-border)" />
            <h2 className="font-serif text-3xl whitespace-nowrap">
              Beneficios
            </h2>
            <div className="flex-1 h-px bg-(--belmar-border)" />
          </div>
        </div>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
  {benefits.map(({ label, description, Icon }) => (
    <div
      key={label}
      className="group relative flex flex-col items-center gap-3"
    >
      {/* Icono */}
      <Icon className="w-9 h-9 text-[#6b7f3f] transition-transform group-hover:scale-110" />

      {/* Label */}
      <span className="text-sm font-medium">
        {label}
      </span>

      {/* Tooltip */}
      <div
        className="
          pointer-events-none
          absolute -bottom-12
          w-48
          opacity-0
          group-hover:opacity-100
          transition
          text-xs
          text-white
          bg-[#6b7f3f]
          px-3 py-2
          rounded-md
          shadow-lg
        "
      >
        {description}
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
}
