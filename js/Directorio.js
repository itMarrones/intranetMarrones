// Definir el HTML del directorio de empleados
const directorioEmpleadosHTML = `
<h1>Directorio de Empleados</h1>
<div>
    <div class="search-box">
        <input type="text" id="search" placeholder="Buscar empleados...">
        <button class="search-icon" style="padding-bottom: 26px;">
            <i class="fas fa-search"></i> <!-- Icono de lupa -->
        </button>
    </div>
    <table id="employee-table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Ext. Móvil</th>
                <th>Teléfono</th>
                <th>Ext. Fijo</th>
                <th>Correo Electrónico</th>
                <th>Departamento</th>
                <th>
                    <button id="filter-button" class="filter-button">
                        Sede <i class="fas fa-filter"></i>
                    </button>
                    <div id="filter-menu" class="filter-menu">
                        <label for="filtroSede">Filtrar por Sede:</label>
                        <select id="filtroSede" class="header-filter">
                            <option value="">Filtrar</option>
                            <!-- Las opciones se llenarán dinámicamente -->
                        </select>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody id="employee-list"></tbody>
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
const filasPorPagina = 10; // Máximo de filas por página

// Función para cargar los empleados
function cargarEmpleados(searchTerm = "", filtroSede = "") {
  fetch(`/php/empleados.php?search=${encodeURIComponent(searchTerm)}`) // Obtener todos los empleados con búsqueda
    .then((response) => response.json()) // Convertir la respuesta en JSON
    .then((data) => {
      console.log("Datos recibidos:", data); // Log para ver qué datos estamos recibiendo
      const employeeList = document.getElementById("employee-list");
      employeeList.innerHTML = ""; // Limpiar cualquier contenido previo

      // Verificar si se obtuvieron empleados
      if (data.empleados && data.empleados.length > 0) {
        // Filtrar por el término de búsqueda y el filtro de "Sede"
        const empleadosFiltrados = data.empleados.filter((empleado) => {
          const match =
            (empleado.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
              empleado.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
              empleado.correo_electronico.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (filtroSede === "" || empleado.sede === filtroSede);

          console.log(empleado.nombre, empleado.apellido, match); // Verifica qué empleados están siendo filtrados
          return match;
        });

        console.log("Empleados filtrados:", empleadosFiltrados); // Log para ver los empleados filtrados

        // Ordenar empleados por departamento y alfabéticamente
        empleadosFiltrados.sort((a, b) => {
          if (a.departamento === b.departamento) {
            return a.nombre.localeCompare(b.nombre);
          }
          return a.departamento.localeCompare(b.departamento);
        });

        // Agrupar empleados por departamento (esto no afecta la paginación)
        const departamentos = {};
        empleadosFiltrados.forEach((empleado) => {
          if (!departamentos[empleado.departamento]) {
            departamentos[empleado.departamento] = [];
          }
          departamentos[empleado.departamento].push(empleado);
        });

        // Ordenar departamentos alfabéticamente
        const departamentosOrdenados = Object.keys(departamentos).sort();

        // Aplanar la lista de empleados (sin tener en cuenta los departamentos)
        const empleadosAplanados = empleadosFiltrados;

        // Separar los empleados en páginas de 10
        const empleadosPaginados = [];
        for (let i = 0; i < empleadosAplanados.length; i += filasPorPagina) {
          empleadosPaginados.push(
            empleadosAplanados.slice(i, i + filasPorPagina)
          );
        }

        totalPaginas = empleadosPaginados.length;

        // Mostrar la página actual
        mostrarPagina(paginaActual, empleadosPaginados);

        // Configurar los botones de paginación
        configurarBotonesPaginacion(empleadosPaginados);

        // Llenar el select de filtro de sede
        llenarFiltroSede(data.empleados);
      } else {
        console.log("No se encontraron empleados");
      }
    })
    .catch((error) => console.error("Error al cargar empleados:", error));
}

// Función para llenar el select de filtro de sede
function llenarFiltroSede(empleados) {
  const filtroSede = document.getElementById("filtroSede");
  if (!filtroSede) return;

  // Obtener las sedes únicas
  const sedesUnicas = [...new Set(empleados.map((empleado) => empleado.sede))].sort();

  // Limpiar el select antes de llenarlo
  filtroSede.innerHTML = '<option value="">Filtrar</option>';

  // Añadir las opciones de sede al select
  sedesUnicas.forEach((sede) => {
    const option = document.createElement("option");
    option.value = sede;
    option.textContent = sede;
    filtroSede.appendChild(option);
  });
}

// Función para mostrar una página específica
function mostrarPagina(pagina, empleadosPaginados) {
  const employeeList = document.getElementById("employee-list");
  employeeList.innerHTML = ""; // Limpiar cualquier contenido previo

  const paginaEmpleados = empleadosPaginados[pagina - 1];
  paginaEmpleados.forEach((empleado) => {
    const employeeItem = document.createElement("tr");
    employeeItem.classList.add("employee-item");
    employeeItem.innerHTML = `
      <td class="name">${empleado.nombre || "-"}</td>
      <td class="surname">${empleado.apellido || "-"}</td>
      <td class="mobile">${empleado.ext_movil || "-"}</td>
      <td class="phone">${empleado.movil || "-"}</td>
      <td class="fixed-phone">${empleado.ext_fijo || "-"}</td>
      <td class="email">${empleado.correo_electronico || "-"}</td>
      <td class="position">${empleado.departamento || "-"}</td>
      <td class="sede">${empleado.sede || "-"}</td>
    `;
    employeeList.appendChild(employeeItem); // Añadir la fila al cuerpo de la tabla
  });

  const pageNumberElement = document.getElementById("pageNumber");
  if (pageNumberElement) {
    pageNumberElement.textContent = pagina;
  }
}

// Función para configurar los botones de paginación
function configurarBotonesPaginacion(empleadosPaginados) {
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
        mostrarPagina(paginaActual, empleadosPaginados);
        configurarBotonesPaginacion(empleadosPaginados); // Actualizar los botones de paginación
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
        mostrarPagina(paginaActual, empleadosPaginados);
        configurarBotonesPaginacion(empleadosPaginados); // Actualizar los botones de paginación
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
      mostrarPagina(paginaActual, empleadosPaginados);
      configurarBotonesPaginacion(empleadosPaginados); // Actualizar los botones de paginación
    });
    paginationContainer.appendChild(pageButton);
  }
}

// Función para inicializar el directorio
function inicializarDirectorio() {
  const searchInput = document.getElementById("search");
  const filtroSede = document.getElementById("filtroSede");

  if (searchInput) {
    searchInput.value = ""; // Limpiar cualquier valor previo
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      const filtroSedeValue = filtroSede.value;
      cargarEmpleados(searchTerm, filtroSedeValue); // Cargar empleados con el término de búsqueda y el filtro de sede
    });
  }

  if (filtroSede) {
    filtroSede.addEventListener("change", function () {
      const filtroSedeValue = this.value;
      const searchTerm = searchInput.value.toLowerCase();
      cargarEmpleados(searchTerm, filtroSedeValue); // Cargar empleados con el término de búsqueda y el filtro de sede
    });
  }

  cargarEmpleados(); // Cargar todos los empleados
}

// Función para cargar el directorio de empleados
function cargarDirectorio() {
  const contentContainer = document.getElementById("form-container");
  if (contentContainer) {
    console.log("Cargando directorio...");
    contentContainer.innerHTML = directorioEmpleadosHTML; // Usar directorioEmpleados
    inicializarDirectorio(); // Inicializamos el directorio
  } else {
    console.error("Contenedor no encontrado");
  }
}

// Función de inicialización para el directorio
window.forms = window.forms || {};
window.forms["directorioEmpleados"] = {
  html: directorioEmpleadosHTML,
  init: inicializarDirectorio,
};

// Unificación de los eventos DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  const btnFormDirectorio = document.getElementById("btnFormDirectorio");
  if (btnFormDirectorio) {
    btnFormDirectorio.addEventListener("click", function () {
      cargarDirectorio(); // Llamar a la función para cargar el directorio
    });
  }

  const filterButton = document.getElementById("filter-button");
  const filterMenu = document.getElementById("filter-menu");

  if (filterButton && filterMenu) {
    filterButton.addEventListener("click", function (event) {
      event.stopPropagation(); // Evitar que el evento se propague
      filterMenu.style.display = filterMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
      if (!filterButton.contains(event.target) && !filterMenu.contains(event.target)) {
        filterMenu.style.display = "none";
      }
    });
  }
});
