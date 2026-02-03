import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Términos y Condiciones | Urofemina - Dra. Erika Torres Valdez',
  description: 'Términos y condiciones de uso del sitio web y servicios médicos de Dra. Erika Torres Valdez.',
}

export default function TermsPage() {
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
                Términos y Condiciones
              </h1>
              <p className="text-lg text-grafito leading-[1.7] max-w-3xl">
                Condiciones de uso del sitio web y lineamientos generales
                para la prestación de servicios médicos.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-[140px]">
          <div className="max-w-3xl mx-auto prose prose-borgonia">
            <p className="text-sm text-taupe mb-8">
              Última actualización: Febrero 2026
            </p>

            <h2>I. Información General</h2>
            <p>
              El presente documento establece los Términos y Condiciones de uso del sitio web
              <strong> urofemina.com</strong> (en adelante, el "Sitio"), propiedad de la
              <strong> Dra. Erika Torres Valdez</strong>, médico especialista en Ginecología
              y Obstetricia con subespecialidad en Urología Ginecológica, con cédula profesional
              debidamente registrada ante las autoridades educativas y de salud mexicanas.
            </p>
            <p>
              El acceso y uso del Sitio implica la aceptación plena y sin reservas de todos
              los términos y condiciones aquí establecidos.
            </p>

            <h2>II. Naturaleza del Contenido</h2>

            <h3>Propósito Informativo</h3>
            <p>
              El contenido de este Sitio tiene fines exclusivamente informativos y educativos
              sobre temas relacionados con la uroginecología y la salud pélvica femenina.
              <strong> La información proporcionada no constituye, bajo ninguna circunstancia,
              consejo médico, diagnóstico o tratamiento.</strong>
            </p>

            <h3>No Sustituye la Consulta Médica</h3>
            <p>
              La información contenida en este Sitio no pretende ni debe reemplazar la
              relación médico-paciente ni la consulta médica presencial. Cada paciente
              tiene circunstancias únicas que requieren evaluación individualizada.
            </p>
            <p>
              <strong>Ante cualquier síntoma, condición médica o duda sobre su salud,
              debe consultar directamente con un profesional de la salud calificado.</strong>
            </p>

            <h3>Situaciones de Emergencia</h3>
            <p>
              Este Sitio no está diseñado para atender emergencias médicas. Si usted
              experimenta una emergencia de salud, debe acudir inmediatamente al servicio
              de urgencias más cercano o llamar a los servicios de emergencia.
            </p>

            <h2>III. Servicios Médicos</h2>

            <h3>Relación Médico-Paciente</h3>
            <p>
              La relación médico-paciente se establece únicamente mediante la consulta
              presencial. El envío de información a través del formulario de contacto
              del Sitio no establece dicha relación y tiene como único propósito facilitar
              la solicitud de citas.
            </p>

            <h3>Consentimiento Informado</h3>
            <p>
              Previo a cualquier procedimiento diagnóstico o terapéutico, se le proporcionará
              información completa sobre la naturaleza del procedimiento, sus beneficios,
              riesgos y alternativas. Se requerirá su consentimiento informado por escrito
              conforme a la normatividad aplicable.
            </p>

            <h3>Expediente Clínico</h3>
            <p>
              El expediente clínico se integrará y manejará conforme a la Norma Oficial
              Mexicana NOM-004-SSA3-2012, garantizando la confidencialidad de su información
              médica.
            </p>

            <h3>Honorarios y Pagos</h3>
            <p>
              Los honorarios por servicios médicos serán informados previamente a la
              consulta. El pago de los servicios es responsabilidad del paciente, salvo
              acuerdo específico con compañías de seguros. Los métodos de pago aceptados
              serán informados al momento de agendar su cita.
            </p>

            <h3>Cancelaciones y Reprogramaciones</h3>
            <p>
              Se solicita notificar cancelaciones o reprogramaciones de citas con al menos
              24 horas de anticipación. Esto permite ofrecer el espacio a otros pacientes
              que requieren atención.
            </p>

            <h2>IV. Uso del Sitio Web</h2>

            <h3>Uso Permitido</h3>
            <p>El usuario se compromete a utilizar el Sitio de conformidad con la ley, estos Términos y Condiciones, y con respeto a los derechos de terceros. Queda prohibido:</p>
            <ul>
              <li>Utilizar el Sitio para fines ilícitos o no autorizados</li>
              <li>Intentar acceder a áreas restringidas del Sitio</li>
              <li>Interferir con el funcionamiento del Sitio</li>
              <li>Reproducir, distribuir o modificar el contenido sin autorización</li>
              <li>Utilizar el Sitio para transmitir contenido dañino o malicioso</li>
            </ul>

            <h3>Propiedad Intelectual</h3>
            <p>
              Todo el contenido del Sitio, incluyendo pero no limitado a textos, imágenes,
              logotipos, diseños y código fuente, es propiedad de la Dra. Erika Torres Valdez
              o se utiliza con la debida autorización, y está protegido por las leyes de
              propiedad intelectual aplicables.
            </p>
            <p>
              Se permite la visualización e impresión del contenido para uso personal y no
              comercial, siempre que se mantengan intactos los avisos de derechos de autor.
            </p>

            <h3>Enlaces a Terceros</h3>
            <p>
              El Sitio puede contener enlaces a sitios web de terceros. Estos enlaces se
              proporcionan únicamente para conveniencia del usuario. No tenemos control
              sobre el contenido de dichos sitios y no asumimos responsabilidad alguna
              por ellos.
            </p>

            <h2>V. Formulario de Contacto</h2>
            <p>
              La información proporcionada a través del formulario de contacto será utilizada
              exclusivamente para responder a su solicitud y, en su caso, agendar una cita.
              El tratamiento de estos datos se realiza conforme a nuestro Aviso de Privacidad.
            </p>
            <p>
              <strong>Importante:</strong> No incluya información médica detallada o sensible
              en el formulario de contacto. Esta información debe ser compartida únicamente
              durante la consulta presencial.
            </p>

            <h2>VI. Limitación de Responsabilidad</h2>
            <p>
              En la máxima medida permitida por la ley aplicable:
            </p>
            <ul>
              <li>
                No garantizamos que el Sitio esté libre de errores, virus o interrupciones.
              </li>
              <li>
                No seremos responsables por daños directos, indirectos, incidentales o
                consecuentes derivados del uso o imposibilidad de uso del Sitio.
              </li>
              <li>
                La información del Sitio se proporciona "tal cual" sin garantías de
                ningún tipo, expresas o implícitas.
              </li>
              <li>
                No asumimos responsabilidad por decisiones tomadas con base en la
                información general del Sitio sin consulta médica presencial.
              </li>
            </ul>

            <h2>VII. Indemnización</h2>
            <p>
              El usuario acepta indemnizar y mantener indemne a la Dra. Erika Torres Valdez,
              sus colaboradores y asociados, de cualquier reclamación, daño, pérdida o gasto
              (incluyendo honorarios legales) derivados del incumplimiento de estos Términos
              y Condiciones o del uso indebido del Sitio.
            </p>

            <h2>VIII. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos y Condiciones en
              cualquier momento. Las modificaciones entrarán en vigor desde su publicación
              en el Sitio. El uso continuado del Sitio después de dichas modificaciones
              constituye la aceptación de los nuevos términos.
            </p>

            <h2>IX. Legislación Aplicable y Jurisdicción</h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos
              Mexicanos. Para cualquier controversia derivada del uso del Sitio o de la
              prestación de servicios médicos, las partes se someten a la jurisdicción
              de los tribunales competentes de la Ciudad de México, renunciando a cualquier
              otro fuero que pudiera corresponderles por razón de su domicilio presente
              o futuro.
            </p>

            <h2>X. Disposiciones Generales</h2>
            <p>
              Si alguna disposición de estos Términos y Condiciones fuera declarada nula
              o inaplicable, las demás disposiciones permanecerán en pleno vigor y efecto.
            </p>
            <p>
              La falta de ejercicio de cualquier derecho establecido en estos Términos no
              constituye renuncia al mismo.
            </p>

            <h2>XI. Contacto</h2>
            <p>
              Para cualquier duda o aclaración sobre estos Términos y Condiciones, puede
              contactarnos a través de:
            </p>
            <ul>
              <li><strong>Domicilio:</strong> World Trade Center Ciudad de México, Montecito 38, Piso 12, Col. Nápoles, Benito Juárez, C.P. 03810, Ciudad de México</li>
              <li><strong>Teléfono:</strong> 55 6465 5364</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
