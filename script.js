// Centraliza la carga de cualquier formulario
function loadForm(formKey) {
    const formContainer = document.getElementById('form-container');
    if (formContainer && window.forms[formKey]) {
        formContainer.innerHTML = window.forms[formKey].html;
        window.forms[formKey].init();
    } else {
        console.error('Formulario no encontrado:', formKey);
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
        'btnFormBajas': 'formularioBajas',  // El botón para el formulario de Bajas
        'btnFormularioMaterial': 'formularioMaterial',  // El botón para el formulario de Pedidos
        'btnFormularioDevolucion': 'formularioDevolucion',  // El botón para el formulario de Devolución de Material
        'btnFormIndustrial': 'formularioIndustrial',  // El botón para el formulario Industrial
        'btnFormularioTaller': 'formularioTaller',  // El botón para el formulario de Taller
        'btnFormularioTicketing': 'formularioTicketing', // El botón para el formulario de Ticketing
        'btnFormDirectorio': 'directorioEmpleados',
        'btnResultados': 'resultados'  
        // Otros botones...
    };

    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');

    // Delegación de eventos para gestionar los botones dinámicos y estáticos
    if (sidebar) {
        sidebar.addEventListener('click', (e) => {
            const buttonId = e.target.id;
            if (formButtons[buttonId]) {
                loadForm(formButtons[buttonId]); // Cargar el formulario correspondiente

                // Cerrar o plegar la barra lateral automáticamente
                if (sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    sidebar.classList.add('inactive');
                    toggleBtn.classList.remove('active');
                    toggleBtn.innerHTML = '&#8594;'; // Cambiar el icono del botón de toggle
                }
            }
        });
    } else {
        console.error('El contenedor del sidebar no se encuentra en el DOM.');
}
}
// Inicialización de eventos al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    setupSidebarToggle();
    setupFormButtons();
});

// Evento para el menú desplegable de perfil
document.addEventListener('DOMContentLoaded', function () {
    const profileButton = document.getElementById('profileButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Asegurarse de que el dropdown está oculto al principio
    dropdownMenu.classList.add('hidden');

    // Evento para mostrar/ocultar el dropdown cuando se hace clic en el botón de perfil
    profileButton.addEventListener('click', function (event) {
        // Prevenir que el click en el botón cierre el dropdown inmediatamente
        event.stopPropagation();

        const isVisible = dropdownMenu.classList.contains('hidden');
        dropdownMenu.classList.toggle('hidden', !isVisible);
        profileButton.setAttribute('aria-expanded', isVisible);
    });

    // Opcional: cerrar el dropdown si se hace clic fuera de él
    document.addEventListener('click', function (event) {
        if (!profileButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add('hidden');
            profileButton.setAttribute('aria-expanded', 'false');
        }
    });
});
