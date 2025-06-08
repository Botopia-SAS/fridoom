'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Privacy() {
  return (
    <section className="min-h-screen px-4 md:px-6 py-12 bg-transparent text-[#152241]">
      <div className="max-w-5xl mx-auto">
        {/* ---------- TÍTULO PRINCIPAL ---------- */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          Política de Privacidad de <span className="text-blue-600">fridoom</span>
        </motion.h1>

        {/* ---------- CONTENIDO ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 text-md sm:text-lg leading-relaxed"
        >
          {/* FECHA */}
          <div className="text-center italic">
            Última actualización: 8 de junio de 2025
          </div>

          {/* INTRO */}
          <p className="text-justify">
            En <strong>FRIDOOM&nbsp;S.A.S.</strong> (“fridoom”, “nosotros”), con domicilio en
            <strong> Calle&nbsp;159&nbsp;No.&nbsp;17-38, Bogotá D.C., Colombia</strong>, respetamos tu
            privacidad y protegemos tus datos. A continuación describimos, con lenguaje claro, cómo
            recabamos, usamos y salvaguardamos tu información cuando utilizas la app fridoom,
            nuestro bot de WhatsApp, el sitio web <strong>fridoom.com</strong> y otros servicios
            asociados.
          </p>

          {/* ---------- SECCIÓN 1 ---------- */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Responsable del Tratamiento</h2>
            <div className="pl-4 space-y-1">
              <p><strong>FRIDOOM S.A.S.</strong></p>
              <p>NIT: 901938156-5</p>
              <p>Correo: <a href="mailto:hablemos@fridoom.com" className="text-blue-600">hablemos@fridoom.com</a></p>
              <p>Tel.: +57 322 816 0021</p>
              <p>Contacto de privacidad (DPO): <a href="mailto:privacidad@fridoom.com" className="text-blue-600">privacidad@fridoom.com</a></p>
            </div>
          </section>

          {/* ---------- SECCIÓN 2 ---------- */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Datos que recopilamos</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white/10 backdrop-blur-sm rounded-lg">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 text-left">Categoría</th>
                    <th className="p-4 text-left">Detalles y ejemplos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Datos de cuenta</td>
                    <td className="p-4">userId, correo, número celular verificado, contraseña cifrada.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Datos de perfil</td>
                    <td className="p-4">civilStatus, occupation, gender, birthDay, nickname, profileImage.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Datos de localización</td>
                    <td className="p-4">latitude, longitude (solo al registrar transacciones con geolocalización habilitada).</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Identificación oficial</td>
                    <td className="p-4">id_type (tipo de documento), numberId (n.º documento).</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Enlaces e integraciones</td>
                    <td className="p-4">link_ids (identificadores de cuentas bancarias o APIs que vincules).</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Preferencias del servicio</td>
                    <td className="p-4">isPro (estado de suscripción), idioma, notificaciones.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Datos financieros introducidos</td>
                    <td className="p-4">Ingresos, egresos, presupuestos, inversiones y cualquier archivo adjunto/ticket.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Datos técnicos y de uso</td>
                    <td className="p-4">Identificador de dispositivo (IDFV/UUID), IP, tipo de dispositivo, registros de actividad en la app.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              <em>No solicitamos ni almacenamos datos sensibles como salud, creencias religiosas o datos biométricos.</em>
            </p>
          </section>

          {/* ---------- SECCIÓN 3 ---------- */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. Finalidades del tratamiento</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Prestar y mantener el servicio:</strong> registrar movimientos, generar presupuestos y reportes personalizados.</li>
              <li><strong>Personalizar tu experiencia:</strong> entrenar algoritmos para clasificar transacciones y mostrar contenido relevante.</li>
              <li><strong>Mantener la seguridad:</strong> prevenir fraude, gestionar autenticación y proteger tu cuenta.</li>
              <li><strong>Cumplir obligaciones legales:</strong> atender requerimientos fiscales y regulatorios.</li>
              <li>
                <strong>Comunicación personalizada (con tu consentimiento):</strong> enviarte consejos, novedades y recomendaciones
                de <span className="underline decoration-dotted">productos o servicios financieros acordes a tu perfil</span>.
              </li>
              <li><strong>Estadísticas agregadas:</strong> elaborar reportes anónimos sobre tendencias de uso.</li>
            </ul>
          </section>

          {/* ---------- SECCIÓN 4 ---------- */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Base jurídica</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Ejecución del contrato (
                <Link href="/terms" className="text-blue-600 underline">
                  Términos de uso
                </Link>
                ).
              </li>
              <li>Consentimiento otorgado al registrar tu cuenta y en ajustes de la app para finalidades opcionales.</li>
              <li>Interés legítimo en mejorar el servicio y prevenir fraude.</li>
            </ul>
          </section>

          {/* ---------- SECCIÓN 5 ---------- */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Destinatarios y transferencias</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white/10 backdrop-blur-sm rounded-lg">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 text-left">Destinatario</th>
                    <th className="p-4 text-left">Propósito</th>
                    <th className="p-4 text-left">Salvaguardas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Amazon Web Services (EE. UU./UE)</td>
                    <td className="p-4">Alojamiento de bases de datos y archivos.</td>
                    <td className="p-4">Cláusulas contractuales tipo; cifrado AES-256 en reposo.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Firebase &amp; Sentry</td>
                    <td className="p-4">Analítica de desempeño y registro de errores.</td>
                    <td className="p-4">Seudonimización de ID de usuario.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Proveedor de datos de mercado (API Yahoo Finance)</td>
                    <td className="p-4">Precios y noticias financieras.</td>
                    <td className="p-4">Solo se comparten identificadores aleatorios.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              Si transferimos datos fuera de Colombia, garantizamos un nivel de protección equivalente mediante contratos y marcos internacionales.
            </p>
          </section>

          {/* ---------- SECCIÓN 6 ---------- */}
          <section>
            <h2 className="text-2xl font-bold mb-4">6. Conservación</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white/10 backdrop-blur-sm rounded-lg">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="p-4 text-left">Tipo de dato</th>
                    <th className="p-4 text-left">Plazo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Cuenta activa</td>
                    <td className="p-4">Mientras mantengas la cuenta y hasta 12 meses después de la última actividad.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Registros contables/fiscales</td>
                    <td className="p-4">5 años según legislación colombiana.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Copias de seguridad</td>
                    <td className="p-4">30 días con eliminación rotativa.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ---------- SECCIÓN 7 ---------- */}
          <section>
            <h2 className="text-2xl font-bold mb-4">7. Seguridad</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>TLS 1.3 en todas las comunicaciones.</li>
              <li>Cifrado AES-256 de datos en reposo.</li>
              <li>Autenticación biométrica opcional.</li>
              <li>Tokens de sesión con expiración corta y refresco seguro.</li>
              <li>Auditorías de código y pentests anuales.</li>
            </ul>
          </section>

          {/* ---------- SECCIÓN 8 ---------- */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Derechos de los titulares</h2>
            <p>
              De conformidad con la Ley 1581/2012 y el GDPR, puedes ejercer los derechos de acceso,
              rectificación, cancelación, oposición, portabilidad y revocación escribiendo a&nbsp;
              <a href="mailto:privacidad@fridoom.com" className="text-blue-600">privacidad@fridoom.com</a>.
            </p>
          </section>

          {/* ---------- SECCIÓN 9 ---------- */}
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Cambios a esta política</h2>
            <p>
              Publicaremos cualquier modificación en esta URL con la fecha de entrada en vigor y, cuando corresponda,
              te la notificaremos por email o notificación in-app.
            </p>
          </section>

          {/* ---------- SECCIÓN 10 ---------- */}
          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contacto</h2>
            <p>
              CTO: David Espejo García<br />
              Correo: <a href="mailto:privacidad@fridoom.com" className="text-blue-600">privacidad@fridoom.com</a><br />
              Tel.: +57 322 816 0021
            </p>
          </section>

          {/* ---------- DESPEDIDA ---------- */}
          <div className="text-center mt-8 italic">
            Gracias por confiar en fridoom para impulsar tu libertad financiera.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
