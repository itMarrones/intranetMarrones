<?php
header('Content-Type: application/json');

// Conexión a la base de datos
$conexion = new mysqli('localhost', 'root', '', 'intranetmarrones');

// Verificar la conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

// Consulta para obtener los clientes donde exteriorAccesible es NULL
$sql = "SELECT Municipio, RazonSocial, CodigoCliente, ViaPublica, exteriorAccesible
        FROM clientes 
        WHERE exteriorAccesible IS NULL";

// Ejecutar la consulta
$resultado = $conexion->query($sql);

// Verificar si hay resultados
if ($resultado === false) {
    die("Error en la consulta: " . $conexion->error);
}

// Comprobar si hay resultados
if ($resultado->num_rows > 0) {
    // Array para almacenar los resultados
    $clientes = array();

    // Recorrer los resultados y agregarlos al array
    while ($row = $resultado->fetch_assoc()) {
        $clientes[] = $row;
    }

    // Devolver los datos en formato JSON
    echo json_encode($clientes);
} else {
    // Si no hay resultados, devolver un array vacío
    echo json_encode([]);
}

// Cerrar la conexión
$conexion->close();
?>
