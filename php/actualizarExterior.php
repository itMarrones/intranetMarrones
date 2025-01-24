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
$clienteId = $datos['clienteId'];
$exteriorAccessible = $datos['exteriorAccesible'];

// Verificar si los valores están presentes
if (empty($clienteId) || empty($exteriorAccessible)) {
    echo json_encode(['status' => 'error', 'message' => 'Faltan datos obligatorios.']);
    exit;
}

// Conectar a la base de datos
$conexion = new mysqli("localhost", "root", "", "intranetmarrones");

// Verificar la conexión
if ($conexion->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Conexión fallida: ' . $conexion->connect_error]);
    exit;
}

// Convertir 'null' string en valor NULL para MySQL
if ($exteriorAccessible === 'NULL') {
    $exteriorAccessible = null;
}

// Preparar la consulta SQL para actualizar el valor en la tabla clientesindustrial
$sql = "UPDATE clientesindustrial SET EXTERIORACCESIBLE = ? WHERE CODIGOCLIENTE = ?";

$stmt = $conexion->prepare($sql);

// Verificar si la preparación de la consulta fue exitosa
if (!$stmt) {
    echo json_encode(['status' => 'error', 'message' => 'Error al preparar la consulta SQL.']);
    exit;
}

// Vincular los parámetros a la consulta preparada
$stmt->bind_param("si", $exteriorAccessible, $clienteId);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Datos actualizados correctamente']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error al actualizar los datos: ' . $stmt->error]);
}

// Cerrar la declaración y la conexión
$stmt->close();
$conexion->close();
?>
