// Centraliza la carga de cualquier formulario
function loadForm(formName) {
    const formContainer = document.getElementById('form-container');
    if (!formContainer) {
        console.error('Contenedor del formulario no encontrado.');
        return;
    }

    const formHTML = window.forms[formName];
    if (formHTML && formHTML.html) {
        formContainer.innerHTML = ''; // Limpiar el contenedor antes de añadir el nuevo formulario
        formContainer.insertAdjacentHTML('beforeend', formHTML.html); // Cargar el formulario

        if (formHTML.init) {
            formHTML.init(); // Inicializar el formulario si tiene lógica específica
        }

        // Ocultar la barra lateral después de cargar el formulario
        hideSidebar();
    } else {
        formContainer.innerHTML = '<h1>Formulario no encontrado</h1>';
        console.error(`Formulario '${formName}' no encontrado en la configuración.`);
    }
}

// Ocultar la barra lateral
function hideSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');

    if (sidebar) {
        sidebar.classList.remove('active'); // Remover la clase 'active' que hace visible la barra lateral
        sidebar.classList.add('inactive'); // Añadir la clase 'inactive' para ocultarla
    }

    if (toggleBtn) {
        toggleBtn.classList.remove('active'); // Cambiar el estado del botón de toggle
        toggleBtn.innerHTML = '&#8594;'; // Cambiar el ícono del botón
    }
}

// Re-inicializamos todos los eventos relacionados con la barra lateral, el toggle y otros
function initializeSidebar() {
    setupSidebarToggle(); // Asegurarnos de que la barra lateral funciona después de cargar el formulario
    setupFormButtons(); // Recargamos los botones del formulario para asegurarnos de que se asignan los eventos
    setupProfileDropdown(); // Reiniciamos los eventos del menú desplegable de perfil si es necesario
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

// Gestiona la carga de formularios desde botones
function setupFormButtons() {
    const formButtons = {
        'btnFormAltas': 'formularioAltas',  // El botón para el formulario de Altas
        'btnFormBajas': 'formularioBajas', // Este formulario debe existir en el objeto 'forms'
        'btnFormIndustrial': 'formularioIndustrial' // Este formulario debe existir en el objeto 'forms'
    };

    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.addEventListener('click', (e) => {
            const buttonId = e.target.id;
            if (formButtons[buttonId]) {
                loadForm(formButtons[buttonId]); // Cargar el formulario correspondiente
            }
        });
    } else {
        console.error('El contenedor del sidebar no se encuentra en el DOM.');
    }
}

// Inicialización de eventos al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        initializeSidebar(); // Aseguramos que la barra lateral y los formularios se inicialicen correctamente
    }, 50); // Le damos un pequeño retraso si es necesario
});
