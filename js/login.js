$(document).ready(function () {

    // Configuración de MSAL.js para la autenticación con Azure AD
    const configuracionMsal = {
        auth: {
            clientId: "your-client-id", // Reemplaza con el ID de tu aplicación en Azure AD
            authority: "https://login.microsoftonline.com/your-tenant-id", // Reemplaza con el ID de tu inquilino en Azure AD
            redirectUri: window.location.origin // URI de redirección tras iniciar sesión
        }
    };

    // Instancia de MSAL
    const instanciaMsal = new msal.PublicClientApplication(configuracionMsal);

    // Comprobar si el usuario ya está autenticado
    instanciaMsal.handleRedirectPromise().then((response) => {
        if (response) {
            console.log("Usuario autenticado:", response);
            alert(`¡Bienvenido, ${response.account.username}!`);
            // Redirigir o mostrar información después de la autenticación
        }
    }).catch((error) => {
        console.error("Error en el proceso de redirección:", error);
    });

    // Manejar el evento del botón de inicio de sesión
    document.getElementById("botonLogin").addEventListener("click", () => {
        // Obtener valores de usuario y contraseña
        const usuario = document.getElementById("usuario").value;
        const contrasena = document.getElementById("contrasena").value;

        // Validar que ambos campos estén completos
        if (!usuario || !contrasena) {
            alert("Por favor, completa ambos campos.");
            return;
        }

        // Configuración de la solicitud de inicio de sesión
        const solicitudLogin = {
            scopes: ["user.read"], // Permisos necesarios
            loginHint: usuario // Usar el nombre de usuario como pista para el inicio de sesión
        };

        // Intentar iniciar sesión con Azure AD usando el flujo Popup
        instanciaMsal.loginPopup(solicitudLogin)
            .then((respuestaLogin) => {
                console.log("Inicio de sesión exitoso:", respuestaLogin);
                alert(`¡Bienvenido, ${respuestaLogin.account.username}!`);
                // Redirigir o mostrar contenido protegido aquí
            })
            .catch((error) => {
                console.error("Error en el inicio de sesión:", error);
                alert("Error al iniciar sesión. Por favor, verifica tus credenciales e intenta nuevamente.");
            });
    });

    // Configuración de MSAL.js para la autenticación con Azure AD
    const msalConfig = {
        auth: {
            clientId: "your-client-id", // Reemplaza con tu Client ID en Azure AD
            authority: "https://login.microsoftonline.com/your-tenant-id", // Reemplaza con tu Tenant ID
            redirectUri: window.location.origin // La URL de redirección después del login
        }
    };

    // Crear una instancia de MSAL.js
    const msalInstance = new msal.PublicClientApplication(msalConfig);

    // Manejamos el evento de envío del formulario
    $('#loginForm').on('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional y recargue la página

        // Captura el nombre de usuario (usuario puede ser su correo electrónico)
        var userId = $('#userId').val();  // El campo donde se ingresa el nombre de usuario

        // La solicitud de inicio de sesión
        const loginRequest = {
            scopes: ["user.read"], // Permiso necesario para obtener información básica del usuario
            loginHint: userId // Aquí pasamos el nombre de usuario como pista para Azure AD
        };

        // Intentamos iniciar sesión con un popup (cuadro emergente de autenticación)
        msalInstance.loginPopup(loginRequest)
            .then(function (loginResponse) {
                console.log("Inicio de sesión exitoso:", loginResponse);

                // Redirigimos al usuario a la página protegida de la intranet
                window.location.href = "https://intranetmarrones.powerappsportals.com/Menu2";
            })
            .catch(function (error) {
                console.error("Error en el inicio de sesión:", error);
                alert("Error al iniciar sesión. Por favor, revisa tus credenciales e intenta nuevamente.");
            });
    });
});
