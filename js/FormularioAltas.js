// Definir los formularios disponibles en un objeto
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

// Función para inicializar el formulario de Altas
function inicializarFormularioAltas() {
  const form = document.getElementById("formularioAltas");
  if (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto

      // Aquí se pueden agregar validaciones o preparar los datos
      const formData = new FormData(form);
      const formObject = Object.fromEntries(formData);

      // Llamar a la función para enviar los datos a Power Automate
      await enviarDatosAPowerAutomate(formObject);
    });
  }
}

async function enviarDatosAPowerAutomate(formObject) {
  try {
    const response = await fetch('/php/guardarAltas.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject),
    });

    const responseText = await response.text();
    console.log('Respuesta del servidor:', responseText);

    const result = JSON.parse(responseText);
    if (result.status === 'success') {
      alert('Datos almacenados correctamente');
    } else {
      alert('Error al almacenar los datos: ' + result.message);
    }
  } catch (error) {
    console.error('Error al enviar los datos:', error);
    alert('Error al enviar los datos. Revisa la consola para más detalles.');
  }
}

// Asegúrate de que `window.forms` esté definido
window.forms = window.forms || {};

// Registro del formulario de Altas
window.forms["formularioAltas"] = {
  html: formularioAltasHTML, // La constante con el HTML del formulario
  init: inicializarFormularioAltas, // La función de inicialización
};


