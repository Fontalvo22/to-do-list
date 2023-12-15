DROP DATABASE IF EXISTS todo;

CREATE DATABASE todo;

use todo;

CREATE TABLE `to_do_list` (
    `tarea_id` int(11) NOT NULL,
    `descripcion` varchar(255) NOT NULL,
    `fecha_limite` date DEFAULT NULL,
    `completada` tinyint(1) DEFAULT 0,
    `creado_en` timestamp NOT NULL DEFAULT current_timestamp(),
    `actualizado_en` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    `deleted_at` timestamp NULL DEFAULT NULL
);

INSERT INTO to_do_list (tarea_id, descripcion, fecha_limite, completada, creado_en, actualizado_en, deleted_at) VALUES
(1, 'Completar informe', '2023-12-31', 0, '2023-01-01 12:00:00', '2023-01-01 12:00:00', NULL),
(2, 'Reunión de equipo', '2023-12-15', 1, '2023-01-02 10:30:00', '2023-01-02 10:30:00', NULL),
(3, 'Enviar correo electrónico', '2023-12-20', 0, '2023-01-03 15:45:00', '2023-01-03 15:45:00', NULL),
(4, 'Hacer ejercicio', NULL, 0, '2023-01-04 08:00:00', '2023-01-04 08:00:00', NULL),
(5, 'Leer un libro', '2023-12-25', 1, '2023-01-05 18:00:00', '2023-01-05 18:00:00', NULL),
(6, 'Comprar víveres', '2023-12-18', 0, '2023-01-06 14:30:00', '2023-01-06 14:30:00', NULL),
(7, 'Actualizar perfil en redes sociales', NULL, 0, '2023-01-07 11:20:00', '2023-01-07 11:20:00', NULL),
(8, 'Preparar presentación', '2023-12-30', 1, '2023-01-08 09:00:00', '2023-01-08 09:00:00', NULL),
(9, 'Ver una película', '2023-12-22', 0, '2023-01-09 20:00:00', '2023-01-09 20:00:00', NULL),
(10, 'Hacer una llamada telefónica', NULL, 0, '2023-01-10 16:45:00', '2023-01-10 16:45:00', NULL),
(11, 'Estudiar para el examen', '2023-12-28', 1, '2023-01-11 13:15:00', '2023-01-11 13:15:00', NULL),
(12, 'Planificar vacaciones', '2023-12-31', 0, '2023-01-12 10:00:00', '2023-01-12 10:00:00', NULL),
(13, 'Comida con amigos', '2023-12-17', 1, '2023-01-13 19:30:00', '2023-01-13 19:30:00', NULL),
(14, 'Resolver problemas técnicos', NULL, 0, '2023-01-14 15:00:00', '2023-01-14 15:00:00', NULL),
(15, 'Actualizar el software', '2023-12-29', 0, '2023-01-15 12:45:00', '2023-01-15 12:45:00', NULL),
(16, 'Hacer una caminata', NULL, 1, '2023-01-16 07:00:00', '2023-01-16 07:00:00', NULL),
(17, 'Comprar regalos de Navidad', '2023-12-23', 0, '2023-01-17 18:30:00', '2023-01-17 18:30:00', NULL),
(18, 'Revisar documentos importantes', NULL, 1, '2023-01-18 14:20:00', '2023-01-18 14:20:00', NULL),
(19, 'Limpiar la casa', NULL, 0, '2023-01-19 11:00:00', '2023-01-19 11:00:00', NULL),
(20, 'Organizar archivos', '2023-12-27', 1, '2023-01-20 09:30:00', '2023-01-20 09:30:00', NULL),
(21, 'Enviar tarjetas de felicitación', '2023-12-24', 0, '2023-01-21 20:15:00', '2023-01-21 20:15:00', NULL),
(22, 'Asistir a una conferencia', NULL, 1, '2023-01-22 16:00:00', '2023-01-22 16:00:00', NULL),
(23, 'Actualizar el blog', '2023-12-26', 0, '2023-01-23 12:45:00', '2023-01-23 12:45:00', NULL),
(24, 'Visitar a la familia', NULL, 1, '2023-01-24 10:30:00', '2023-01-24 10:30:00', NULL),
(25, 'Realizar análisis de datos', '2023-12-19', 0, '2023-01-25 08:00:00', '2023-01-25 08:00:00', NULL),
(26, 'Entrenamiento en línea', NULL, 1, '2023-01-26 18:30:00', '2023-01-26 18:30:00', NULL),
(27, 'Probar nueva receta de cocina', '2023-12-21', 0, '2023-01-27 15:15:00', '2023-01-27 15:15:00', NULL),
(28, 'Resolver crucigrama', NULL, 1, '2023-01-28 11:45:00', '2023-01-28 11:45:00', NULL),
(29, 'Aprender una nueva habilidad', '2023-12-16', 0, '2023-01-29 09:30:00', '2023-01-29 09:30:00', NULL),
(30, 'Medir el progreso de metas', NULL, 1, '2023-01-30 07:00:00', '2023-01-30 07:00:00', NULL);