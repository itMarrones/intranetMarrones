// JSON de los formularios
const forms = {
    "formularioAltas": {
        "html": `
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
            </form>`
    },
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
            </form>`
    },
    "formularioIndustrial": {
        "html": `
        <h1>Formulario Industrial</h1>
        <form id="filter-form">
            <label for="municipio">Municipio:</label>
            <select id="municipio" name="municipio">
                <option value>Selecciona un Municipio</option>
            </select>

            <br>

            <label for="razonSocial">Razón Social:</label>
            <select id="razonSocial" name="razonSocial" disabled>
                <option value>Selecciona una Razón Social</option>
            </select>

            <br>

            <label for="codigoCliente">Código Cliente:</label>
            <select id="codigoCliente" name="codigoCliente" disabled>
                <option value>Selecciona un Código Cliente</option>
            </select>

            <br>

            <label for="viaPublica">Vía Pública:</label>
            <select id="viaPublica" name="viaPublica" disabled>
                <option value>Selecciona una Vía Pública</option>
            </select>

            <br>

            <label for="exteriorAccessible">Exterior Accesible:</label>
            <select id="exteriorAccessible" name="exteriorAccessible">
                <option value>Selecciona una opción</option>
                <option value="Si">Sí</option>
                <option value="No">No</option>
            </select>

            <br>

            <button type="submit">Enviar</button>
        </form>`
    },

    "directorioEmpleados": {
        "html": `
            <h1>Directorio de Empleados</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th>Departamento</th>
                        <th>Extensión</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Administrador Comercial</td>
                        <td>Ventas</td>
                        <td>101</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>Contabilidad</td>
                        <td>Finanzas</td>
                        <td>102</td>
                    </tr>
                    <tr>
                        <td>Robert Johnson</td>
                        <td>Marketing</td>
                        <td>Comercial</td>
                        <td>103</td>
                    </tr>
                </tbody>
            </table>`
    }
}

/// Funciones y lógica para la aplicación

// Función para cargar contenido en el contenedor principal
function loadContent(page) {
    const contentContainer = document.getElementById('contentContainer');

    // Limpiar contenido previo
    if (contentContainer) {
        contentContainer.innerHTML = ''; // Limpiar el contenedor

        // Verifica que el formulario exista en el objeto `forms`
        if (forms[page]) {
            contentContainer.innerHTML = forms[page].html;
        } else {
            contentContainer.innerHTML = '<h1>Contenido no encontrado</h1>';
        }
    }
}

// Lógica para la interacción de la barra lateral y el botón de expansión
function setupSidebarToggle() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');

    if (sidebar && toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            sidebar.classList.toggle('inactive');
            toggleBtn.classList.toggle('active');
            toggleBtn.innerHTML = sidebar.classList.contains('active') ? '&#8592;' : '&#8594;';
        });
    }
}

// Asignar listeners para cargar contenido de los formularios
function setupFormButtons() {
    const btnFormAltas = document.getElementById('btnFormAltas');
    const btnFormBajas = document.getElementById('btnFormBajas');
    const btnFormIndustrial = document.getElementById('btnFormIndustrial'); // Botón Industrial

    if (btnFormAltas) {
        btnFormAltas.addEventListener('click', function (event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            loadContent('formularioAltas');
        });
    }

    if (btnFormBajas) {
        btnFormBajas.addEventListener('click', function (event) {
            event.preventDefault();
            loadContent('formularioBajas');
        });
    }

    if (btnFormIndustrial) {
        btnFormIndustrial.addEventListener('click', function (event) {
            event.preventDefault();
            loadContent('formularioIndustrial'); // Cargar formulario Industrial
        });
    }
}
// Llamar a las funciones de configuración
setupFormButtons();

// Si seleccionan "No" para material, desmarcar todos los checkboxes
function setupMaterialCheckboxes() {
    const noMaterial = document.getElementById('noMaterial');
    const materialCheckboxes = document.querySelectorAll('input[name="material"]');

    if (noMaterial && materialCheckboxes) {
        noMaterial.addEventListener('change', () => {
            if (noMaterial.checked) {
                materialCheckboxes.forEach(checkbox => {
                    checkbox.checked = false; // Desmarcar todos los checkboxes
                });
                const otrosMaterialText = document.getElementById('otrosMaterialText');
                if (otrosMaterialText) {
                    otrosMaterialText.value = ''; // Limpiar el campo "Otros"
                }
            }
        });
    }
}

// Función para cargar empleados en la tabla
function loadEmployees() {
    const tbody = document.getElementById("employee-tbody");
    if (!tbody) return; // Verificar si la tabla existe

    tbody.innerHTML = ""; // Limpiar la tabla antes de cargar los datos

    // Asegúrate de que `window.employees` esté disponible
    const employees = window.employees || []; // Cambié a window.employees para evitar problemas con `this`

    employees.forEach(employee => {
        const row = document.createElement("tr");

        Object.values(employee).forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
}

// Función para filtrar la lista de empleados
function filterEmployees(event) {
    const searchTerm = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('#employee-tbody tr');

    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        const department = row.cells[1].textContent.toLowerCase();
        const sede = row.cells[6].textContent.toLowerCase();

        if (name.includes(searchTerm) || department.includes(searchTerm) || sede.includes(searchTerm)) {
            row.style.display = '';  // Mostrar la fila
        } else {
            row.style.display = 'none';  // Ocultar la fila
        }
    });
}

// Asignar el listener de búsqueda
function setupSearchListener() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', filterEmployees);
    }
}

// Llamar a las funciones al cargar la página
window.onload = function () {
    setupSidebarToggle();
    setupFormButtons();
    setupMaterialCheckboxes();
    setupSearchListener();
    loadEmployees(); // Cargar empleados al cargar la página
    setupIndustrialForm(); // Llamar a la configuración del formulario Industrial
};

const datos = [
    {
        "Municipio": "ABRERA",
        "RazonSocial": "ABRERA FOOD SERVICE, S.L.",
        "CodigoCliente": 12640,
        "ViaPublica": "CAMI SAGRAMENTS"
    },
    {
        "Municipio": "ABRERA",
        "RazonSocial": "ANDRES TORRIJOS BELTRAN",
        "CodigoCliente": 12719,
        "ViaPublica": "AVENIDA CA N'AMAT"
    },
    {
        "Municipio": "ABRERA",
        "RazonSocial": "NR MOBILITY SOLUTIONS, S.L.",
        "CodigoCliente": "00184",
        "ViaPublica": "CALLE PROGRES"
    }
];

// Función para llenar los municipios en el select
function llenarMunicipios() {
    var municipioSelect = document.getElementById('municipio');
    if (municipioSelect) {
        municipioSelect.innerHTML = 'Aquí pones el contenido o las opciones';
    } else {
        console.error("El elemento 'municipio' no se encuentra en el DOM");
    }
}


function llenarRazonSocial(municipioSeleccionado) {
    const razonSelect = document.getElementById('razonSocial');
    razonSelect.innerHTML = '<option value="">Selecciona una Razón Social</option>';
    razonSelect.disabled = !municipioSeleccionado; 

    console.log("Municipio seleccionado:", municipioSeleccionado); // Verificar el municipio seleccionado
    if (municipioSeleccionado) {
        const razones = [...new Set(datos.filter(item => item.Municipio === municipioSeleccionado).map(item => item.RazonSocial))];
        console.log("Razones Sociales:", razones); // Verificar las razones sociales
        razones.forEach(razonSocial => {
            const option = document.createElement('option');
            option.value = razonSocial;
            option.textContent = razonSocial;
            razonSelect.appendChild(option);
        });
    }
}

function llenarCodigoClienteYViaPublica(razonSeleccionada) {
    const codigoSelect = document.getElementById('codigoCliente');
    const viaPublicaSelect = document.getElementById('viaPublica');
    codigoSelect.innerHTML = '<option value="">Selecciona un Código Cliente</option>';
    viaPublicaSelect.innerHTML = '<option value="">Selecciona una Vía Pública</option>';
    codigoSelect.disabled = !razonSeleccionada; 
    viaPublicaSelect.disabled = !razonSeleccionada; 

    console.log("Razón Social seleccionada:", razonSeleccionada); // Verificar la razón social seleccionada
    if (razonSeleccionada) {
        const items = datos.filter(item => item.RazonSocial === razonSeleccionada);
        console.log("Datos filtrados:", items); // Verificar los datos filtrados
        items.forEach(item => {
            const optionCodigo = document.createElement('option');
            optionCodigo.value = item.CodigoCliente;
            optionCodigo.textContent = item.CodigoCliente;
            codigoSelect.appendChild(optionCodigo);

            const optionVia = document.createElement('option');
            optionVia.value = item.ViaPublica;
            optionVia.textContent = item.ViaPublica;
            viaPublicaSelect.appendChild(optionVia);
        });
    }
}
function setupIndustrialForm() {
    // Código para configurar el formulario, por ejemplo:
    llenarMunicipios();
    document.getElementById('municipio').addEventListener('change', function() {
        llenarRazonSocial(this.value);
    });
    document.getElementById('razonSocial').addEventListener('change', function() {
        llenarCodigoClienteYViaPublica(this.value);
    });
    // Aquí puedes agregar más configuraciones según lo necesites.
}

let boton = document.getElementById('miBoton');
if (boton) {
    boton.addEventListener('click', function() {
        console.log("Botón presionado");
    });
} else {
    console.error("El elemento 'miBoton' no se encuentra en el DOM");
}

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los enlaces (<a>)
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        // Comprueba si el enlace es externo
        const isExternal = link.hostname && link.hostname !== window.location.hostname;

        if (isExternal) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer"); // Seguridad adicional
        }
    });
});
