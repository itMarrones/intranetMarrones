// HTML para el formulario de Bajas
const formularioBajasHTML = `
    <h1>Formulario de Bajas</h1>
    <form id="formularioBajas" class="form-container" aria-labelledby="formularioBajasTitle">
        <label for="fechaBaja" aria-required="true">Fecha *</label>
        <input type="date" id="fechaBaja" name="fecha" class="input-field" required aria-required="true" />

        <label for="tipoRegistroBaja" aria-required="true">Tipo de Registro *</label>
        <select id="tipoRegistroBaja" name="tipoRegistro" class="input-field" required aria-required="true">
            <option value="" disabled selected>Selecciona una opción</option>
            <option value="baja">Baja</option>
        </select>

        <label for="nombreBaja" aria-required="true">Nombre y Apellidos *</label>
        <input type="text" id="nombreBaja" name="nombre" class="input-field" required aria-required="true" />

        <label for="dniBaja" aria-required="true">DNI *</label>
        <input type="text" id="dniBaja" name="dni" class="input-field" required aria-required="true" />

        <label for="fechaFinalizacion" aria-required="true">Fecha de Finalización *</label>
        <input type="date" id="fechaFinalizacion" name="fechaFinalizacion" class="input-field" required aria-required="true" />

        <label for="departamentoBaja" aria-required="true">¿En qué DPTO trabajaba? *</label>
        <select id="departamentoBaja" name="departamento" class="input-field" required aria-required="true">
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

        <label for="materialBaja" aria-required="true">¿Ha de devolver material? *</label>
        <select id="materialBaja" name="material" class="input-field" required aria-required="true">
            <option value="" disabled selected>Selecciona una opción</option>
            <option value="telefono">Teléfono móvil</option>
            <option value="portatil">Portátil</option>
            <option value="otros">Otros</option>
            <option value="no">No</option>
        </select>

        <label for="comentarioBaja">Comentario</label>
        <textarea id="comentarioBaja" name="comentario" class="input-field"></textarea>

        <button type="submit" class="submit-btn">Enviar</button>
    </form>
`;

// Función para inicializar el formulario de Bajas
function inicializarFormularioBajas() {
    const formElement = document.getElementById('formularioBajas');

    formElement.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Capturamos los datos del formulario
        const formData = new FormData(formElement);
        const formObject = Object.fromEntries(formData);

        // Aquí puedes agregar cualquier lógica que necesites con los datos, como enviarlos a un servidor, etc.
        console.log('Formulario de Bajas enviado:', formObject);
    });

    // Comportamiento dinámico para el select de material
    const materialSelect = formElement.querySelector('#materialBaja');
    materialSelect.addEventListener('change', function () {
        if (this.value === 'otros') {
            // Si se selecciona "Otros", se habilita un campo para especificar
            const comentarioField = formElement.querySelector('#comentarioBaja');
            comentarioField.disabled = false;
        } else {
            // Si no se selecciona "Otros", se deshabilita el campo de comentario
            const comentarioField = formElement.querySelector('#comentarioBaja');
            comentarioField.disabled = true;
            comentarioField.value = ''; // Limpiar el campo si no está seleccionado
        }
    });

    // Comportamiento dinámico para los checkboxes de material
    const otrosCheckbox = formElement.querySelector('#materialOtros');
    const otrosInput = formElement.querySelector('#otrosMaterialText');
    otrosCheckbox.addEventListener('change', function () {
        if (this.checked) {
            otrosInput.disabled = false;
        } else {
            otrosInput.disabled = true;
            otrosInput.value = ''; // Limpiar el campo si no está seleccionado
        }
    });

    // Habilitar el campo "Otros material" si se selecciona uno de los materiales específicos
    const toggleOtrosMaterial = () => {
        const otrosMaterialInput = document.getElementById('otrosMaterialText');
        const materialCheckboxes = [
            'materialPortatil', 'materialTelefonoFijo', 'materialTelefonoMovil',
            'materialLineaTelefonica', 'materialAuriculares', 'materialPantalla',
            'materialTeclado'
        ];

        const isAnyMaterialSelected = materialCheckboxes.some(id => document.getElementById(id).checked);
        otrosMaterialInput.disabled = !isAnyMaterialSelected;
    };

    // Añadir los event listeners a los checkboxes de material
    const materialCheckboxes = [
        'materialPortatil', 'materialTelefonoFijo', 'materialTelefonoMovil',
        'materialLineaTelefonica', 'materialAuriculares', 'materialPantalla', 'materialTeclado'
    ];

    materialCheckboxes.forEach(id => {
        const checkbox = document.getElementById(id);
        checkbox.addEventListener('change', toggleOtrosMaterial);
    });
}

// Función para cargar el formulario de Bajas
function loadFormularioBajas() {
    const contentContainer = document.getElementById('form-container');
    contentContainer.innerHTML = formularioBajasHTML;
    initFormularioBajas(); // Inicializamos el formulario al cargar
}

// Agregar un listener para cargar el formulario de Bajas cuando se hace clic en el botón
document.getElementById('btnFormBajas').addEventListener('click', function () {
    loadFormularioBajas();
});

// Asegúrate de que `window.forms` esté definido
window.forms = window.forms || {};

// Registro del formulario de Altas
window.forms['formularioBajas'] = {
    html: formularioBajasHTML, // La constante con el HTML del formulario
    init: inicializarFormularioBajas // La función de inicialización, si es necesaria
};