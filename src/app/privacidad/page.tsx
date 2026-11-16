import Link from "next/link";

export default function PoliticaPrivacidad() {
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
        <div className="flex items-center gap-6 mb-6">
          <div className="flex-1 h-px bg-(--belmar-border)" />
          <h1 className="font-serif text-3xl whitespace-nowrap">
            Política de Privacidad
          </h1>
          <div className="flex-1 h-px bg-(--belmar-border)" />
        </div>

        <p className="text-xs opacity-70 mb-10">
          Última actualización: <span className="font-medium">Enero 2026</span>
        </p>

        <div className="space-y-8 text-sm leading-7 text-gray-700">
          <p>
            En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD),
            así como de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales
            y garantía de los derechos digitales (LOPDGDD), te informamos sobre cómo recopilamos,
            tratamos y protegemos tus datos personales cuando accedes a este sitio web.
          </p>

          <div>
            <h2 className="font-semibold text-base mb-2">1. ¿Qué datos personales recopilamos?</h2>
            <p className="mb-3">
              Recopilamos los siguientes datos, según la interacción que tengas con el sitio web:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Formularios de contacto: nombre, correo electrónico, teléfono (opcional) y mensaje.
              </li>
              <li>
                Formulario de suscripción al boletín: nombre y correo electrónico.
              </li>
              <li>
                Cookies: dirección IP, tipo de navegador, páginas visitadas, duración de la navegación y otros datos técnicos
                (ver <Link href="/cookies" className="underline text-belmar-olive">Política de Cookies</Link>).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">2. ¿Con qué finalidad tratamos tus datos?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Atender consultas y solicitudes realizadas a través del formulario de contacto.</li>
              <li>
                Gestionar el envío de comunicaciones informativas y comerciales (boletines),
                siempre que hayas dado tu consentimiento.
              </li>
              <li>
                Mejorar la experiencia de navegación y analizar el uso del sitio web mediante cookies técnicas y analíticas.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">3. ¿Cuál es la base legal para el tratamiento?</h2>
            <p className="mb-3">Tratamos tus datos personales sobre las siguientes bases jurídicas:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Consentimiento expreso del usuario (art. 6.1.a RGPD) al suscribirse al boletín,
                enviar formularios o aceptar cookies no técnicas.
              </li>
              <li>
                Interés legítimo del responsable (art. 6.1.f RGPD) para responder consultas y mejorar la funcionalidad del sitio.
              </li>
              <li>
                Cumplimiento de obligaciones legales (art. 6.1.c RGPD), cuando sea aplicable.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">4. ¿A quién comunicamos tus datos?</h2>
            <p className="mb-3">
              No cedemos tus datos personales a terceros, salvo en los siguientes casos:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Obligación legal.</li>
              <li>
                Prestadores de servicios necesarios para el funcionamiento del sitio, como:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Proveedores de alojamiento web.</li>
                  <li>Plataformas de email marketing (como Mailchimp).</li>
                  <li>Herramientas de analítica web (como Google Analytics).</li>
                  <li>Redes sociales, en caso de que interactúes con ellas desde el sitio.</li>
                </ul>
              </li>
            </ul>
            <p className="mt-3">
              Todos ellos actúan como encargados del tratamiento y ofrecen garantías adecuadas conforme al RGPD.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">5. ¿Cuáles son tus derechos?</h2>
            <p className="mb-3">Puedes ejercer los siguientes derechos, de forma gratuita:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Acceder a tus datos personales.</li>
              <li>Rectificar datos inexactos.</li>
              <li>Solicitar su supresión cuando ya no sean necesarios o revoques tu consentimiento.</li>
              <li>Oponerte al tratamiento de tus datos.</li>
              <li>Solicitar la limitación del tratamiento.</li>
              <li>Solicitar la portabilidad de tus datos.</li>
            </ul>
            <p className="mt-3">
              Para ejercerlos, envía tu solicitud al correo indicado en la sección 8, adjuntando copia de un documento que
              acredite tu identidad.
            </p>
            <p className="mt-3">
              Si consideras que no hemos tratado tus datos conforme a la normativa, puedes presentar una reclamación ante
              la Agencia Española de Protección de Datos:
              {" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-belmar-olive"
              >
                www.aepd.es
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">6. Uso de cookies</h2>
            <p className="mb-3">
              Este sitio utiliza cookies propias y de terceros para mejorar la navegación, obtener estadísticas sobre el uso del sitio
              y, en su caso, mostrar publicidad personalizada (si has dado tu consentimiento).
            </p>
            <p>
              Puedes configurar o rechazar las cookies desde nuestro banner o a través de la configuración de tu navegador.
              Más información en nuestra{" "}
              <Link href="/cookies" className="underline text-belmar-olive">
                Política de Cookies
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">7. ¿Qué medidas de seguridad aplicamos?</h2>
            <p className="mb-3">
              Implementamos medidas técnicas y organizativas apropiadas para garantizar la seguridad de tus datos, tales como:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cifrado SSL (HTTPS).</li>
              <li>Control de accesos y gestión de contraseñas seguras.</li>
              <li>Copias de seguridad periódicas.</li>
              <li>Acceso limitado a personal autorizado.</li>
              <li>Aplicación del Esquema Nacional de Seguridad (Real Decreto 311/2022), cuando corresponde.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">8. Responsable del tratamiento</h2>
            <p className="mt-2">
              Nombre comercial: <strong>Frutas Belmar España, S.L.</strong>
              <br />
              NIF: <strong>B70845276</strong>
              <br />
              Domicilio social: <strong>Calle Riera Blanca 71, 08028, Barcelona, España</strong>
              <br />
              Correo electrónico de contacto:{" "}
              <a
                href="mailto:privacidad@jojobabelmar.com"
                className="underline text-belmar-olive"
              >
                privacidad@jojobabelmar.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">9. ¿Durante cuánto tiempo conservamos tus datos?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Formularios de contacto: hasta que se resuelva tu consulta.</li>
              <li>Suscripción a boletines: hasta que solicites la baja o retires tu consentimiento.</li>
              <li>Cookies: según lo indicado en nuestra Política de Cookies.</li>
              <li>Obligaciones legales: durante los plazos exigidos por la normativa fiscal, contable o contractual.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">10. Transferencias internacionales</h2>
            <p className="mb-3">No se prevén transferencias internacionales de datos.</p>
            <p>
              En caso de que alguno de nuestros proveedores esté ubicado fuera del Espacio Económico Europeo (EEE),
              garantizamos que está sujeto a cláusulas contractuales tipo aprobadas por la Comisión Europea o se encuentra
              en un país con un nivel de protección adecuado según la Comisión.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
