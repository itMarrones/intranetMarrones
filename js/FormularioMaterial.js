// Definir el formulario de Pedido de Material Informático como una cadena de texto HTML
const formularioMaterialHTML = `
    <div class="form-container">
        <h2>Formulario de Pedido de Material Informático</h2>
        <form id="formularioMaterial" class="form-container">
            <!-- Tipo de Material -->
            <div class="form-group">
                <label for="tipo_material">Tipo de Material</label>
                <select id="tipo_material" name="tipo_material" onchange="toggleOtherInput('tipo_material', 'other_tipo_material')">
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
                <div class="other-input" id="other_tipo_material" style="display:none;">
                    <label for="tipo_material_otro">Especifica otro tipo de material:</label>
                    <input type="text" id="tipo_material_otro" name="tipo_material_otro" disabled />
                </div>
            </div>

            <!-- E/S -->
            <div class="form-group">
                <label for="es">E/S</label>
                <select id="es" name="es" onchange="toggleOtherInput('es', 'other_es')">
                    <option value="Entrada">Entrada</option>
                    <option value="Salida">Salida</option>
                    <option value="Otros">Otros</option>
                </select>
                <div class="other-input" id="other_es" style="display:none;">
                    <label for="es_otro">Especifica otro tipo de E/S:</label>
                    <input type="text" id="es_otro" name="es_otro" disabled />
                </div>
            </div>

            <!-- Motivo -->
            <div class="form-group">
                <label for="motivo">Motivo</label>
                <select id="motivo" name="motivo" onchange="toggleOtherInput('motivo', 'other_motivo')">
                    <option value="Averíado">Averíado</option>
                    <option value="Baja">Baja</option>
                    <option value="Cambio de equipo">Cambio de equipo</option>
                    <option value="Entregado">Entregado</option>
                    <option value="Pedido">Pedido</option>
                    <option value="Reservado">Reservado</option>
                    <option value="Reparado">Reparado</option>
                    <option value="Retirado">Retirado</option>
                    <option value="Otros">Otros</option>
                </select>
                <div class="other-input" id="other_motivo" style="display:none;">
                    <label for="motivo_otro">Especifica otro motivo:</label>
                    <input type="text" id="motivo_otro" name="motivo_otro" disabled />
                </div>
            </div>

            <!-- Disponibilidad -->
            <div class="form-group">
                <label for="disponibilidad">Disponibilidad</label>
                <select id="disponibilidad" name="disponibilidad" onchange="toggleOtherInput('disponibilidad', 'other_disponibilidad')">
                    <option value="Disponible">Disponible</option>
                    <option value="No Disponible">No Disponible</option>
                    <option value="Reutilizable">Reutilizable</option>
                    <option value="Otros">Otros</option>
                </select>
                <div class="other-input" id="other_disponibilidad" style="display:none;">
                    <label for="disponibilidad_otro">Especifica otra disponibilidad:</label>
                    <input type="text" id="disponibilidad_otro" name="disponibilidad_otro" disabled />
                </div>
            </div>

            <!-- Estado -->
            <div class="form-group">
                <label for="estado">Estado</label>
                <select id="estado" name="estado" onchange="toggleOtherInput('estado', 'other_estado')">
                    <option value="Muy usado">Muy usado</option>
                    <option value="Nuevo">Nuevo</option>
                    <option value="Otros">Otros</option>
                </select>
                <div class="other-input" id="other_estado" style="display:none;">
                    <label for="estado_otro">Especifica otro estado:</label>
                    <input type="text" id="estado_otro" name="estado_otro" disabled />
                </div>
            </div>

            <!-- Cantidad -->
            <div class="form-group">
                <label for="cantidad">Cantidad</label>
                <input type="number" id="cantidad" name="cantidad" required />
            </div>

            <!-- Comentarios -->
            <div class="form-group">
                <label for="comentarios">Comentarios</label>
                <input type="text" id="comentarios" name="comentarios" />
            </div>

            <!-- Fecha E/S -->
            <div class="form-group">
                <label for="fecha_es">Fecha E/S</label>
                <input type="date" id="fecha_es" name="fecha_es" required />
            </div>

            <button type="submit" class="btn-submit">Enviar Pedido</button>
        </form>
    </div>
`;

// Función para mostrar u ocultar campos adicionales en función de la selección
function toggleOtherInput(selectId, inputId) {
    const select = document.getElementById(selectId);
    const input = document.getElementById(inputId);
    const selectedOption = select.options[select.selectedIndex].value;
    if (selectedOption === "Otros") {
        input.style.display = "block";
        input.querySelector('input').disabled = false;
    } else {
        input.style.display = "none";
        input.querySelector('input').value = ""; // Limpiar el campo de texto
        input.querySelector('input').disabled = true;
    }
}

// Inicializar el formulario de Pedido de Material Informático
function inicializarFormularioMaterial() {
    const form = document.getElementById("formularioMaterial");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evitar el envío del formulario por defecto

            // Obtener los datos del formulario y convertirlos en un objeto
            const formData = new FormData(form);
            const formObject = Object.fromEntries(formData);
            console.log("Datos del formulario de Pedido de Material Informático:", formObject);
        });
    }
}

// Asegurarse de que `window.forms` esté definido
window.forms = window.forms || {};

// Registro del formulario de Pedido de Material Informático
window.forms['formularioMaterial'] = {
    html: formularioMaterialHTML, // La constante con el HTML del formulario
    init: inicializarFormularioMaterial // La función de inicialización
};
