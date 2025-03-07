// Formulario Industrial
const formularioIndustrialHTML = `
    <h1>Formulario Industrial</h1>
    <form id="filter-form">
          <!-- Municipio -->
        <label for="municipio">Municipio:</label>
        <select id="municipio" name="municipio">
            <option value="">Selecciona un Municipio</option>
        </select>
        <br>

        <!-- Razón Social -->
        <label for="razonSocial">Razón Social:</label>
        <select id="razonSocial" name="razonSocial" disabled>
            <option value="">Selecciona una Razón Social</option>
        </select>
        <br>

        <!-- Código Cliente -->
        <label for="codigoCliente">Código Cliente:</label>
        <select id="codigoCliente" name="codigoCliente" disabled>
            <option value="">Selecciona un Código Cliente</option>
        </select>
        <br>

        <!-- Vía Pública -->
        <label for="viaPublica">Vía Pública:</label>
        <select id="viaPublica" name="viaPublica" disabled>
            <option value="">Selecciona una Vía Pública</option>
        </select>
        <br>

        <!-- Exterior Accesible -->
        <label for="exteriorAccessible">Exterior Accesible:</label>
        <select id="exteriorAccessible" name="exteriorAccessible">
            <option value="">Selecciona una opción</option>
            <option value="SI">Sí</option>
            <option value="NO">No</option>
        </select>
        <br>

        <button type="submit" class="submit-btn">Enviar</button>
    </form>
`;

// Función para inicializar el formulario Industrial
function inicializarFormularioIndustrial() {
  const formElement = document.getElementById("filter-form");

  // Manejo del envío del formulario
  formElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const formObject = Object.fromEntries(formData);
    console.log("Formulario Industrial enviado:", formObject);

    // Llamada a la función para actualizar el valor de exteriorAccesible en la base de datos
    await actualizarExteriorAccesible(formObject);

    // Limpiar el formulario después de enviarlo
    limpiarFormulario(formElement);
  });

  // Llamada para cargar los datos dinámicamente en los selects
  populateSelects();
}

// Función para cargar los datos en los selects
async function populateSelects() {
  const municipioSelect = document.getElementById("municipio");
  const razonSocialSelect = document.getElementById("razonSocial");
  const codigoClienteSelect = document.getElementById("codigoCliente");
  const viaPublicaSelect = document.getElementById("viaPublica");
  const exteriorAccessibleSelect =
    document.getElementById("exteriorAccessible");

  // Limpiar los selects antes de llenarlos
  municipioSelect.innerHTML =
    '<option value="">Selecciona un Municipio</option>';
  razonSocialSelect.innerHTML =
    '<option value="">Selecciona una Razón Social</option>';
  codigoClienteSelect.innerHTML =
    '<option value="">Selecciona un Código Cliente</option>';
  viaPublicaSelect.innerHTML =
    '<option value="">Selecciona una Vía Pública</option>';
  exteriorAccessibleSelect.innerHTML =
    '<option value="">Selecciona una opción</option>';

  try {
    // Fetch de la base de datos para obtener los datos de los clientes
    const response = await fetch("/php/obtenerClientes.php");
    const text = await response.text();
    const data = JSON.parse(text);

    // Acceder a los clientes dentro de la propiedad 'data'
    const clientes = data.data;

    // Verificar que la respuesta es un array
    if (!Array.isArray(clientes)) {
      console.error("La respuesta no es un array", clientes);
      return;
    }

    // Filtrar clientes para incluir solo aquellos con exteriorAccesible como null o cadena vacía
    const clientesFiltrados = clientes.filter(
      (item) => item.EXTERIORACCESIBLE === null || item.EXTERIORACCESIBLE === ""
    );

    // Filtrar municipios para eliminar duplicados y ordenar alfabéticamente
    const municipiosUnicos = [
      ...new Set(clientesFiltrados.map((item) => item.MUNICIPIO)),
    ].sort(); // Ordenar alfabéticamente

    // Rellenar el select de municipios con los valores únicos y ordenados
    municipiosUnicos.forEach((municipio) => {
      const municipioOption = document.createElement("option");
      municipioOption.value = municipio;
      municipioOption.textContent = municipio;
      municipioSelect.appendChild(municipioOption);
    });

    // Rellenar los selects de Razón Social dependiendo del municipio seleccionado
    municipioSelect.addEventListener("change", (e) => {
      const selectedMunicipio = e.target.value;
      const filteredData = clientesFiltrados.filter(
        (item) => item.MUNICIPIO === selectedMunicipio
      );

      // Limpiar los selects
      razonSocialSelect.innerHTML =
        '<option value="">Selecciona una Razón Social</option>';
      codigoClienteSelect.innerHTML =
        '<option value="">Selecciona un Código Cliente</option>';
      viaPublicaSelect.innerHTML =
        '<option value="">Selecciona una Vía Pública</option>';

      // Ordenar las opciones de Razón Social alfabéticamente
      const razonSocialUnicas = [
        ...new Set(filteredData.map((item) => item.RAZONSOCIAL)),
      ].sort(); // Ordenar Razón Social alfabéticamente

      razonSocialUnicas.forEach((razonSocial) => {
        const razonSocialOption = document.createElement("option");
        razonSocialOption.value = razonSocial;
        razonSocialOption.textContent = razonSocial;
        razonSocialSelect.appendChild(razonSocialOption);
      });

      // Habilitar el select de Razón Social
      razonSocialSelect.disabled = false;
    });

    // Rellenar los selects de Código Cliente y Vía Pública automáticamente dependiendo de la razón social seleccionada
    razonSocialSelect.addEventListener("change", (e) => {
      const selectedRazonSocial = e.target.value;
      const filteredData = clientesFiltrados.filter(
        (item) => item.RAZONSOCIAL === selectedRazonSocial
      );

      // Limpiar los selects de Código Cliente y Vía Pública
      codigoClienteSelect.innerHTML =
        '<option value="">Selecciona un Código Cliente</option>';
      viaPublicaSelect.innerHTML =
        '<option value="">Selecciona una Vía Pública</option>';

      // Ordenar las opciones de Código Cliente y Vía Pública alfabéticamente
      const codigosClientesUnicos = [
        ...new Set(filteredData.map((item) => item.CODIGOCLIENTE)),
      ].sort(); // Ordenar Código Cliente alfabéticamente

      const viasPublicasUnicas = [
        ...new Set(filteredData.map((item) => item.VIAPUBLICA)),
      ].sort(); // Ordenar Vía Pública alfabéticamente

      // Añadir las opciones ordenadas a los selects
      codigosClientesUnicos.forEach((codigoCliente) => {
        const codigoClienteOption = document.createElement("option");
        codigoClienteOption.value = codigoCliente;
        codigoClienteOption.textContent = codigoCliente;
        codigoClienteSelect.appendChild(codigoClienteOption);
      });

      viasPublicasUnicas.forEach((viaPublica) => {
        const viaPublicaOption = document.createElement("option");
        viaPublicaOption.value = viaPublica;
        viaPublicaOption.textContent = viaPublica;
        viaPublicaSelect.appendChild(viaPublicaOption);
      });

      // Habilitar los selects de Código Cliente y Vía Pública
      codigoClienteSelect.disabled = false;
      viaPublicaSelect.disabled = false;
    });

    // Agregar las opciones para Exterior Accesible
    const exteriorAccesibleOptions = ["Sí", "No"];
    exteriorAccesibleOptions.sort(); // Ordenar alfabéticamente
    exteriorAccesibleOptions.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option === "Sí" ? "SI" : "NO";
      optionElement.textContent = option;
      exteriorAccessibleSelect.appendChild(optionElement);
    });

    // Habilitar el select de Exterior Accesible
    exteriorAccessibleSelect.disabled = false;
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
}

// Función para actualizar el valor de exteriorAccesible en la base de datos
async function actualizarExteriorAccesible(formData) {
  const clienteId = formData.codigoCliente;
  const exteriorAccesible = formData.exteriorAccessible;

  try {
    const response = await fetch("/php/actualizarExterior.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clienteId: clienteId,
        exteriorAccesible: exteriorAccesible,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Datos actualizados correctamente:", result);
      alert("Datos actualizados correctamente");
    } else {
      console.error("Error al actualizar los datos:", response.statusText);
      alert("Error al actualizar los datos en la base de datos.");
    }
  } catch (error) {
    console.error("Error al actualizar los datos:", error);
    alert("Ocurrió un error al intentar actualizar los datos.");
  }
}

// Función para limpiar el formulario
function limpiarFormulario(formElement) {
  formElement.reset();
  document.getElementById("razonSocial").disabled = true;
  document.getElementById("codigoCliente").disabled = true;
  document.getElementById("viaPublica").disabled = true;
}

// Registrar el formulario
window.forms = window.forms || {};
window.forms["formularioIndustrial"] = {
  html: formularioIndustrialHTML,
  init: inicializarFormularioIndustrial,
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formularioIndustrial");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevenir el envío por defecto del formulario

      const formData = new FormData(form); // Captura los datos del formulario
      const formObject = Object.fromEntries(formData); // Convertir los datos a un objeto

      // Llamar a la función para enviar los datos a Power Automate
      await enviarDatosAPowerAutomate(formObject);
    });
  }
});
