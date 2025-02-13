<?php
// Habilitar la visualización de errores para depuración
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Conexión a la base de datos
$host = 'localhost';
$user = 'adminDB';
$password = 'pASSM4rr0n3$';
$database = 'intranetmarrones';

$connection = new mysqli($host, $user, $password, $database);

// Verifica la conexión
if ($connection->connect_error) {
    die(json_encode(['status' => 'error', 'message' => 'Error al conectar con la base de datos: ' . $connection->connect_error]));
}

// Consulta para obtener los clientes con EXTERIORACCESIBLE como NULL o vacío
$sql = "SELECT MUNICIPIO, RAZONSOCIAL, CODIGOCLIENTE, VIAPUBLICA, EXTERIORACCESIBLE
        FROM clientesindustrial 
        WHERE EXTERIORACCESIBLE IS NULL OR EXTERIORACCESIBLE = ''";

$result = $connection->query($sql);

if ($result) {
    $clientes = [];
    while ($row = $result->fetch_assoc()) {
        $clientes[] = $row;
    }
    echo json_encode(['status' => 'success', 'data' => $clientes]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error en la consulta: ' . $connection->error]);
}

$connection->close();
?>