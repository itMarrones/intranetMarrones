// Formularios HTML
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
            <option value="Si">Sí</option>
            <option value="No">No</option>
        </select>
        <br>

        <button type="submit" class="submit-btn">Enviar</button>
    </form>`;

// Función para inicializar el formulario Industrial
function inicializarFormularioIndustrial() {
    const formElement = document.getElementById('filter-form');
 
    // Manejo del envío del formulario
    formElement.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(formElement);
        const formObject = Object.fromEntries(formData);
        console.log('Formulario Industrial enviado:', formObject);
 
        // Llamada a la función para actualizar el valor de exteriorAccesible en la base de datos
        await actualizarExteriorAccesible(formObject);
    });
 
    // Cargar los datos dinámicamente en los selects
    populateSelects();
}

// Función para cargar los datos dinámicamente en los selects
async function populateSelects() {
    const municipioSelect = document.getElementById('municipio');
    const razonSocialSelect = document.getElementById('razonSocial');
    const codigoClienteSelect = document.getElementById('codigoCliente');
    const viaPublicaSelect = document.getElementById('viaPublica');

    // Limpiar los selects antes de llenarlos
    municipioSelect.innerHTML = '<option value="">Selecciona un Municipio</option>';
    razonSocialSelect.innerHTML = '<option value="">Selecciona una Razón Social</option>';
    codigoClienteSelect.innerHTML = '<option value="">Selecciona un Código Cliente</option>';
    viaPublicaSelect.innerHTML = '<option value="">Selecciona una Vía Pública</option>';

    try {
        // Fetch de la base de datos para obtener los datos de los clientes
        const response = await fetch('/php/obtenerClientes.php');
        const clientes = await response.json();

        // Verificar que los datos se están obteniendo correctamente
        if (clientes.length === 0) {
            console.error('No se encontraron clientes con exteriorAccesible NULL');
            return;
        }

        // Filtrar clientes para incluir solo aquellos con exteriorAccesible como null
        const clientesFiltrados = clientes.filter(item => item.exteriorAccesible === null);

        // Filtrar municipios para eliminar duplicados
        const municipiosUnicos = [...new Set(clientesFiltrados.map(item => item.Municipio))];

        // Rellenar el select de municipios con los valores únicos
        municipiosUnicos.forEach(municipio => {
            const municipioOption = document.createElement('option');
            municipioOption.value = municipio;
            municipioOption.textContent = municipio;
            municipioSelect.appendChild(municipioOption);
        });

        // Rellenar los selects de Razón Social dependiendo del municipio seleccionado
        municipioSelect.addEventListener('change', (e) => {
            const selectedMunicipio = e.target.value;
            const filteredData = clientesFiltrados.filter(item => item.Municipio === selectedMunicipio);
 
            // Limpiar los selects
            razonSocialSelect.innerHTML = '<option value="">Selecciona una Razón Social</option>';
            codigoClienteSelect.innerHTML = '<option value="">Selecciona un Código Cliente</option>';
            viaPublicaSelect.innerHTML = '<option value="">Selecciona una Vía Pública</option>';
 
            filteredData.forEach(item => {
                const razonSocialOption = document.createElement('option');
                razonSocialOption.value = item.RazonSocial;
                razonSocialOption.textContent = item.RazonSocial;
                razonSocialSelect.appendChild(razonSocialOption);
            });
 
            // Habilitar el select de Razón Social
            razonSocialSelect.disabled = false;
        });
 
        // Rellenar los selects de Código Cliente y Vía Pública automáticamente dependiendo de la razón social seleccionada
        razonSocialSelect.addEventListener('change', (e) => {
            const selectedRazonSocial = e.target.value;
            const filteredData = clientesFiltrados.filter(item => item.RazonSocial === selectedRazonSocial);
 
            // Limpiar los selects de Código Cliente y Vía Pública
            codigoClienteSelect.innerHTML = '<option value="">Selecciona un Código Cliente</option>';
            viaPublicaSelect.innerHTML = '<option value="">Selecciona una Vía Pública</option>';
 
            filteredData.forEach(item => {
                // Establecer los valores en los selects de Código Cliente y Vía Pública
                const codigoClienteOption = document.createElement('option');
                codigoClienteOption.value = item.CodigoCliente;
                codigoClienteOption.textContent = item.CodigoCliente;
                codigoClienteSelect.appendChild(codigoClienteOption);
 
                const viaPublicaOption = document.createElement('option');
                viaPublicaOption.value = item.ViaPublica;
                viaPublicaOption.textContent = item.ViaPublica;
                viaPublicaSelect.appendChild(viaPublicaOption);
            });
 
            // Habilitar los selects de Código Cliente y Vía Pública
            codigoClienteSelect.disabled = false;
            viaPublicaSelect.disabled = false;
        });
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

// Función para actualizar el valor de exteriorAccesible en la base de datos
async function actualizarExteriorAccesible(formData) {
    const clienteId = formData.codigoCliente;
    const exteriorAccesible = formData.exteriorAccessible;

    try {
        // Primero, enviamos los datos a Power Automate (si es necesario)
        const powerAutomateUrl = "https://prod-22.westeurope.logic.azure.com:443/workflows/f48904dca69449f4a895664e68348f11/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=jGHzqXlfT3v4T8Bb9CjhNkH7QBtDIxz0DRIfFNUhXCY";
        const payload = {
            "Municipio": formData.municipio,
            "RazonSocial": formData.razonSocial,
            "CodigoCliente": parseInt(formData.codigoCliente),
            "ViaPublica": formData.viaPublica,
            "ExteriorAccessible": exteriorAccesible
        };

        const responsePowerAutomate = await fetch(powerAutomateUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!responsePowerAutomate.ok) {
            console.error('Error al enviar datos a Power Automate:', responsePowerAutomate.statusText);
            alert("Hubo un error al enviar los datos a Power Automate.");
            return;
        }

        // Después, enviamos los datos a la base de datos
        const response = await fetch('/php/actualizarExterior.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clienteId: clienteId,
                exteriorAccesible: exteriorAccesible
            })
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Actualización exitosa:', result);
            alert('La actualización fue exitosa.');
        } else {
            console.error('Error al actualizar el valor de exteriorAccesible:', response.statusText);
            alert('Hubo un error al actualizar los datos.');
        }
    } catch (error) {
        console.error('Error de conexión:', error);
        alert('Hubo un problema de conexión.');
    }
}

// Función para cargar el formulario Industrial en el contenedor
function loadForm(formName) {
    const formContainer = document.getElementById('form-container');
    if (formContainer) {
        formContainer.innerHTML = window.forms[formName].html;
        window.forms[formName].init();
    } else {
        console.error('No se encontró el contenedor de formulario con id "form-container".');
    }
}

// Asegúrate de que `window.forms` esté definido
window.forms = window.forms || {};

// Registro del formulario industrial
window.forms['formularioIndustrial'] = {
    html: formularioIndustrialHTML, // La constante con el HTML del formulario
    init: inicializarFormularioIndustrial // La función de inicialización
};