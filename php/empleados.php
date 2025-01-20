<?php
// Parámetros de paginación
$pagina = isset($_GET['pagina']) ? (int)$_GET['pagina'] : 1;
$empleados_por_pagina = 10;
$offset = ($pagina - 1) * $empleados_por_pagina;

// Conexión a la base de datos
$conexion = new mysqli('localhost', 'root', '', 'intranetmarrones');

// Verificar la conexión
if ($conexion->connect_error) {
    // Si hay un error en la conexión, mostramos un mensaje de error y salimos
    die("Conexión fallida: " . $conexion->connect_error);
}

// Consulta SQL para obtener los empleados con paginación
$sql = "SELECT nombre, apellido, ext_movil, movil, ext_fijo, correo_electronico, departamento, sede FROM empleados LIMIT $empleados_por_pagina OFFSET $offset";
$resultado = $conexion->query($sql);

// Verificar si la consulta ha devuelto resultados
$empleados = [];
if ($resultado === false) {
    // Si la consulta falla, mostramos el error
    die("Error en la consulta: " . $conexion->error);
}

if ($resultado->num_rows > 0) {
    // Recorrer los resultados y agregarlos a un array
    while ($row = $resultado->fetch_assoc()) {
        $empleados[] = $row;
    }
} else {
    // Si no hay resultados, asegurarse de que la respuesta esté vacía
    $empleados = [];
}

// Calcular el número total de páginas
$query_total = "SELECT COUNT(*) as total FROM empleados";
$resultado_total = $conexion->query($query_total);

if ($resultado_total === false) {
    // Si la consulta de total falla, mostramos el error
    die("Error en la consulta de total: " . $conexion->error);
}

$total = $resultado_total->fetch_assoc()['total'];
$total_paginas = ceil($total / $empleados_por_pagina);

// Verificar los datos antes de enviarlos (debug)
// Comentamos la línea var_dump para evitar mostrar datos en producción
// var_dump($empleados);  // Verificar que el array de empleados no esté vacío

// Devolver los empleados y la información de la paginación como JSON
echo json_encode([
    'empleados' => $empleados,
    'total_paginas' => $total_paginas
]);

// Cerrar la conexión
$conexion->close();
?>
