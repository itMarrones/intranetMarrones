-- phpMyAdmin SQL Dump
-- version 5.2.1deb1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 13-02-2025 a las 10:51:02
-- Versión del servidor: 10.11.6-MariaDB-0+deb12u1
-- Versión de PHP: 8.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `RRHH`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `altas_empleados`
--

CREATE TABLE `altas_empleados` (
  `fecha` date NOT NULL,
  `tipo_registro` varchar(50) NOT NULL,
  `dni` varchar(20) NOT NULL,
  `nombre_apellidos` varchar(255) NOT NULL,
  `reemplazo` varchar(255) DEFAULT NULL,
  `fecha_incorporacion` date NOT NULL,
  `departamento` varchar(100) NOT NULL,
  `responsable` varchar(255) DEFAULT NULL,
  `funciones` text NOT NULL,
  `material` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`material`)),
  `otros_material` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `altas_empleados`
--

INSERT INTO `altas_empleados` (`fecha`, `tipo_registro`, `dni`, `nombre_apellidos`, `reemplazo`, `fecha_incorporacion`, `departamento`, `responsable`, `funciones`, `material`, `otros_material`) VALUES
('2025-02-12', 'alta', '545454545D', 'Samuel', 'zsdzs', '2025-02-11', '0', 'isra', 'asdsadas', 'null', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `altas_empleados`
--
ALTER TABLE `altas_empleados`
  ADD PRIMARY KEY (`dni`),
  ADD UNIQUE KEY `dni` (`dni`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
