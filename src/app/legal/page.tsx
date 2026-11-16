export const metadata = {
  title: "Aviso Legal | Belmar",
  description:
    "Información legal del sitio web Belmar conforme a la LSSI-CE y normativa aplicable.",
};

export default function AvisoLegal() {
  return (
    <section className="py-20">
      <div className="container max-w-3xl text-(--belmar-text)">

        {/* Título */}
        <h1 className="font-serif text-3xl mb-2">Aviso Legal</h1>
        <p className="text-sm opacity-70 mb-10">
          Última actualización: Enero 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed">

          {/* 1 */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              1. Titular del sitio web
            </h2>
            <p>
              <strong>Nombre comercial:</strong> Frutas Belmar España, S.L.<br />
              <strong>Razón social:</strong> Frutas Belmar España, S.L.<br />
              <strong>NIF:</strong> B70845276<br />
              <strong>Domicilio social:</strong> Calle Riera Blanca 71, 08028, Barcelona, España<br />
              <strong>Correo electrónico:</strong>{" "}
              <a
                href="mailto:info@jojobabelmar.com"
                className="underline hover:text-belmar-olive"
              >
                info@jojobabelmar.com
              </a>
              <br />
              <strong>Teléfono:</strong> (+34) 615350156
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              2. Objeto del sitio web
            </h2>
            <p>
              El sitio web <strong>
                <a
                href="https://www.jojobabelmar.com"
                target="_top"
                rel="noopener noreferrer"
                className="underline text-belmar-olive"
              >
                www.jojobabelmar.com
                </a>
            
                </strong> tiene como
              finalidad ofrecer información, promoción y venta online de
              productos naturales, especialmente aceite de jojoba, así como
              permitir el contacto con los usuarios, la gestión de suscripciones
              y la divulgación de contenido informativo relacionado con sus
              propiedades y usos.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              3. Condiciones de uso
            </h2>
            <p>
              El acceso y uso del sitio web atribuye la condición de usuario e
              implica la aceptación plena y sin reservas del presente Aviso
              Legal.
            </p>
            <p className="mt-2">
              El usuario se compromete a hacer un uso adecuado del sitio y de sus
              contenidos, conforme a la ley, la moral, el orden público y el
              presente Aviso Legal. Queda prohibido el uso del sitio con fines
              ilícitos o lesivos de derechos de terceros.
            </p>
            <p className="mt-2">
              El titular se reserva el derecho de modificar, actualizar o
              eliminar los contenidos o condiciones del sitio sin previo aviso.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              4. Propiedad intelectual e industrial
            </h2>
            <p>
              Todos los contenidos del sitio web (textos, imágenes, logotipos,
              diseños, software, código fuente, marcas, etc.) son propiedad de
             Frutas Belmar España, S.L. o de terceros con licencia,
              y están protegidos por la legislación vigente.
            </p>
            <p className="mt-2">
              Queda prohibida la reproducción, distribución, comunicación
              pública, transformación o cualquier otro uso no autorizado de los
              contenidos sin el consentimiento expreso y por escrito del titular.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              5. Enlaces a terceros
            </h2>
            <p>
              Este sitio puede contener enlaces a páginas externas gestionadas
              por terceros. Frutas Belmar España, S.L. no se hace
              responsable del contenido ni de las políticas de privacidad de
              dichos sitios. El acceso se realiza bajo la responsabilidad
              exclusiva del usuario.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              6. Responsabilidad
            </h2>
            <p>
              El titular no se hace responsable del uso indebido del sitio web,
              fallos técnicos, interrupciones del servicio ni de la posible
              presencia de virus u otros elementos dañinos.
            </p>
            <p className="mt-2">
              No obstante, se han adoptado todas las medidas técnicas necesarias
              para garantizar el correcto funcionamiento y la seguridad del
              sitio.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              7. Protección de datos personales
            </h2>
            <p>
              El tratamiento de datos personales se realiza conforme al
              Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
            </p>
            <p className="mt-2">
              Para más información, consulta nuestra{" "}
              <a href="/privacidad.html" className="underline hover:text-belmar-olive">
                Política de Privacidad
              </a>{" "}
              y nuestra{" "}
              <a href="/cookies.html" className="underline hover:text-belmar-olive">
                Política de Cookies
              </a>.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              8. Legislación aplicable y jurisdicción
            </h2>
            <p>
              El presente Aviso Legal se rige por la legislación española.
            </p>
            <p className="mt-2">
              En caso de conflicto, las partes se someten a los Juzgados y
              Tribunales de la ciudad de Barcelona, salvo que la normativa de
              consumo disponga lo contrario.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
