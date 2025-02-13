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
$database = 'RRHH';

$conexion = new mysqli($host, $user, $password, $database);

// Verificar la conexión
if ($conexion->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Error al conectar con la base de datos: ' . $conexion->connect_error]);
    exit;
}

// Leer los datos JSON enviados desde el frontend
$datos = json_decode(file_get_contents("php://input"), true);

// Verificar si los datos fueron recibidos correctamente
if (!$datos) {
    echo json_encode(['status' => 'error', 'message' => 'Error al procesar los datos.']);
    exit;
}

// Asegurarse de que la clave 'material' esté presente
if (!isset($datos['material'])) {
    $datos['material'] = [];
}

// Preparar la consulta SQL para insertar los datos en la tabla
$sql = "INSERT INTO altas_empleados (fecha, tipo_registro, dni, nombre_apellidos, reemplazo, fecha_incorporacion, departamento, responsable, funciones, material, otros_material) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conexion->prepare($sql);

// Verificar si la preparación de la consulta fue exitosa
if (!$stmt) {
    echo json_encode(['status' => 'error', 'message' => 'Error al preparar la consulta SQL: ' . $conexion->error]);
    exit;
}

// Convertir el material a JSON y asignarlo a una variable
$materialJson = json_encode($datos['material']);

// Vincular los parámetros a la consulta preparada
$stmt->bind_param(
    "sssssssssss",
    $datos['fecha'],
    $datos['tipoRegistro'],
    $datos['dni'],
    $datos['nombre'],
    $datos['sustituido'],
    $datos['fechaIncorporacion'],
    $datos['departamento'],
    $datos['responsable'],
    $datos['funciones'],
    $materialJson,
    $datos['otrosMaterial']
);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Datos almacenados correctamente']);
} else {
    // Manejar el error de entrada duplicada
    if ($conexion->errno === 1062) {
        echo json_encode(['status' => 'error', 'message' => 'El DNI ya existe en la base de datos.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error al almacenar los datos: ' . $stmt->error]);
    }
}

// Cerrar la declaración y la conexión
$stmt->close();
$conexion->close();
?>