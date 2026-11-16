import Link from "next/link";

export default function PoliticaCookies() {
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
            Política de Cookies
          </h1>
          <div className="flex-1 h-px bg-(--belmar-border)" />
        </div>

        <p className="text-xs opacity-70 mb-10">
          Última actualización: <span className="font-medium">Enero 2026</span>
        </p>

        <div className="space-y-8 text-sm leading-7 text-gray-700">

          <p>
            Este sitio web utiliza cookies propias y de terceros para mejorar tu
            experiencia de navegación, analizar el tráfico del sitio y personalizar
            contenidos. A continuación te explicamos qué son las cookies, qué tipos
            utilizamos y cómo puedes gestionarlas.
          </p>

          <div>
            <h2 className="font-semibold text-base mb-2">
              1. ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu
              dispositivo (ordenador, móvil o tablet) al visitar un sitio web. Su
              función es recordar información sobre tu visita, como tus preferencias
              de idioma, sesión iniciada o datos estadísticos para mejorar el
              rendimiento del sitio.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              2. Tipos de cookies utilizadas
            </h2>

            <div className="space-y-4">
              <div>
                <p className="font-medium mb-1">
                  a) Según la entidad que las gestiona:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cookies propias: enviadas desde nuestro propio dominio.</li>
                  <li>
                    Cookies de terceros: gestionadas por servicios externos (Google,
                    Facebook, YouTube, entre otros).
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium mb-1">
                  b) Según su duración:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cookies de sesión: se eliminan al cerrar el navegador.</li>
                  <li>
                    Cookies persistentes: permanecen en tu dispositivo durante un
                    periodo determinado.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium mb-1">
                  c) Según su finalidad:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Cookies técnicas (necesarias): permiten el funcionamiento del
                    sitio web y no requieren consentimiento.
                  </li>
                  <li>
                    Cookies de personalización: almacenan preferencias como idioma o
                    región.
                  </li>
                  <li>
                    Cookies analíticas: recopilan información anónima sobre el
                    comportamiento de los usuarios.
                  </li>
                  <li>
                    Cookies publicitarias: muestran anuncios personalizados según tus
                    intereses.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              3. Cookies que utilizamos
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-(--belmar-border)">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border px-3 py-2 text-left">Nombre</th>
                    <th className="border px-3 py-2 text-left">Tipo</th>
                    <th className="border px-3 py-2 text-left">Finalidad</th>
                    <th className="border px-3 py-2 text-left">Duración</th>
                    <th className="border px-3 py-2 text-left">Propietario</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">cookieConsent</td>
                    <td className="border px-3 py-2">Técnica</td>
                    <td className="border px-3 py-2">Almacena el consentimiento</td>
                    <td className="border px-3 py-2">1 año</td>
                    <td className="border px-3 py-2">Propia</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">_ga</td>
                    <td className="border px-3 py-2">Analítica</td>
                    <td className="border px-3 py-2">Estadísticas de uso</td>
                    <td className="border px-3 py-2">2 años</td>
                    <td className="border px-3 py-2">Google Analytics</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">_gid</td>
                    <td className="border px-3 py-2">Analítica</td>
                    <td className="border px-3 py-2">Estadísticas de uso</td>
                    <td className="border px-3 py-2">24 horas</td>
                    <td className="border px-3 py-2">Google Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs opacity-70">
              Esta tabla es orientativa y puede actualizarse según las cookies reales utilizadas.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              4. Cookies de terceros
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Google Analytics – <a href="https://policies.google.com/technologies/cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-belmar-olive"
              >  análisis estadístico del uso del sitio.
              </a>
              </li>
              <li>
                
                
                
                Facebook Pixel – <a href="https://www.facebook.com/policies/cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-belmar-olive"
              > segmentación publicitaria.
              </a>
              </li>
              <li>Instagram –
                <a href="https://help.instagram.com/1896641480634370"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-belmar-olive"
              >
               
                 interacción con contenidos.</a></li>


              <li>YouTube – 
                
                <a href="https://policies.google.com/technologies/cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-belmar-olive"
              >
                reproducción de vídeos incrustados.
                </a>
                </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              5. Gestión y configuración de cookies
            </h2>
            <p className="mb-2">
              Al acceder por primera vez a este sitio web, se muestra un banner de
              cookies que te permite aceptar, rechazar o configurar tus preferencias.
            </p>
            <p>
              Además, puedes gestionar las cookies desde la configuración de tu
              navegador (Chrome, Firefox, Safari, Edge).
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              6. Transferencias internacionales de datos
            </h2>
            <p>
              Algunas cookies de terceros pueden implicar transferencias
              internacionales de datos fuera del Espacio Económico Europeo (EEE).
              En dichos casos, se aplican garantías adecuadas conforme al RGPD.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              7. Cambios en esta política
            </h2>
            <p>
              Nos reservamos el derecho de actualizar esta Política de Cookies para
              reflejar cambios normativos o técnicos. Te recomendamos revisarla
              periódicamente.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              8. Contacto
            </h2>
            <p>
              Si tienes dudas sobre el uso de cookies, puedes escribirnos a{" "}
              <a
                href="mailto:cookies@jojobabelmar.com"
                className="underline text-belmar-olive"
              >
                cookies@jojobabelmar.com
              </a>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
