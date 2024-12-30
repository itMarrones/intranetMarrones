function loadFormScript(scriptUrl, callback) {
    const existingScript = Array.from(document.scripts).find(script => script.src.includes(scriptUrl));
    if (existingScript) {
        callback(); // Ya está cargado
        return;
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.onload = callback;
    script.onerror = () => console.error(`Error al cargar el script: ${scriptUrl}`);
    document.body.appendChild(script);
}


document.getElementById('btnFormAltas').addEventListener('click', (event) => {
    event.preventDefault();
    loadFormScript('./Formularioaltas.js', () => {
        loadContent('formularioAltas');
        if (window.inicializarFormularioAltas) {
            window.inicializarFormularioAltas();
        }
    });
});

document.getElementById('btnFormBajas').addEventListener('click', (event) => {
    event.preventDefault();
    loadFormScript('./FormularioBajas.js', () => {
        loadContent('formularioBajas');
        if (window.inicializarFormularioBajas) {
            window.inicializarFormularioBajas();
        }
    });
});

document.getElementById('btnFormIndustrial').addEventListener('click', (event) => {
    event.preventDefault();
    loadFormScript('./FormularioIndustrial.js', () => {
        loadContent('formularioIndustrial');
        if (window.inicializarFormularioIndustrial) {
            window.inicializarFormularioIndustrial();
        }
    });
});


// Función para cargar contenido en el contenedor principal
function loadContent(page) {
    const contentContainer = document.getElementById('contentContainer');
    if (contentContainer) {
        const formData = window.forms[page]; // Acceder a forms desde window
        contentContainer.innerHTML = formData ? formData.html : '<h1>Contenido no encontrado</h1>';
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

function setupIndustrialForm() {
    const municipioElement = document.getElementById('municipio');
    if (!municipioElement) {
        console.error("El formulario de Industrial no está cargado.");
        return;
    }

    municipioElement.addEventListener('change', function () {
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
    setupProfileDropdown();
    setupIndustrialForm();
});