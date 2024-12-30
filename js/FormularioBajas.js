window.forms = window.forms || {}; // Usar o inicializar window.forms
// Definir el formulario de Bajas
const forms = {
    "formularioBajas": {
        "html": `
            <h1>Formulario de Bajas</h1>
            <form id="formularioBajas" class="form-container">
                <label for="fecha">Fecha *</label>
                <input type="date" id="fecha" name="fecha" class="input-field" required />
                <label for="tipoRegistro">Tipo de Registro *</label>
                <select id="tipoRegistro" name="tipoRegistro" class="input-field" required>
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option value="baja">Baja</option>
                </select>
                <label for="nombre">Nombre y Apellidos *</label>
                <input type="text" id="nombre" name="nombre" class="input-field" required />
                <label for="dni">DNI *</label>
                <input type="text" id="dni" name="dni" class="input-field" required />
                <label for="fechaFinalizacion">Fecha de Finalización *</label>
                <input type="date" id="fechaFinalizacion" name="fechaFinalizacion" class="input-field" required />
                <label for="departamento">¿En qué DPTO trabajaba? *</label>
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
                <label for="material">¿Ha de devolver material? *</label>
                <select id="material" name="material" class="input-field" required>
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option value="telefono">Teléfono móvil</option>
                    <option value="portatil">Portátil</option>
                    <option value="otros">Otros</option>
                    <option value="no">No</option>
                </select>
                <label for="comentario">Comentario</label>
                <textarea id="comentario" name="comentario" class="input-field"></textarea>
                <button type="submit" class="submit-btn">Enviar</button>
            </form>
        `
    }
};

// Inicializar el formulario de Bajas (validaciones, eventos, etc.)
function inicializarFormularioBajas() {
    const form = document.getElementById("formularioBajas");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evitar el envío del formulario por defecto

            // Aquí puedes agregar validaciones o preparar los datos antes de enviarlos
            const formData = new FormData(form);
            const formObject = Object.fromEntries(formData);
            console.log("Datos del formulario de Bajas:", formObject);
        });
    }
}

// Exportar formulario y función de inicialización
window.forms = window.forms || {};
window.forms.formularioBajas = forms.formularioBajas;

window.inicializarFormularioBajas = inicializarFormularioBajas;