// HTML para el formulario de Reparación de Vehículos (Taller)
const formularioReparacionHTML = `
    <h1>Formulario de Reparación de Vehículos</h1>
    <form id="reparacionForm" class="form-reparacion">
        <label for="mecanico">Mecánico</label><br>
        <select id="mecanico" name="mecanico" class="uppercase" required>
            <option value="" disabled selected>Selecciona un mecánico</option>
            <option value="FRANCISCO">FRANCISCO</option>
            <option value="ALVARO">ALVARO</option>
            <option value="JOSE RAMON">JOSE RAMON</option>
            <option value="JOSE NIETO">JOSE NIETO</option>
            <option value="SANTIAGO">SANTIAGO</option>
            <option value="DANIEL">DANIEL</option>
            <option value="CARLOS">CARLOS</option>
        </select><br><br>

        <label for="inicio">Inicio de reparación (fecha y hora)</label><br>
        <input type="datetime-local" id="inicio" name="inicio" required><br><br>

        <label for="fin">Fin de reparación (fecha y hora)</label><br>
        <input type="datetime-local" id="fin" name="fin" required><br><br>

        <label for="matricula">Matrícula</label><br>
        <input type="text" id="matricula" name="matricula" class="uppercase" required><br><br>

        <label for="km_entrada">Kilómetros actuales del vehículo (entrada)</label><br>
        <input type="number" id="km_entrada" name="km_entrada" min="0" max="999999" pattern="\d*" required><br><br>

        <label for="km_final">Kilómetros finales (salida)</label><br>
        <input type="number" id="km_final" name="km_final" min="0" max="999999" pattern="\d*" required><br><br>

        <label for="tareas">Tareas realizadas en el vehículo</label><br>
        <textarea id="tareas" name="tareas" class="uppercase" required></textarea><br><br>

        <label for="recambios">Recambios utilizados</label><br>
        <textarea id="recambios" name="recambios" class="uppercase" required></textarea><br><br>

        <label for="observaciones">Observaciones</label><br>
        <textarea id="observaciones" name="observaciones" class="uppercase" required></textarea><br><br>

        <button type="submit" class="submit-btn">Enviar</button>
    </form>
    <div id="loading-indicator" style="display:none;">Enviando datos...</div>
`;

// Función para inicializar el formulario de Reparación de Vehículos (Taller)
function inicializarFormularioReparacion() {
  const formElement = document.getElementById("reparacionForm");
  if (formElement) {
    console.log("Inicializando formulario de Reparación de Vehículos...");

    const kmEntradaInput = document.getElementById("km_entrada");
    const kmFinalInput = document.getElementById("km_final");

    // Sincronizar el valor de los kilómetros de entrada con los de salida
    kmEntradaInput.addEventListener("input", function () {
      kmFinalInput.value = this.value;
    });

    formElement.reset(); // Restablecer el formulario
  }
}

// Función para enviar los datos a Power Automate
async function enviarDatosPowerAutomate(formData) {
  console.log("Enviando datos a Power Automate");

  // Mostrar el indicador de carga
  document.getElementById("loading-indicator").style.display = "block";

  // Crear el objeto payload con los campos correctos
  const payload = {
    Mecanico: formData.mecanico,
    InicioReparacion: new Date(formData.inicio).toISOString(),
    FinReparacion: new Date(formData.fin).toISOString(),
    Matricula: formData.matricula,
    KmEntrada: parseInt(formData.km_entrada),
    KmFinal: parseInt(formData.km_final),
    Tareas: formData.tareas,
    Recambios: formData.recambios,
    Observaciones: formData.observaciones,
  };

  // Validación de campos adicionales
  if (payload.KmFinal < payload.KmEntrada) {
    alert(
      "Los kilómetros finales no pueden ser menores que los kilómetros de entrada."
    );
    document.getElementById("loading-indicator").style.display = "none";
    return;
  }

  // Validar fechas
  const inicioDate = new Date(payload.InicioReparacion);
  const finDate = new Date(payload.FinReparacion);
  if (finDate <= inicioDate) {
    alert("La fecha de fin debe ser posterior a la fecha de inicio.");
    document.getElementById("loading-indicator").style.display = "none";
    return;
  }

  // Validación de que todos los campos obligatorios estén completos
  for (const key in payload) {
    if (
      payload[key] === "" ||
      (isNaN(payload[key]) &&
        key !== "Tareas" &&
        key !== "Recambios" &&
        key !== "Observaciones")
    ) {
      alert(`Por favor, completa el campo: ${key}`);
      document.getElementById("loading-indicator").style.display = "none";
      return;
    }
  }

  console.log("Datos enviados:", payload);

  try {
    const response = await fetch(powerAutomateUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Error al enviar los datos a Power Automate");
    }

    const responseData = await response.json();
    console.log("Respuesta de Power Automate:", responseData);

    alert("Formulario enviado con éxito.");
  } catch (error) {
    console.error("Error al enviar los datos a Power Automate:", error);
    alert("Hubo un error al enviar los datos.");
  } finally {
    document.getElementById("loading-indicator").style.display = "none";
  }
}

// Función para manejar el envío del formulario
function manejarFormularioReparacion(event) {
  event.preventDefault(); // Evita el envío por defecto del formulario

  const formElement = document.getElementById("reparacionForm");
  const formData = new FormData(formElement);
  const formObject = Object.fromEntries(formData);

  console.log("Datos del formulario:", formObject);

  // Enviar los datos a Power Automate
  enviarDatosPowerAutomate(formObject);

  // Limpiar el formulario después de enviar los datos
  formElement.reset();
}

// Función para cargar el formulario de Reparación (Taller)
function cargarFormularioReparacion() {
  const formContainer = document.getElementById("form-container");
  if (!formContainer) {
    console.error("Contenedor de formulario no encontrado.");
    return;
  }

  formContainer.innerHTML = ""; // Limpiar el contenedor
  formContainer.insertAdjacentHTML("beforeend", formularioReparacionHTML); // Insertar el formulario
  inicializarFormularioReparacion(); // Inicializar el formulario
}

// Función para inicializar los eventos del formulario
document.addEventListener("DOMContentLoaded", () => {
  const btnFormularioReparacion = document.getElementById(
    "btnFormularioReparacion"
  );
  const formContainer = document.getElementById("form-container");

  // Cargar el formulario al hacer clic en el botón
  if (btnFormularioReparacion) {
    btnFormularioReparacion.addEventListener("click", function () {
      cargarFormularioReparacion();
    });
  }

  // Enviar el formulario de Reparación
  formContainer.addEventListener("submit", function (event) {
    if (event.target.id === "reparacionForm") {
      manejarFormularioReparacion(event);
    }
  });
});
