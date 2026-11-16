import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#eae4d9] border-t border-(--belmar-border)">
      <div className="container py-12 grid grid-cols-1 gap-10 md:grid-cols-4 text-sm text-(--belmar-text)">

        {/* Marca */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold tracking-wide">Belmar</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Aceite de jojoba 100% puro para el cuidado natural de tu piel y cabello.
          </p>

          {/* Redes sociales */}
          <div className="flex gap-4 mt-2">
            {/* Instagram */}
            <a
              href="https://instagram.com/"
              target="_blank"
              aria-label="Instagram"
              className="text-(--belmar-text) hover:text-belmar-olive transition"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/"
              target="_blank"
              aria-label="Facebook"
              className="text-(--belmar-text) hover:text-belmar-olive transition"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/34615350156"
              target="_blank"
              aria-label="WhatsApp"
              className="text-(--belmar-text) hover:text-belmar-olive transition"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.5 11.5a8.5 8.5 0 1 1-15.3 5.3L3 21l4.4-1.2a8.5 8.5 0 0 1 13.1-8.3z" />
                <path d="M8.5 9.5c.5 2 2.5 4 4.5 4.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold uppercase text-xs tracking-wider opacity-70">
            Navegación
          </h4>
          <a href="/#beneficios" className="hover:underline">Beneficios</a>
          <a href="/#como-usarlo" className="hover:underline">Cómo usarlo</a>
          <a href="/#ingredientes" className="hover:underline">Ingredientes</a>
          <a href="/#faq" className="hover:underline">Preguntas frecuentes</a>
        </div>




        {/* Soporte */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold uppercase text-xs tracking-wider opacity-70">
            Soporte
          </h4>
         
   



<a href="/envios.html">Política de Envíos</a>
<a href="/devoluciones.html">Cambios y Devoluciones</a>
<a href="/legal.html">Aviso Legal</a>
<a href="/privacidad.html">Privacidad</a>

          
        </div>

        {/* Confianza + CTA */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold uppercase text-xs tracking-wider opacity-70">
            Compra segura
          </h4>

          <div className="flex flex-col gap-2 opacity-80">
            <span>Pago 100% seguro</span>
            <span>Envíos rápidos</span>
            <span>Fácil devolución</span>
          </div>

          <a href="#comprar" className="btn-primary">
            Comprar ahora
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-(--belmar-border)">
        <div className="container py-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs opacity-70">
          <span>© {new Date().getFullYear()} Belmar — Todos los derechos reservados</span>
          <span>Hecho con 🌿 para el cuidado natural</span>
        </div>
      </div>
    </footer>
  );
}
