<?php
// Habilitar la visualización de errores para depuración
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Configurar la respuesta como JSON
header('Content-Type: application/json');

// Conectar a la base de datos
$host = 'localhost';
$user = 'adminDB';
$password = 'pASSM4rr0n3$';
$database = 'intranetmarrones';

$conexion = new mysqli($host, $user, $password, $database);

// Verificar la conexión
if ($conexion->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Error al conectar con la base de datos: ' . $conexion->connect_error]);
    exit;
}

// Preparar la consulta SQL para obtener los datos de la tabla
$sql = "SELECT * FROM clientesindustrial";
$result = $conexion->query($sql);

// Verificar si la consulta fue exitosa
if ($result) {
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode(['status' => 'success', 'data' => $data]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error al obtener los datos: ' . $conexion->error]);
}

// Cerrar la conexión
$conexion->close();
?>