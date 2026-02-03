import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Aviso de Privacidad | Urofemina - Dra. Erika Torres Valdez',
  description: 'Aviso de privacidad integral para pacientes de Dra. Erika Torres Valdez, en cumplimiento con la Ley Federal de Protección de Datos Personales.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <section className="bg-white border-b border-perla">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-oro" />
                <span className="text-xs font-medium tracking-wider text-taupe uppercase">
                  Documento Legal
                </span>
              </div>
              <h1 className="text-borgonia mb-8">
                Aviso de Privacidad Integral
              </h1>
              <p className="text-lg text-grafito leading-[1.7] max-w-3xl">
                En cumplimiento con la Ley Federal de Protección de Datos Personales
                en Posesión de los Particulares (LFPDPPP) y su Reglamento.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-[140px]">
          <div className="max-w-3xl mx-auto prose prose-borgonia">
            <p className="text-sm text-taupe mb-8">
              Última actualización: Febrero 2026
            </p>

            <h2>I. Identidad y Domicilio del Responsable</h2>
            <p>
              <strong>Dra. Erika Torres Valdez</strong>, con nombre comercial <strong>Urofemina</strong>,
              con domicilio en World Trade Center Ciudad de México, Montecito 38, Piso 12,
              Colonia Nápoles, Alcaldía Benito Juárez, C.P. 03810, Ciudad de México, México,
              es responsable del tratamiento de sus datos personales.
            </p>

            <h2>II. Datos Personales que se Recaban</h2>
            <p>Para las finalidades señaladas en el presente Aviso de Privacidad, podemos recabar las siguientes categorías de datos personales:</p>

            <h3>Datos de Identificación y Contacto</h3>
            <ul>
              <li>Nombre completo</li>
              <li>Edad y fecha de nacimiento</li>
              <li>Domicilio</li>
              <li>Número telefónico</li>
              <li>Correo electrónico</li>
            </ul>

            <h3>Datos Personales Sensibles</h3>
            <p>
              Para brindarle atención médica especializada en uroginecología, es necesario
              recabar y tratar datos personales sensibles, incluyendo:
            </p>
            <ul>
              <li>Estado de salud presente, pasado y futuro</li>
              <li>Historial clínico y antecedentes médicos</li>
              <li>Antecedentes ginecológicos y obstétricos</li>
              <li>Resultados de estudios clínicos, de laboratorio y de gabinete</li>
              <li>Diagnósticos médicos</li>
              <li>Tratamientos prescritos y procedimientos realizados</li>
              <li>Información sobre vida sexual cuando sea clínicamente relevante</li>
            </ul>
            <p>
              <strong>Le informamos que estos datos sensibles requieren de su consentimiento expreso,
              el cual se obtiene al firmar el formato de consentimiento informado previo a su atención médica.</strong>
            </p>

            <h2>III. Finalidades del Tratamiento</h2>

            <h3>Finalidades Primarias (Necesarias)</h3>
            <p>Sus datos personales serán utilizados para:</p>
            <ul>
              <li>Agendar y confirmar citas médicas</li>
              <li>Crear y administrar su expediente clínico conforme a la NOM-004-SSA3-2012</li>
              <li>Proporcionar atención médica especializada en uroginecología</li>
              <li>Realizar diagnósticos y prescribir tratamientos</li>
              <li>Dar seguimiento a su evolución clínica</li>
              <li>Emitir recetas médicas y certificados</li>
              <li>Cumplir con obligaciones legales y normativas en materia de salud</li>
              <li>Gestionar la facturación y cobranza de servicios</li>
              <li>Coordinar atención con otros profesionales de la salud cuando sea necesario</li>
            </ul>

            <h3>Finalidades Secundarias</h3>
            <p>De manera adicional, y sujeto a su consentimiento, sus datos podrán ser utilizados para:</p>
            <ul>
              <li>Enviar recordatorios de citas y seguimientos preventivos</li>
              <li>Informar sobre servicios médicos adicionales</li>
              <li>Realizar encuestas de satisfacción para mejorar la calidad del servicio</li>
              <li>Fines estadísticos y de investigación clínica (siempre de forma anónima)</li>
            </ul>
            <p>
              Si no desea que sus datos personales sean tratados para estas finalidades secundarias,
              puede manifestarlo enviando un correo a la dirección indicada en la sección de contacto.
            </p>

            <h2>IV. Transferencias de Datos</h2>
            <p>Sus datos personales podrán ser transferidos a:</p>
            <ul>
              <li>
                <strong>Laboratorios clínicos y de diagnóstico:</strong> Para la realización de
                estudios necesarios para su diagnóstico y tratamiento.
              </li>
              <li>
                <strong>Instituciones hospitalarias:</strong> En caso de requerir procedimientos
                quirúrgicos o atención de emergencia.
              </li>
              <li>
                <strong>Otros profesionales de la salud:</strong> Cuando sea necesaria la
                interconsulta o referencia a especialistas.
              </li>
              <li>
                <strong>Compañías de seguros:</strong> Únicamente cuando usted lo solicite
                expresamente para trámites de reembolso.
              </li>
              <li>
                <strong>Autoridades sanitarias:</strong> Cuando exista obligación legal de
                notificación epidemiológica.
              </li>
            </ul>
            <p>
              Estas transferencias no requieren de su consentimiento conforme al artículo 37
              de la LFPDPPP, al ser necesarias para la atención médica, el cumplimiento de
              obligaciones legales, o realizarse a su solicitud.
            </p>

            <h2>V. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué
              los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es
              su derecho solicitar la corrección de su información personal en caso de que
              esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos
              de nuestros registros o bases de datos cuando considere que la misma no está
              siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus
              datos personales para fines específicos (Oposición). Estos derechos se conocen
              como derechos ARCO.
            </p>
            <p>
              Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar
              la solicitud respectiva a través del correo electrónico indicado en la sección
              de contacto, con la siguiente información:
            </p>
            <ul>
              <li>Nombre completo del titular</li>
              <li>Domicilio u otro medio para comunicarle la respuesta a su solicitud</li>
              <li>Documentos que acrediten su identidad o la representación legal</li>
              <li>Descripción clara y precisa de los datos personales respecto de los cuales busca ejercer alguno de los derechos ARCO</li>
              <li>Cualquier otro elemento o documento que facilite la localización de los datos personales</li>
            </ul>
            <p>
              En un plazo máximo de veinte días hábiles atenderemos su solicitud y le
              informaremos sobre la procedencia de la misma.
            </p>

            <h2>VI. Revocación del Consentimiento</h2>
            <p>
              Usted puede revocar el consentimiento que nos haya otorgado para el tratamiento
              de sus datos personales. Sin embargo, es importante que tenga en cuenta que no
              en todos los casos podremos atender su solicitud o concluir el uso de forma
              inmediata, ya que es posible que por alguna obligación legal requiramos seguir
              tratando sus datos personales, particularmente en lo referente al expediente
              clínico, el cual debe conservarse por un período mínimo de cinco años conforme
              a la normatividad aplicable.
            </p>

            <h2>VII. Limitación del Uso o Divulgación</h2>
            <p>
              Con objeto de que usted pueda limitar el uso y divulgación de su información
              personal, le ofrecemos el registro en nuestro listado de exclusión, a fin de
              que sus datos no sean tratados para finalidades secundarias. Para mayor
              información, favor de contactarnos.
            </p>

            <h2>VIII. Uso de Cookies y Tecnologías de Rastreo</h2>
            <p>
              Nuestro sitio web puede utilizar cookies y otras tecnologías de rastreo que
              nos permiten mejorar su experiencia de navegación. Estas tecnologías recaban
              información como tipo de navegador, tiempo de acceso y páginas visitadas.
              Usted puede deshabilitar estas tecnologías a través de la configuración de
              su navegador.
            </p>

            <h2>IX. Modificaciones al Aviso de Privacidad</h2>
            <p>
              El presente aviso de privacidad puede sufrir modificaciones, cambios o
              actualizaciones derivadas de nuevos requerimientos legales, necesidades de
              la práctica médica, o cambios en nuestros servicios. Nos comprometemos a
              mantenerlo informado sobre los cambios que pueda sufrir el presente aviso
              de privacidad a través de nuestro sitio web.
            </p>

            <h2>X. Contacto</h2>
            <p>
              Para cualquier duda, aclaración o ejercicio de sus derechos ARCO, puede
              contactarnos a través de:
            </p>
            <ul>
              <li><strong>Domicilio:</strong> World Trade Center Ciudad de México, Montecito 38, Piso 12, Col. Nápoles, Benito Juárez, C.P. 03810, Ciudad de México</li>
              <li><strong>Teléfono:</strong> 55 6465 5364</li>
            </ul>
            <p>
              Le atenderemos en un horario de lunes a viernes de 9:00 a 18:00 horas.
            </p>

            <h2>XI. Consentimiento</h2>
            <p>
              Al proporcionar sus datos personales a través de nuestro formulario de
              contacto, consulta presencial, o cualquier otro medio, usted consiente
              el tratamiento de sus datos conforme a lo establecido en el presente
              Aviso de Privacidad.
            </p>
            <p>
              Para el tratamiento de datos personales sensibles, se recabará su
              consentimiento expreso y por escrito mediante el formato de consentimiento
              informado que se le proporcionará previo a su atención médica.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
