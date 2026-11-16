import Link from "next/link";

export default function PoliticaEnvios() {
  return (
    <section className="py-16">
      <div className="container max-w-3xl text-(--belmar-text)">

        {/* Volver */}
        <div className="mb-6 text-sm">
          <Link href="/" className="opacity-70 hover:underline">
            ← Volver al inicio
          </Link>
        </div>

        {/* Título con líneas */}
        <div className="flex items-center gap-6 mb-10">
          <div className="flex-1 h-px bg-(--belmar-border)" />
          <h1 className="font-serif text-3xl whitespace-nowrap">
            Política de Envíos
          </h1>
          <div className="flex-1 h-px bg-(--belmar-border)" />
        </div>

        <div className="space-y-8 text-sm leading-7 text-gray-700">

          <p>
            En <strong>Belmar</strong>, trabajamos para que tu pedido llegue en
            las mejores condiciones y en el menor tiempo posible.
          </p>

          <div>
            <h2 className="font-semibold mb-2">Tiempo de procesamiento</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Procesamos pedidos en 1 a 2 días hábiles.</li>
              <li>Pedidos en fines de semana o feriados se procesan el siguiente día hábil.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Métodos y tiempos de envío</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Envío estándar: 3 a 5 días hábiles.</li>
              <li>Envío express: 1 a 2 días hábiles (zonas seleccionadas).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Zonas de envío</h2>
            <p>Realizamos envíos a todo el territorio nacional.</p>
            <p>
              Envíos internacionales:{" "}
              <a
                href="mailto:info@jojobabelmar.com"
                className="underline text-belmar-olive">
                info@jojobabelmar.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Costos de envío</h2>
            <p>
              El costo se calcula al finalizar la compra según el destino y el método elegido.
            </p>
            <p>
              Envío gratis en pedidos superiores a <strong>$50.000</strong>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Seguimiento del pedido</h2>
            <p>
              Recibirás un correo con el número de seguimiento y un enlace para
              rastrear tu pedido.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Problemas con la entrega</h2>
            <p>
              Escríbenos a{" "}
              <a
                href="mailto:soporte@jojobabelmar.com"
                className="underline text-belmar-olive"
              >
                soporte@jojobabelmar.com
              </a>
              {" "}o contáctanos por{" "}
              <a
                href="https://wa.me/34615350156"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-belmar-olive"
              >
                WhatsApp
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Sostenibilidad</h2>
            <p>
              Utilizamos empaques reciclables y procesos responsables con el medio ambiente.
            </p>
          </div>

          <p className="text-xs opacity-60">
            Belmar no se responsabiliza por demoras causadas por factores externos.
            Verifica tu dirección antes de finalizar la compra.
          </p>

        </div>
      </div>
    </section>
  );
}
