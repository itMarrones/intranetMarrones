// Definir el HTML
const resultadosHTML = `
<h1>Resultado Formulario Industrial</h1>
<div>
    <div class="search-box">
        <input type="text" id="search" placeholder="Buscar razones sociales...">
        <button class="search-icon" style="padding-bottom: 26px;">
            <i class="fas fa-search"></i> <!-- Icono de lupa -->
        </button>
    </div>
    <table id="employee-table">
        <thead>
            <tr>
                <th>Municipio</th>
                <th>Razón Social</th>
                <th>Código Cliente</th>
                <th>Vía Pública</th>
                <th>
                    Exterior Accesible
                    <select id="filtroExteriorAccesible" class="header-filter">
                        <option value="">Filtrar</option>
                        <option value="SI">Sí</option>
                        <option value="NO">No</option>
                        <option value="-">-</option>
                    </select>
                </th>
            </tr>
        </thead>
        <tbody id="resultados-list"></tbody>
    </table>
    <div class="pagination" id="pagination-container">
        <button id="btnAnterior" class="pagination-button">Anterior</button>
        <span id="pageNumber" class="page-number">1</span>
        <button id="btnSiguiente" class="pagination-button">Siguiente</button>
    </div>
</div>
`;

let paginaActual = 1; // Página inicial
let totalPaginas = 1; // Total de páginas (inicializado con 1)
const filasPorPagina = 150; // Máximo de filas por página

// Función para cargar los resultados
function cargarResultados(searchTerm = "", filtroExterior = "") {
  fetch(
    `/php/obtenerResultados.php?search=${encodeURIComponent(
      searchTerm
    )}`
  ) // Obtener resultados con búsqueda
    .then((response) => response.json()) // Convertir la respuesta en JSON
    .then((data) => {
      console.log("Datos recibidos:", data); // Log para ver qué datos estamos recibiendo
      const resultadosList = document.getElementById("resultados-list");
      resultadosList.innerHTML = ""; // Limpiar cualquier contenido previo

      // Verificar si se obtuvieron resultados
      if (data.status === "success" && data.data.length > 0) {
        // Filtrar por el término de búsqueda y el filtro de "Exterior Accesible"
        const resultadosFiltrados = data.data.filter((resultado) => {
          const exteriorAccesible = resultado.EXTERIORACCESIBLE === null ? "-" : (resultado.EXTERIORACCESIBLE === "SI" ? "Sí" : "No");
          const match =
            (resultado.RAZONSOCIAL
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
              resultado.CODIGOCLIENTE
                .toLowerCase()
                .includes(searchTerm.toLowerCase())) &&
            (filtroExterior === "" ||
              (filtroExterior === "SI" && resultado.EXTERIORACCESIBLE === "SI") ||
              (filtroExterior === "NO" && resultado.EXTERIORACCESIBLE === "NO") ||
              (filtroExterior === "-" && resultado.EXTERIORACCESIBLE === null));

          console.log(resultado.RAZONSOCIAL, resultado.CODIGOCLIENTE, match); // Verifica qué resultados están siendo filtrados
          return match;
        });

        console.log("Resultados filtrados:", resultadosFiltrados); // Log para ver los resultados filtrados

        // Ordenar resultados alfabéticamente por municipio
        resultadosFiltrados.sort((a, b) =>
          a.MUNICIPIO.localeCompare(b.MUNICIPIO)
        );

        // Separar los resultados en páginas de 150
        const resultadosPaginados = [];
        for (let i = 0; i < resultadosFiltrados.length; i += filasPorPagina) {
          resultadosPaginados.push(
            resultadosFiltrados.slice(i, i + filasPorPagina)
          );
        }

        totalPaginas = resultadosPaginados.length;

        // Mostrar la página actual
        mostrarPagina(paginaActual, resultadosPaginados);

        // Configurar los botones de paginación
        configurarBotonesPaginacion(resultadosPaginados);
      } else {
        console.log("No se encontraron resultados");
      }
    })
    .catch((error) => console.error("Error al cargar resultados:", error));
}

// Función para mostrar una página específica
function mostrarPagina(pagina, resultadosPaginados) {
  const resultadosList = document.getElementById("resultados-list");
  resultadosList.innerHTML = ""; // Limpiar cualquier contenido previo

  const paginaResultados = resultadosPaginados[pagina - 1];
  paginaResultados.forEach((resultado) => {
    const exteriorAccesible = resultado.EXTERIORACCESIBLE === null ? "-" : (resultado.EXTERIORACCESIBLE === "SI" ? "Sí" : "No");
    const resultadoItem = document.createElement("tr");
    resultadoItem.classList.add("resultado-item");
    resultadoItem.innerHTML = `
      <td class="municipio">${resultado.MUNICIPIO || "-"}</td>
      <td class="razonSocial">${resultado.RAZONSOCIAL || "-"}</td>
      <td class="codigoCliente">${resultado.CODIGOCLIENTE || "-"}</td>
      <td class="viaPublica">${resultado.VIAPUBLICA || "-"}</td>
      <td class="exteriorAccesible">${exteriorAccesible}</td>
    `;
    resultadosList.appendChild(resultadoItem); // Añadir la fila al cuerpo de la tabla
  });

  const pageNumberElement = document.getElementById("pageNumber");
  if (pageNumberElement) {
    pageNumberElement.textContent = pagina;
  }
}

// Función para configurar los botones de paginación
function configurarBotonesPaginacion(resultadosPaginados) {
  const paginationContainer = document.getElementById("pagination-container");
  if (!paginationContainer) return; // Si no existe el contenedor de paginación, salir

  // Limpiar cualquier contenido previo
  paginationContainer.innerHTML = "";

  // Botón anterior
  const btnAnterior = document.getElementById("btnAnterior");
  if (btnAnterior) {
    btnAnterior.disabled = paginaActual === 1; // Deshabilitar el botón si estamos en la primera página
    btnAnterior.addEventListener("click", () => {
      if (paginaActual > 1) {
        paginaActual--;
        mostrarPagina(paginaActual, resultadosPaginados);
        configurarBotonesPaginacion(resultadosPaginados); // Actualizar los botones de paginación
      }
    });
  }

  // Botón siguiente
  const btnSiguiente = document.getElementById("btnSiguiente");
  if (btnSiguiente) {
    btnSiguiente.disabled = paginaActual === totalPaginas; // Deshabilitar el botón si estamos en la última página
    btnSiguiente.addEventListener("click", () => {
      if (paginaActual < totalPaginas) {
        paginaActual++;
        mostrarPagina(paginaActual, resultadosPaginados);
        configurarBotonesPaginacion(resultadosPaginados); // Actualizar los botones de paginación
      }
    });
  }

  // Botones de página
  for (let i = 1; i <= totalPaginas; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.classList.add("pagination-button");
    if (i === paginaActual) {
      pageButton.classList.add("active");
    }
    pageButton.addEventListener("click", () => {
      paginaActual = i;
      mostrarPagina(paginaActual, resultadosPaginados);
      configurarBotonesPaginacion(resultadosPaginados); // Actualizar los botones de paginación
    });
    paginationContainer.appendChild(pageButton);
  }
}

// Función para inicializar el formulario de resultados
function inicializarFormulario() {
  const searchInput = document.getElementById("search");
  const filtroExteriorAccesible = document.getElementById("filtroExteriorAccesible");

  if (searchInput) {
    searchInput.value = ""; // Limpiar cualquier valor previo
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      const filtroExterior = filtroExteriorAccesible.value;
      cargarResultados(searchTerm, filtroExterior); // Cargar resultados con el término de búsqueda y el filtro
    });
  }

  if (filtroExteriorAccesible) {
    filtroExteriorAccesible.addEventListener("change", function () {
      const filtroExterior = this.value;
      const searchTerm = searchInput.value.toLowerCase();
      cargarResultados(searchTerm, filtroExterior); // Cargar resultados con el término de búsqueda y el filtro
    });
  }

  cargarResultados(); // Cargar todos los resultados
}

// Función de inicialización para el formulario
window.forms = window.forms || {};
window.forms["resultados"] = {
  html: resultadosHTML,
  init: inicializarFormulario,
};

// Unificación de los eventos DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  const btnFormResultados = document.getElementById("btnFormResultados");
  if (btnFormResultados) {
    btnFormResultados.addEventListener("click", function () {
      cargarFormularioResultados(); // Llamar a la función para cargar el formulario
    });
  }

  // Inicializar búsqueda
  const searchInput = document.getElementById("search");
  const filtroExteriorAccesible = document.getElementById("filtroExteriorAccesible");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value;
      const filtroExterior = filtroExteriorAccesible.value;
      cargarResultados(searchTerm, filtroExterior);
    });
  }

  if (filtroExteriorAccesible) {
    filtroExteriorAccesible.addEventListener("change", () => {
      const filtroExterior = filtroExteriorAccesible.value;
      const searchTerm = searchInput.value;
      cargarResultados(searchTerm, filtroExterior);
    });
  }

  // Cargar resultados inicialmente (sin filtro)
  cargarResultados();
});
