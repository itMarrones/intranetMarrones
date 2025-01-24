// Definir el formulario HTML
const formularioAltasHTML = `
    <h1>Formulario de Altas</h1>
    <form id="formularioAltas" class="form-container">
        <label for="fecha">Fecha *</label>
        <input type="date" id="fecha" name="fecha" class="input-field" required />
        <label for="tipoRegistro">Tipo de Registro *</label>
        <select id="tipoRegistro" name="tipoRegistro" class="input-field" required>
            <option value="" disabled selected>Selecciona una opción</option>
            <option value="alta">Alta</option>
            <option value="cambio">Cambio de puesto</option>
            <option value="sustitucion">Sustitución</option>
        </select>
        <label for="dni">DNI *</label>
        <input type="text" id="dni" name="dni" class="input-field" required />
        <label for="nombre">Nombre y Apellidos *</label>
        <input type="text" id="nombre" name="nombre" class="input-field" required />
        <label for="sustituido">En caso de ser una sustitución, ¿a quién reemplaza?</label>
        <input type="text" id="sustituido" name="sustituido" class="input-field" />
        <label for="fechaIncorporacion">Fecha de Incorporación *</label>
        <input type="date" id="fechaIncorporacion" name="fechaIncorporacion" class="input-field" required />
        <label for="departamento">¿En qué Dpto trabajará? *</label>
        <select id="departamento" name="departamento" class="input-field" required>
            <option value="" disabled selected>Selecciona una opción</option>
            <option value="0">Administrador Comercial</option>
            <option value="1">ATC Certificados</option>
            <option value="2">ATC Containers</option>
            <option value="3">ATC Industrial</option>
            <option value="4">ATC Sacos</option>
            <option value="5">Contabilidad</option>
            <option value="6">Comerciales Industrial</option>
            <option value="7">Comerciales Especiales</option>
            <option value="8">Compras</option>
            <option value="9">Dirección</option>
            <option value="10">Marketing</option>
            <option value="11">Medio Ambiente</option>
            <option value="12">IT y Tecnología</option>
            <option value="13">RRHH</option>
            <option value="14">RV o CTB</option>
        </select>
        <label for="responsable">¿Quién será su responsable?</label>
        <input type="text" id="responsable" name="responsable" class="input-field" />
        <label for="funciones">¿Qué funciones tiene este cargo? *</label>
        <textarea id="funciones" name="funciones" class="input-field" required></textarea>
        <label>¿Necesitará material? *</label>
        <div id="materialOptions" class="material-options">
            <div class="materialOption">
                <input type="checkbox" id="noMaterial" name="materialNeeded" value="no" />
                <label for="noMaterial">No</label>
            </div>
            <div class="materialOption">
                <input type="checkbox" name="material" value="Portátil" id="materialPortatil" />
                <label for="materialPortatil">Portátil</label>
            </div>
            <div class="materialOption">
                <input type="checkbox" name="material" value="Teléfono Fijo" id="materialTelefonoFijo" />
                <label for="materialTelefonoFijo">Teléfono Fijo</label>
            </div>
            <div class="materialOption">
                <input type="checkbox" name="material" value="Teléfono Móvil" id="materialTelefonoMovil" />
                <label for="materialTelefonoMovil">Teléfono Móvil</label>
            </div>
            <div class="materialOption">
                <input type="checkbox" name="material" value="Línea Telefónica" id="materialLineaTelefonica" />
                <label for="materialLineaTelefonica">Línea Telefónica</label>
            </div>
            <div class="materialOption">
                <input type="checkbox" name="material" value="Auriculares Centralita" id="materialAuriculares" />
                <label for="materialAuriculares">Auriculares Centralita</label>
            </div>
            <div class="materialOption">
                <input type="checkbox" name="material" value="Pantalla" id="materialPantalla" />
                <label for="materialPantalla">Pantalla</label>
            </div>
            <div class="materialOption">
                <input type="checkbox" name="material" value="Teclado y Ratón" id="materialTeclado" />
                <label for="materialTeclado">Teclado y Ratón</label>
            </div>
        </div>
        <div>
            <label for="otrosMaterialText">Otros</label>
            <input type="text" id="otrosMaterialText" name="otrosMaterial" class="input-field" placeholder="Especificar material (opcional)" />
        </div>
        <button type="submit" class="submit-btn">Enviar</button>
    </form>
`;

// Inicializar el formulario de Altas (validaciones, eventos, etc.)
function inicializarFormularioAltas() {
    const form = document.getElementById("formularioAltas");
    if (form) {
        // Asignar fecha actual a 'fecha'
        document.getElementById('fecha').value = new Date().toISOString().split('T')[0];

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evitar el envío del formulario por defecto

            // Recopilar los datos del formulario y ajustarlos al formato del flujo de Power Automate
            const formData = new FormData(form);
            const formObject = Object.fromEntries(formData);

            // Recoger todos los valores de material seleccionados
            const materialesSeleccionados = Array.from(document.querySelectorAll('input[name="material"]:checked'))
                .map(checkbox => checkbox.value);

            // Ajuste de los campos para que coincidan con el flujo de Power Automate
            const dataToSend = {
                fecha: formObject.fecha,
                tipoRegistro: formObject.tipoRegistro,
                nombreApellidos: formObject.nombre,
                dni: formObject.dni,
                sustitucion: formObject.sustituido,
                fechaIncorporacion: formObject.fechaIncorporacion,
                dpto: formObject.departamento,
                funciones: formObject.funciones,
                responsable: formObject.responsable,
                material: materialesSeleccionados.length > 0 ? materialesSeleccionados : [],
                remoto: false,
                comentario: formObject.otrosMaterialText || ""
            };

            console.log("Datos a enviar:", JSON.stringify(dataToSend));

            // Validamos los campos requeridos antes de enviar
            const requiredFields = [
                "fecha", "tipoRegistro", "nombreApellidos", "dni",
                "fechaIncorporacion", "dpto", "funciones"
            ];

            for (const field of requiredFields) {
                if (!dataToSend[field]) {
                    alert(`El campo ${field} es obligatorio.`);
                    return; // Detenemos el envío si falta algún campo obligatorio
                }
            }

            // Validar campos opcionales
            if (dataToSend.tipoRegistro === "sustitucion" && !dataToSend.sustitucion) {
                alert("El campo '¿A quién reemplaza?' es obligatorio.");
                return;
            }

            // URL del flujo de Power Automate
            const flowUrl = 'https://prod-35.westeurope.logic.azure.com:443/workflows/1401d83edda84ada8ff449892fdcb6c5/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=pNPHqan88DYdx_W0rU--WcfQ_Aeie_17F7WH9meRBxk';

            // Enviar los datos al flujo de Power Automate
            fetch(flowUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataToSend)
            })
                .then(async response => {
                    const responseData = await response.json();
                    if (!response.ok) {
                        console.error("Error del flujo:", responseData);
                        alert(`Error al enviar el formulario: ${responseData.error || 'Verifica los datos enviados.'}`);
                        return;
                    }
                    console.log("Datos enviados correctamente:", responseData);
                    alert("Registro enviado con éxito.");
                })
                .catch(error => {
                    console.error("Error al enviar los datos:", error);
                    alert("Hubo un error al enviar el formulario.");
                });
        });

        // Habilitar o deshabilitar el campo 'sustituido' según el tipo de registro
        const tipoRegistroSelect = document.getElementById("tipoRegistro");
        const sustituidoInput = document.getElementById("sustituido");

        tipoRegistroSelect.addEventListener("change", function () {
            if (this.value === "sustitucion") {
                sustituidoInput.disabled = false;
            } else {
                sustituidoInput.disabled = true;
                sustituidoInput.value = ""; // Limpiar el valor si se deshabilita
            }
        });
    }
}

// Llamar a la función para inicializar el formulario
inicializarFormularioAltas();

// Asegúrate de que `window.forms` esté definido
window.forms = window.forms || {};

// Registro del formulario de Altas
window.forms['formularioAltas'] = {
    html: formularioAltasHTML, // La constante con el HTML del formulario
    init: inicializarFormularioAltas // La función de inicialización
};
