// HTML para el formulario de Ticketing (sin cambios)
const formularioTicketingHTML = `
    <h1>Formulario de Ticketing</h1>
    <form id="incidenciaForm">
        <label for="fechaSolicitud">Fecha de Solicitud:</label><br>
        <input type="date" id="fechaSolicitud" name="fechaSolicitud" disabled required><br><br>

        <label for="fechaIncidencia">Fecha de la Incidencia:</label><br>
        <input type="date" id="fechaIncidencia" name="fechaIncidencia" required><br><br>

        <label for="sede">Sede:</label><br>
        <select id="sede" name="sede" required>
            <option value="" disabled selected>Seleccionar sede</option>
            <option value="Badalona">Badalona</option>
            <option value="Zona Franca">Zona Franca</option>
        </select><br><br>

        <label for="nombreUsuario">Nombre de Usuario:</label><br>
        <input type="text" id="nombreUsuario" name="nombreUsuario" required><br><br>

        <label for="correoElectronico">Correo Electrónico:</label><br>
        <input type="email" id="correoElectronico" name="correoElectronico" required><br><br>

        <label for="telefonoContacto">Teléfono de Contacto:</label><br>
        <input type="tel" id="telefonoContacto" name="telefonoContacto" required><br><br>

        <label for="tipoSolicitud">Tipo de Solicitud:</label><br>
        <select id="tipoSolicitud" name="tipoSolicitud" required>
            <option value="" disabled selected>Seleccionar tipo de solicitud</option>
            <option value="Incidencia Técnica">Incidencia Técnica</option>
            <option value="Petición">Petición</option>
            <option value="Solicitud de Material">Solicitud de Material</option>
        </select><br><br>

        <label for="subTipoIncidencia">Tipo de Incidencia Específica:</label><br>
        <select id="subTipoIncidencia" name="subTipoIncidencia" disabled required>
            <option value="" disabled selected>Seleccionar tipo específico</option>
            <option value="Sage">Incidencia de Sage</option>
            <option value="Puesto de Trabajo">Incidencia con Puesto de Trabajo</option>
            <option value="Correo Electrónico">Incidencia con Correo Electrónico</option>
            <option value="RRHH">Incidencia RRHH</option>
            <option value="Teams">Incidencia Teams</option>
            <option value="Centralita">Incidencia Problemas Centralita</option>
            <option value="Otros">Otros</option>
        </select><br><br>

        <label for="afectaTodo">¿Afecta a todo el mundo?</label><br>
        <select id="afectaTodo" name="afectaTodo" required>
            <option value="" disabled selected>Seleccionar opción</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
        </select><br><br>

        <label for="descCorta">Descripción Corta (Ej. Usuario Bloqueado):</label><br>
        <input type="text" id="descCorta" name="descCorta" maxlength="15" required><br><br>

        <label for="descripcion">Descripción de la Incidencia:</label><br>
        <textarea id="descripcion" name="descripcion" rows="4" required></textarea><br><br>

        <label for="ficheros">Adjuntar Ficheros:</label><br>
        <input type="file" id="ficheros" name="ficheros" multiple><br><br>

        <button type="submit">Enviar Incidencia</button>
    </form>
`;

// Función para inicializar el formulario de Ticketing (similar al de Altas)
function inicializarFormularioTicketing() {
    const formElement = document.getElementById('incidenciaForm');
    if (formElement) {
        console.log('Inicializando formulario de Ticketing...');

        // Asignar fecha actual a 'fechaSolicitud'
        document.getElementById('fechaSolicitud').value = new Date().toISOString().split('T')[0];

        // Comportamiento dinámico para el select de tipo de solicitud
        const tipoSolicitudSelect = document.getElementById('tipoSolicitud');
        tipoSolicitudSelect.addEventListener('change', function () {
            const tipoSolicitud = this.value;
            const subTipoIncidencia = document.getElementById('subTipoIncidencia');
            console.log('Cambio en tipo de solicitud:', tipoSolicitud);
            // Activar o desactivar 'subTipoIncidencia' según el tipo de solicitud
            subTipoIncidencia.disabled = tipoSolicitud !== 'Incidencia Técnica';
        });

        // Capturar el evento de envío del formulario
        formElement.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log('Formulario de Ticketing enviado');

            // Recoger los datos del formulario
            const formData = new FormData(formElement);
            const formObject = Object.fromEntries(formData);

            // Preparar el asunto y cuerpo del mensaje
            const subject = `${formObject.subTipoIncidencia || formObject.tipoSolicitud} - ${formObject.descCorta} - ${formObject.nombreUsuario}`;
            const body = `
                Fecha de Solicitud: ${formObject.fechaSolicitud}
                \nFecha de la Incidencia: ${formObject.fechaIncidencia}
                \nSede: ${formObject.sede}
                \nNombre de Usuario: ${formObject.nombreUsuario}
                \nCorreo Electrónico: ${formObject.correoElectronico}
                \nTeléfono de Contacto: ${formObject.telefonoContacto}
                \nTipo de Solicitud: ${formObject.tipoSolicitud}
                \nTipo de Incidencia Específica: ${formObject.subTipoIncidencia || 'N/A'}
                \n¿Afecta a todo el mundo?: ${formObject.afectaTodo}
                \nDescripción Corta: ${formObject.descCorta}
                \nDescripción de la Incidencia: ${formObject.descripcion}
            `;

            // Preparar los parámetros para el envío con EmailJS (este es solo un ejemplo)
            const emailParams = {
                to_email: 'ticketing20+wjzhinusepvf2qq4v0pu@boards.trello.com',
                cc_email: 'informatica@marrones.cat',
                subject: subject,
                message: body,
            };

            // Enviar el correo con EmailJS (esto es un ejemplo de integración)
            emailjs.send('tu_servicio_id', 'tu_plantilla_id', emailParams)
                .then(response => {
                    alert("Ticket enviado con éxito.");
                })
                .catch(error => {
                    alert("Error al completar el formulario.");
                    console.error('Error:', error);
                });
        });
    }
}

// Función para cargar el formulario de Ticketing (similar a la lógica de Altas)
function cargarFormularioTicketing() {
    const contentContainer = document.getElementById('form-container');
    contentContainer.innerHTML = formularioTicketingHTML;
    inicializarFormularioTicketing(); // Inicializamos el formulario al cargar
}

// Asegúrate de que `window.forms` esté definido
window.forms = window.forms || {};

// Registro del formulario de Ticketing
window.forms['formularioTicketing'] = {
    html: formularioTicketingHTML, // La constante con el HTML del formulario
    init: inicializarFormularioTicketing // La función de inicialización
};

// Cargar el formulario de Ticketing al hacer clic en el botón (ajusta el botón según el HTML)
document.getElementById('btnFormTicketing').addEventListener('click', function () {
    cargarFormularioTicketing();
});