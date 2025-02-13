<?php
// Parámetros de paginación
$pagina = isset($_GET['pagina']) ? (int)$_GET['pagina'] : 1;
$empleados_por_pagina = 10;
$offset = ($pagina - 1) * $empleados_por_pagina;

// Conexión a la base de datos
$conexion = new mysqli('localhost', 'adminDB', 'pASSM4rr0n3$', 'intranetmarrones');

// Verificar la conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

// Obtener el término de búsqueda si existe
$searchTerm = isset($_GET['search']) ? $conexion->real_escape_string($_GET['search']) : '';

// Consulta SQL para obtener los empleados con búsqueda
$sql = "SELECT nombre, apellido, ext_movil, movil, ext_fijo, correo_electronico, departamento, sede FROM empleados";
if ($searchTerm) {
    $sql .= " WHERE nombre LIKE '%$searchTerm%' OR apellido LIKE '%$searchTerm%' OR ext_movil LIKE '%$searchTerm%' OR movil LIKE '%$searchTerm%' OR ext_fijo LIKE '%$searchTerm%' OR correo_electronico LIKE '%$searchTerm%' OR departamento LIKE '%$searchTerm%' OR sede LIKE '%$searchTerm%'";
}
$resultado = $conexion->query($sql);

// Verificar si la consulta ha devuelto resultados
$empleados = [];
if ($resultado->num_rows > 0) {
    while ($row = $resultado->fetch_assoc()) {
        $empleados[] = $row;
    }
}

// Devolver los empleados como JSON
echo json_encode([
    'empleados' => $empleados
]);

// Cerrar la conexión
$conexion->close();
?>
