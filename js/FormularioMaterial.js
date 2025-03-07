// Definir el HTML del formulario de Material Informático
const formularioMaterialHTML = `
    <div class="form-container">
        <h1>Formulario de Pedido de Material Informático</h1>
        <form id="formularioMaterial" class="form-container">
            <!-- Tipo de Material -->
            <div class="form-group">
                <label for="tipo_material">Tipo de Material</label>
                <select id="tipo_material" name="tipo_material">
                    <option value="" selected disabled>Selecciona un tipo de material</option>
                    <option value="Adaptador de Pantalla Tipo B">Adaptador de Pantalla Tipo B</option>
                    <option value="Auriculares Centralita">Auriculares Centralita</option>
                    <option value="Cable de Ethernet">Cable de Ethernet</option>
                    <option value="Cable HDMI">Cable HDMI</option>
                    <option value="Cable VGA">Cable VGA</option>
                    <option value="Cargador Portátil">Cargador Portátil</option>
                    <option value="Herramientas">Herramientas</option>
                    <option value="Móvil">Móvil</option>
                    <option value="Pantalla HDMI">Pantalla HDMI</option>
                    <option value="Pantalla VGA">Pantalla VGA</option>
                    <option value="Portátil">Portátil</option>
                    <option value="Ratón">Ratón</option>
                    <option value="Teclado">Teclado</option>
                    <option value="Torre">Torre</option>
                    <option value="Otros">Otros</option>
                </select>
            </div>

            <!-- Caja de texto para 'Otros' -->
            <div class="form-group" id="otro_material_input">
                <label for="tipo_material_otro_input">Especifica otro tipo de material:</label>
                <input type="text" id="tipo_material_otro_input" name="tipo_material_otro_input" disabled />
            </div>

            <!-- E/S -->
            <div class="form-group">
                <label for="es">E/S</label>
                <select id="es" name="es">
                    <option value="" selected disabled>Selecciona E/S</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Salida">Salida</option>
                </select>
            </div>

            <!-- Fecha E/S -->
            <div class="form-group">
                <label for="fecha_es">Fecha E/S</label>
                <input type="date" id="fecha_es" name="fecha_es" required />
            </div>

            <!-- Cantidad -->
            <div class="form-group">
                <label for="cantidad">Cantidad</label>
                <input type="number" id="cantidad" name="cantidad" required />
            </div>

            <!-- Motivo -->
            <div class="form-group">
                <label for="motivo">Motivo</label>
                <select id="motivo" name="motivo">
                    <option value="" selected disabled>Selecciona un motivo</option>
                    <option value="Averíado">Averíado</option>
                    <option value="Baja">Baja</option>
                    <option value="Cambio de equipo">Cambio de equipo</option>
                    <option value="Entregado">Entregado</option>
                    <option value="Pedido">Pedido</option>
                    <option value="Reservado">Reservado</option>
                    <option value="Reparado">Reparado</option>
                    <option value="Retirado">Retirado</option>
                </select>
            </div>

            <!-- Disponibilidad -->
            <div class="form-group">
                <label for="disponibilidad">Disponibilidad</label>
                <select id="disponibilidad" name="disponibilidad">
                    <option value="" selected disabled>Selecciona disponibilidad</option>
                    <option value="Disponible">Disponible</option>
                    <option value="No Disponible">No Disponible</option>
                    <option value="Reutilizable">Reutilizable</option>
                </select>
            </div>

            <!-- Estado -->
            <div class="form-group">
                <label for="estado">Estado</label>
                <select id="estado" name="estado">
                    <option value="" selected disabled>Selecciona estado</option>
                    <option value="Muy usado">Muy usado</option>
                    <option value="Nuevo">Nuevo</option>
                </select>
            </div>

            <!-- Comentarios -->
            <div class="form-group">
                <label for="comentarios">Comentarios</label>
                <input type="text" id="comentarios" name="comentarios" />
            </div>
      
            <button type="submit" class="submit-btn">Enviar Pedido</button>
        </form>
    </div>
`;

// Función para inicializar el formulario de Pedido de Material
function inicializarFormularioMaterial() {
    const form = document.getElementById("formularioMaterial");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evitar el envío del formulario por defecto

            // Preparar los datos del formulario
            const formData = new FormData(form);
            const formObject = Object.fromEntries(formData);
            console.log("Datos del formulario de Pedido de Material:", formObject);
        });
    }
}

// Función para activar o desactivar el campo 'Otros' cuando se cambia la selección de tipo de material
function activarDesactivarOtroInput() {
    const tipoMaterial = document.getElementById("tipo_material").value;
    const otroInput = document.getElementById("tipo_material_otro_input");

    // Activar o desactivar el campo de texto según la opción seleccionada
    otroInput.disabled = tipoMaterial !== 'Otros';
    if (tipoMaterial !== 'Otros') {
        otroInput.value = ''; // Limpiar el campo de texto cuando se deshabilita
    }
}

// Función para cargar dinámicamente el formulario de Material
function cargarFormularioMaterial() {
    const formContainer = document.getElementById('form-container'); // El contenedor donde se cargará el formulario
    if (!formContainer) {
        console.error("Contenedor de formulario no encontrado.");
        return;
    }

    // Limpiar el contenedor antes de cargar un nuevo formulario
    formContainer.innerHTML = '';

    // Insertar el formulario de material
    formContainer.insertAdjacentHTML('beforeend', formularioMaterialHTML);
    inicializarFormularioMaterial(); // Inicializar eventos después de cargar el formulario

    // Asegurarse de que la función activarDesactivarOtroInput se ejecute después de cargar el formulario
    activarDesactivarOtroInput();
}

// Asegurarse de que `window.forms` esté definido para almacenar los formularios dinámicos
window.forms = window.forms || {};

// Registro del formulario de Pedido de Material
window.forms['formularioMaterial'] = {
    html: formularioMaterialHTML, // El HTML del formulario de Pedido de Material
    init: inicializarFormularioMaterial // Función de inicialización del formulario
};

// Asignar el evento para cargar el formulario de Material al hacer clic en el botón "btnFormularioMaterial"
document.getElementById("btnFormularioMaterial").addEventListener("click", function () {
    cargarFormularioMaterial(); // Cargar formulario de material al hacer clic
});
