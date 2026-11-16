import { ShieldIcon } from "@/components/icons/ShieldIcon";
import { TruckIcon } from "@/components/icons/TruckIcon";
import { CheckIcon } from "@/components/icons/CheckIcon";

const items = [
  {
    label: "Pago Seguro",
    Icon: ShieldIcon,
    color: "text-[#6b7f3f]",
  },
  {
    label: "Envíos Rápidos",
    Icon: TruckIcon,
    color: "text-[#8bbf5a]",
  },
  {
    label: "Fácil Devolución",
    Icon: CheckIcon,
    color: "text-[#6b7f3f]",
  },
];

export default function Trust() {
  return (
    <section id="confianza" className="py-20">
      <div className="container">

        {/* Título con líneas */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-px bg-(--belmar-border)" />
          <h2 className="text-3xl font-serif">
            Confianza y Seguridad
          </h2>
          <div className="flex-1 h-px bg-(--belmar-border)" />
        </div>

        {/* Íconos */}
        <div className="grid grid-cols-3 gap-10 text-center">
          {items.map(({ label, Icon, color }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3"
            >
              <Icon className={`w-10 h-10 ${color}`} />
              <span className="text-sm font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
