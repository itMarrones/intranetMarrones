<?php
// Habilitar la visualización de errores para depuración
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Leer los datos JSON enviados desde el frontend
$datos = json_decode(file_get_contents("php://input"), true);

// Verificar si los datos fueron recibidos correctamente
if (!$datos) {
    echo json_encode(['status' => 'error', 'message' => 'Error al procesar los datos.']);
    exit;
}

// Obtener los valores del JSON
$municipio = $datos['municipio'];
$razonSocial = $datos['razonSocial'];
$codigoCliente = $datos['codigoCliente'];
$viaPublica = $datos['viaPublica'];
$exteriorAccessible = $datos['exteriorAccesible'];  // Ahora esperamos 'Si' o 'No'

// Verificar si los valores obligatorios están presentes
if (empty($municipio) || empty($razonSocial) || empty($codigoCliente)) {
    echo json_encode(['status' => 'error', 'message' => 'Faltan datos obligatorios.']);
    exit;
}

// Conectar a la base de datos
$conexion = new mysqli("localhost", "root", "", "intranetmarrones");

if ($conexion->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Conexión fallida: ' . $conexion->connect_error]);
    exit;
}

// Normalizar el valor de exteriorAccessible a 'SI' o 'NO'
if ($exteriorAccessible !== 'Si' && $exteriorAccessible !== 'No') {
    $exteriorAccessible = null;  // Si el valor no es 'Si' ni 'No', asignar NULL
} else {
    $exteriorAccessible = ($exteriorAccessible === 'Si') ? 'SI' : 'NO';
}

// Preparar la consulta SQL para actualizar el valor en la base de datos
$sql = "UPDATE clientes SET exteriorAccessible = ? 
        WHERE municipio = ? AND razonSocial = ? AND codigoCliente = ?";

$stmt = $conexion->prepare($sql);

// Verificar si la preparación de la consulta fue exitosa
if (!$stmt) {
    echo json_encode(['status' => 'error', 'message' => 'Error al preparar la consulta SQL.']);
    exit;
}

// Vincular los parámetros a la consulta preparada
$stmt->bind_param("ssss", $exteriorAccessible, $municipio, $razonSocial, $codigoCliente);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Datos actualizados correctamente']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error al actualizar los datos']);
}

// Cerrar la declaración y la conexión
$stmt->close();
$conexion->close();
?>
