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

// Función para cargar contenido en el contenedor principal
function loadContent(page) {
    const contentContainer = document.getElementById('contentContainer');
    if (contentContainer) {
        contentContainer.innerHTML = forms[page] ? forms[page].html : '<h1>Contenido no encontrado</h1>';
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
    const btnFormIndustrial = document.getElementById('btnFormIndustrial');

    if (btnFormAltas) {
        btnFormAltas.addEventListener('click', (event) => {
            event.preventDefault();
            loadContent('formularioAltas');
        });
    }

    if (btnFormBajas) {
        btnFormBajas.addEventListener('click', (event) => {
            event.preventDefault();
            loadContent('formularioBajas');
        });
    }

    if (btnFormIndustrial) {
        btnFormIndustrial.addEventListener('click', (event) => {
            event.preventDefault();
            loadContent('formularioIndustrial');
        });
    }
}

// Función para gestionar el desplegable del perfil
function setupProfileDropdown() {
    const profileButton = document.getElementById('profileButton');
    const profileDropdown = document.getElementById('dropdownMenu');
    if (profileButton && profileDropdown) {
        profileButton.addEventListener('click', () => {
            profileDropdown.classList.toggle('hidden');
        });

        window.addEventListener('click', (event) => {
            if (!profileButton.contains(event.target) && !profileDropdown.contains(event.target)) {
                profileDropdown.classList.add('hidden');
            }
        });
    }
}

// Función para cargar empleados en la tabla
function loadEmployees() {
    const tbody = document.getElementById("employee-tbody");
    if (!tbody) return;

    tbody.innerHTML = "";
    (window.employees || []).forEach(employee => {
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
    document.querySelectorAll('#employee-tbody tr').forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        const department = row.cells[1].textContent.toLowerCase();
        const sede = row.cells[6].textContent.toLowerCase();
        row.style.display = (name.includes(searchTerm) || department.includes(searchTerm) || sede.includes(searchTerm)) ? '' : 'none';
    });
}

// Función para gestionar el toggle del sidebar
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

// Lógica para manejar el formulario Industrial
function setupIndustrialForm() {
    llenarMunicipios();
    document.getElementById('municipio').addEventListener('change', function () {
        llenarRazonSocial(this.value);
    });
    document.getElementById('razonSocial').addEventListener('change', function () {
        llenarCodigoClienteYViaPublica(this.value);
    });
}

// Función para llenar los municipios en el select
function llenarMunicipios() {
    const municipioSelect = document.getElementById('municipio');
    if (municipioSelect) {
        municipioSelect.innerHTML = 'Aquí pones el contenido o las opciones';
    }
}

// Función para llenar Razón Social
function llenarRazonSocial(municipioSeleccionado) {
    const razonSelect = document.getElementById('razonSocial');
    razonSelect.innerHTML = '<option value="">Selecciona una Razón Social</option>';
    razonSelect.disabled = !municipioSeleccionado;

    if (municipioSeleccionado) {
        const razones = [...new Set(datos.filter(item => item.Municipio === municipioSeleccionado).map(item => item.RazonSocial))];
        razones.forEach(razonSocial => {
            const option = document.createElement('option');
            option.value = razonSocial;
            option.textContent = razonSocial;
            razonSelect.appendChild(option);
        });
    }
}

// Función para llenar Código Cliente y Vía Pública
function llenarCodigoClienteYViaPublica(razonSeleccionada) {
    const codigoSelect = document.getElementById('codigoCliente');
    const viaPublicaSelect = document.getElementById('viaPublica');
    codigoSelect.innerHTML = '<option value="">Selecciona un Código Cliente</option>';
    viaPublicaSelect.innerHTML = '<option value="">Selecciona una Vía Pública</option>';
    codigoSelect.disabled = !razonSeleccionada;
    viaPublicaSelect.disabled = !razonSeleccionada;

    if (razonSeleccionada) {
        const items = datos.filter(item => item.RazonSocial === razonSeleccionada);
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

// Inicialización de eventos al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    setupSidebarToggle();
    setupFormButtons();
    setupMaterialCheckboxes();
    setupSearchListener();
    setupIndustrialForm();
    setupProfileDropdown();
    loadEmployees();  // Cargar empleados al cargar la página
});
