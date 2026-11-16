export default function CambiosYDevoluciones() {
  return (
    <section className="py-16">
      <div className="container max-w-3xl text-(--belmar-text)">

        {/* Título con líneas laterales */}
        <div className="mb-10">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-(--belmar-border)" />
            <h1 className="font-serif text-3xl whitespace-nowrap">
              Cambios y Devoluciones
            </h1>
            <div className="flex-1 h-px bg-(--belmar-border)" />
          </div>
        </div>

        {/* Introducción */}
        <p className="text-sm leading-7 mb-6">
          En <strong>Belmar</strong>, queremos que tengas una experiencia
          satisfactoria con nuestros productos. Si por alguna razón necesitas
          realizar un cambio o solicitar una devolución, a continuación te
          explicamos cómo hacerlo de forma clara y sencilla.
        </p>

        {/* Secciones */}
        <div className="space-y-8 text-sm leading-7">

          <div>
            <h2 className="font-semibold text-base mb-2">
              Tiempo para solicitar un cambio o devolución
            </h2>
            <p>
              Tienes hasta <strong>7 días hábiles</strong> desde la fecha de
              recepción del producto para iniciar un proceso de cambio o
              devolución.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Condiciones para aceptar devoluciones
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                El producto debe estar sin uso, en su empaque original y en
                perfectas condiciones.
              </li>
              <li>
                No se aceptan devoluciones de productos abiertos, usados o
                dañados por mal uso.
              </li>
              <li>
                Es necesario presentar el comprobante de compra (correo de
                confirmación o factura).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Cambios por otro producto
            </h2>
            <p>
              Si deseas cambiar el producto por otra presentación o variante,
              puedes hacerlo dentro del plazo establecido, siempre que el
              producto original cumpla con las condiciones de devolución.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Reembolsos
            </h2>
            <p>
              Una vez recibido el producto y verificado su estado, te
              notificaremos si el reembolso fue aprobado. De ser así, el
              reembolso se realizará a tu método de pago original dentro de los
              próximos <strong>5 días hábiles</strong>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Costos de envío
            </h2>
            <p>
              Si la devolución es por un error nuestro (producto defectuoso o
              envío incorrecto), cubrimos todos los gastos de envío.
            </p>
            <p className="mt-2">
              Si la devolución es por decisión personal (cambio de opinión,
              producto no esperado, etc.), los costos de envío corren por cuenta
              del cliente.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              ¿Cómo solicitar un cambio o devolución?
            </h2>
            <p>
              Escríbenos a{" "}
              <a
                href="mailto:soporte@jojobabelmar.com"
                className="text-belmar-olive underline"
              >
                soporte@jojobabelmarbelmar.com
              </a>{" "}
              indicando tu número de pedido, nombre completo y motivo del cambio
              o devolución. Nuestro equipo responderá dentro de 24 a 48 horas
              hábiles.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Nuestro compromiso
            </h2>
            <p>
              En Belmar creemos en la transparencia y en cuidar tu bienestar. Si
              algo no salió como esperabas, estamos aquí para solucionarlo
              contigo de forma simple y respetuosa.
            </p>
          </div>
        </div>

        {/* Footer legal */}
        <p className="text-xs mt-10 opacity-60">
          Última actualización: Enero 2026
        </p>
      </div>
    </section>
  );
}
