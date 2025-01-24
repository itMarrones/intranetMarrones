window.onload = function () {
    console.log("login.js cargado correctamente"); // Verificar que el archivo JS se ha cargado

    // Verificar si msal está definido
    if (typeof msal === 'undefined') {
        console.error('La librería MSAL.js no se ha cargado correctamente.');
        return;
    }

    // Configuración de MSAL.js para la autenticación con Azure AD
    const msalConfig = {
        auth: {
            clientId: "21f86d89-0a0d-490a-a969-2c5e77e5e3ba", // Tu Client ID
            authority: "https://login.microsoftonline.com/de752617-7a92-4041-bbc6-6ecac2f7d230", // Tu Tenant ID
            redirectUri: "http://intranet.ester.cat" // URI de redirección tras iniciar sesión
        }
    };

    // Crear una instancia de MSAL.js
    const msalInstance = new msal.PublicClientApplication(msalConfig);

    // Comprobar si el usuario ya está autenticado al cargar la página
    msalInstance.handleRedirectPromise().then((response) => {
        if (response) {
            console.log("Usuario autenticado:", response);
            alert(`¡Bienvenido, ${response.account.username}!`);
            window.location.href = "https://intranet.ester.cat"; // Redirección al portal después de autenticarse
        }
    }).catch((error) => {
        console.error("Error en el proceso de redirección:", error);
    });

    // Función para manejar el inicio de sesión (usando redirección)
    function iniciarSesion() {
        console.log("Intentando iniciar sesión..."); // Verifica si esta función es llamada

        const loginRequest = {
            scopes: ["user.read"] // Permisos necesarios para obtener información del usuario
        };

        // Intentar iniciar sesión con Azure AD usando el flujo de redirección
        msalInstance.loginRedirect(loginRequest)
            .then(() => {
                console.log("Redirigiendo a la página de login de Azure...");
            })
            .catch((error) => {
                console.error("Error en el inicio de sesión:", error);
                alert("Error al iniciar sesión. Por favor, revisa tus credenciales e intenta nuevamente.");
            });
    }

    // Asegurarse de que el botón está presente antes de agregar el evento
    const botonLogin = document.getElementById("botonLogin");
    if (botonLogin) {
        botonLogin.addEventListener("click", function () {
            console.log("Botón clickeado"); // Verifica si el evento se dispara
            // Llamar a la función para iniciar sesión
            iniciarSesion();
        });
    } else {
        console.error("El botón de login no se encontró.");
    }
};
