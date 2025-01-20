// Definir el HTML del directorio de empleados
const directorioEmpleadosHTML = `
<h1>Directorio de Empleados</h1>
<div>
    <input type="text" id="search" placeholder="Buscar empleados...">
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
                <th>Sede</th>
            </tr>
        </thead>
        <tbody id="employee-list"></tbody>
    </table>
    
    <!-- Paginación: Botones de "Anterior" y "Siguiente" -->
    <div>
        <button id="btnAnterior">Anterior</button>
        <button id="btnSiguiente">Siguiente</button>
    </div>
</div>
`;

let paginaActual = 1;  // Página inicial
let totalPaginas = 1;  // Total de páginas (inicializado con 1)

// Función para cargar los empleados con paginación
function cargarEmpleados(pagina) {
    fetch(`/PHP/empleados.php?pagina=${pagina}`)  // Pasar el parámetro de página
        .then(response => response.json())  // Convertir la respuesta en JSON
        .then(data => {
            console.log('Datos recibidos:', data);  // Log para ver qué datos estamos recibiendo
            const employeeList = document.getElementById('employee-list');
            employeeList.innerHTML = '';  // Limpiar cualquier contenido previo

            // Verificar si se obtuvieron empleados
            if (data.empleados && data.empleados.length > 0) {
                data.empleados.forEach(empleado => {
                    const employeeItem = document.createElement('tr');
                    employeeItem.classList.add('employee-item');
                    employeeItem.innerHTML = `
                        <td class="name">${empleado.nombre}</td>
                        <td class="surname">${empleado.apellido}</td>
                        <td class="mobile">${empleado.ext_movil}</td>
                        <td class="phone">${empleado.movil}</td>
                        <td class="fixed-phone">${empleado.ext_fijo}</td>
                        <td class="email">${empleado.correo_electronico}</td>
                        <td class="position">${empleado.departamento}</td>
                        <td class="sede">${empleado.sede}</td>
                    `;
                    employeeList.appendChild(employeeItem);  // Añadir la fila al cuerpo de la tabla
                });

                // Inicializar la búsqueda después de cargar los empleados
                inicializarBusquedaDirectorio();

                // Habilitar o deshabilitar los botones de navegación
                totalPaginas = data.total_paginas || 1;  // Actualizar total de páginas
                configurarBotonesPaginacion(pagina);
            } else {
                console.log('No se encontraron empleados');
            }
        })
        .catch(error => console.error('Error al cargar empleados:', error));
}

// Función para configurar los botones de "Siguiente" y "Anterior"
function configurarBotonesPaginacion(pagina) {
    const btnAnterior = document.getElementById('btnAnterior');
    const btnSiguiente = document.getElementById('btnSiguiente');

    // Deshabilitar el botón "Anterior" si estamos en la primera página
    if (pagina <= 1) {
        btnAnterior.disabled = true;
    } else {
        btnAnterior.disabled = false;
    }

    // Deshabilitar el botón "Siguiente" si estamos en la última página
    if (pagina >= totalPaginas) {
        btnSiguiente.disabled = true;
    } else {
        btnSiguiente.disabled = false;
    }
}

// Función para inicializar el directorio
function inicializarDirectorio() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.value = ''; // Limpiar cualquier valor previo
    }
    cargarEmpleados(paginaActual);  // Cargar los empleados para la página actual
}

// Función para cargar el directorio de empleados
function cargarDirectorio() {
    const contentContainer = document.getElementById('form-container');
    if (contentContainer) {
        console.log('Cargando directorio...');
        contentContainer.innerHTML = directorioEmpleadosHTML; // Usar directorioEmpleados
        inicializarDirectorio(); // Inicializamos el directorio
    } else {
        console.error('Contenedor no encontrado');
    }
}

// Función de inicialización para el directorio
window.forms = window.forms || {};
window.forms['directorioEmpleados'] = {
    html: directorioEmpleadosHTML,
    init: inicializarDirectorio
};

// Unificación de los eventos DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        initializeSidebar();
    }, 50);

    const btnFormDirectorio = document.getElementById('btnFormDirectorio');
    if (btnFormDirectorio) {
        btnFormDirectorio.addEventListener('click', function () {
            loadForm('directorioEmpleados');  // Llamar a la función para cargar el directorio
        });
    }

    // Evento de click en el botón "Anterior"
    document.getElementById('btnAnterior').addEventListener('click', () => {
        if (paginaActual > 1) {
            paginaActual--;
            cargarEmpleados(paginaActual);
        }
    });

    // Evento de click en el botón "Siguiente"
    document.getElementById('btnSiguiente').addEventListener('click', () => {
        if (paginaActual < totalPaginas) {
            paginaActual++;
            cargarEmpleados(paginaActual);
        }
    });
});

// Función para inicializar la búsqueda del directorio
function inicializarBusquedaDirectorio() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase();
            const employeeItems = document.querySelectorAll('.employee-item');

            employeeItems.forEach(item => {
                const name = item.querySelector('.name').textContent.toLowerCase();
                const email = item.querySelector('.email').textContent.toLowerCase();
                const mobile = item.querySelector('.mobile').textContent.toLowerCase();
                const position = item.querySelector('.position').textContent.toLowerCase();
                const sede = item.querySelector('.sede').textContent.toLowerCase();

                if (name.includes(searchTerm) || email.includes(searchTerm) || mobile.includes(searchTerm) || position.includes(searchTerm) || sede.includes(searchTerm)) {
                    item.style.display = 'table-row';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
}