-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 03-01-2024 a las 17:15:46
-- Versión del servidor: 10.5.23-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `examenmanejo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a2_a_categories`
--

CREATE TABLE `a2_a_categories` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `question_type` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `option_a` text NOT NULL,
  `option_b` text NOT NULL,
  `option_c` text NOT NULL,
  `option_d` text NOT NULL,
  `answer` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `a2_a_categories`
--

INSERT INTO `a2_a_categories` (`id`, `question`, `question_type`, `image`, `option_a`, `option_b`, `option_c`, `option_d`, `answer`, `created_at`, `updated_at`) VALUES
(3, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Está permitido en la vía:', '0', '0', 'Recoger o dejar pasajeros o carga en cualquier lugar', 'Dejar animales sueltos o situarlos de forma tal que obstaculicen solo un poco el tránsito', 'Recoger o dejar pasajeros en lugares autorizados.', 'Ejercer el comercio ambulatorio o estacionario', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Respecto de los dispositivos de control o regulación del tránsito:', '0', '0', 'Solo los peatones están obligados a su obediencia', 'Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú asignada al tránsito que indique lo contrario', 'Solo los conductores están obligados a su obediencia.', 'Los conductores están obligados a su obediencia, aun cuando la Policía Nacional del Perú asignada al tránsito pueda indicar lo contrario.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La señal vertical reglamentaria R-6 ¿prohibido voltear a la izquierda¿, significa que:', '0', '0', 'Está prohibido voltear a la izquierda y, por lo tanto también está prohibido el giro en U.', 'Está prohibido voltear a la izquierda, sin embargo, está permitido el giro en U.', 'El único sentido de desplazamiento es continuar de frente.', 'Ninguna de las alternativas es correcta.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La señal vertical reglamentaria R-3 significa que:', '1', '0', 'Nos acercamos a una zona restringida al tránsito.', 'Está permitido adelantar vehículos.', 'El único sentido de desplazamiento es continuar de frente.', 'Ninguna de las alternativas es correcta', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En las vías, las marcas en el pavimento que son del tipo central discontinua y de color amarillo significan que:', '0', '0', 'Está permitido cruzar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo.', 'No está permitido cruzar al otro carril para el adelantamiento vehicular.', 'Se está reduciendo el ancho de la calzada de la vía por donde se circula.', 'Se está frente a un lugar de cruce peatonal.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito El color ámbar o amarillo del semáforo significa que:', '0', '0', 'Los vehículos deben avanzar.', 'Los vehículos deben detenerse.', 'Los vehículos deben acelerar la marcha.', 'Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo contrario, deberán cruzar y despejar la intersección.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Los colores del semáforo tienen el siguiente significado: rojo: _____ ; ámbar o amarillo: _____; verde: ____.', '0', '0', 'Detención - prevención - paso.', 'Detención - paso con prevención - circulación rápida.', 'Disminución de la velocidad - prevención - paso rápido.', 'Ninguna de las alternativas es correcta.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué indica una flecha verde en un semáforo vehicular?', '0', '0', 'Se puede continuar con precaución únicamente en la dirección de la flecha y desde el carril que esta flecha controla.', 'No está permitida la circulación en el sentido que indica la flecha.', 'Se debe respetar únicamente la luz circular.', 'Ninguna de las alternativas es correcta.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La siguiente señal vertical reglamentaria R-53:', '1', '0', 'Prohíbe estacionar.', 'Prohíbe al conductor detener el vehículo dentro del área de la intersección.', 'Prohíbe la carga y descarga.', 'Prohíbe la circulación de vehículos motorizados', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si llega a una intersección y visualiza el semáforo con una flecha roja hacia la izquierda y la luz circular verde prendidas al mismo tiempo, la acción correcta es:', '0', '0', 'Avanzar en cualquier sentido, ya que la luz circular está en verde.', 'Avanzar, pero el giro a la izquierda está prohibido por la flecha roja.', 'Avanzar únicamente hacia la izquierda, pues continuar de frente está prohibido.', 'Ninguna de las alternativas es correcta.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si llega a una intersección donde el semáforo muestra una luz intermitente, qué afirmación es correcta:', '0', '0', 'Si la luz intermitente es roja, ésta es equivalente a un ¿CEDA EL PASO?', 'Si la luz intermitente es ámbar, tiene preferencia, debiendo reducir la velocidad y continuar con precaución.', 'Si la luz intermitente es verde, ésta es equivalente a un “PARE”.', 'Ninguna de las alternativas es correcta.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿La luz intermitente roja es igual que una señal de PARE?', '0', '0', 'Verdad.', 'Es verdad siempre y cuando también se encuentre un Policía de Tránsito indicando la señal de Pare.', '', 'Ninguna de las alternativas es correcta.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Al aproximarse a una intersección con giro permitido a la izquierda, la conducta correcta es:', '0', '0', 'Girar desde cualquier carril.', 'Colocarse en el carril derecho, luego girar con precaución.', 'Colocarse en el carril más despejado de tráfico, luego girar con precaución.', 'Hacer la señal de volteo a la izquierda con las luces direccionales, ubicar con antelación el vehículo en el carril de circulación de la izquierda y girar con precaución.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Al cambiar de carril en una vía de un solo sentido con múltiples carriles, ¿cuál es la conducta correcta?', '0', '0', 'Se deben encender las luces direccionales primero, buscar una brecha y realizar el cambio de carril con precaución.', 'Se debe encontrar una brecha, luego cambiar de carril con precaución; no es necesario el uso de luces direccionales para cambios de carril.', 'Se debe advertir utilizando el claxon, identificar una brecha y realizar el cambio de carril con precaución.', 'Está prohibido el cambio de carril en vías de un solo sentido.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Respecto a los cruces a nivel con vías férreas, señale la afirmación correcta:', '0', '0', 'Los vehículos que transitan por la vía férrea tienen preferencia de paso sobre los que transitan por la vía que la cruza.', 'Los vehículos que transitan por la vía que cruza la línea férrea tienen preferencia de paso sobre los que transitan por la vía férrea.', 'El vehículo que llegue primero tiene preferencia.', 'Tiene preferencia el conductor que viene por la derecha del otro.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Ante la señal de color rojo del semáforo y la indicación de continuar la marcha del efectivo de la Policía Nacional del Perú asignado al control del tránsito, corresponde:', '0', '0', 'Detenerse hasta que cambie a luz verde.', 'Continuar la marcha.', 'Estar prevenido.', 'Ninguna de las alternativas es correcta.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Está prohibido estacionar un vehículo:', '0', '0', 'En las curvas.', 'Dentro de una intersección', 'Frente a la entrada de garajes y de recintos militares o policiales.', 'Todas las alternativas son correctas.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La siguiente señal vertical reglamentaria (R-29):', '1', '0', 'Prohíbe el uso de la bocina en vías urbanas.', 'Prohíbe el uso de la bocina en carreteras.', 'Prohíbe el uso de la bocina.', 'Prohíbe hacer ruido.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Se le impondrá el pago de una multa y no podrá obtener la licencia de conducir por 3 años a la persona que:', '0', '0', 'Conduzca un vehículo automotor sin tener licencia de conducir.', 'Conduzca un vehículo que no cuente con el equipamiento para brindar una máxima comodidad a sus ocupantes.', 'Conduzca un vehículo sin contar con el SOAT.', 'a y c son correctas', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En el supuesto que se encuentre manejando y un vehículo que tiene la intención de sobrepasarlo o adelantarlo lo alcance, ¿qué debería hacer usted?', '0', '0', 'Debe aumentar la velocidad para no dejar que el otro vehículo lo pase.', 'No debe aumentar la velocidad hasta que el vehículo lo sobrepase', 'Debe disminuir drásticamente la velocidad de su vehículo.', 'Debe detener su vehículo.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál de las siguientes afirmaciones es correcta?', '0', '0', 'El conductor debe respetar los límites máximos y mínimos de velocidad establecidos.', 'El conductor debe respetar únicamente los límites máximos de velocidad, pues no existen límites mínimos.', 'El conductor puede conducir a la velocidad que desee, siempre que lo haga de manera prudente.', 'Ninguna de las alternativas es correcta.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué luces debe utilizar un conductor que circula en las vías públicas urbanas por la noche?', '0', '0', 'Bajas.', 'Altas.', 'Luces altas en las intersecciones y bajas en las avenidas.', 'Ninguna de las alternativas es correcta.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En caso de accidentes, el SOAT cubre los daños que sufren:', '0', '0', 'Solo los ocupantes del vehículo.', 'Los ocupantes y terceros no ocupantes del vehículo.', 'Solo terceros afectados.', 'Solo el conductor del vehículo.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál de los siguientes seguros es exigible para conducir un vehículo automotor?', '0', '0', 'Cualquier tipo de seguro de accidentes personales que comercialicen las empresas de seguro.', 'Cualquier tipo de seguro vehicular, siempre que cubra a los ocupantes del vehículo y terceros afectados por un accidente de tránsito.', 'El Seguro Obligatorio de Accidentes de Tránsito - SOAT.', 'No es obligatorio contar con un seguro.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Cuándo es obligatorio darle preferencia de paso a un vehículo de emergencia o vehículo oficial:', '0', '0', 'Cuando emita señales visibles.', 'Cuando emita señales audibles.', 'Cuando emita señales audibles y visibles.', 'Ninguna de las alternativas es correcta.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si por el carril por donde está conduciendo se aproxima a un vehículo de transporte escolar que se encuentra detenido, recogiendo o dejando escolares ¿Qué debe hacer?', '0', '0', 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si por el carril por donde está conduciendo se aproxima a un vehículo de transporte escolar que se encuentra detenido, recogiendo o dejando escolares ¿Qué debe hacer?', 'Adelantar por el lado izquierdo, pero con precaución.', 'Tocar el claxon para alertar que está pasando.', 'Adelantar muy despacio.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'Todas Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué significa un triángulo rojo de seguridad colocado en la calzada?', '0', '0', 'La presencia de un vehículo inmovilizado en la vía pública por alguna circunstancia.', 'Zona de obras por reparación en la calzada.', 'Que el vehículo que lo enfrenta debe detenerse.', 'a y c son correctas.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La siguiente señal vertical reglamentaria P-22C indica que:', '0', '0', 'Está permitido adelantar.', 'Se aproxima un carril adicional.', 'Está permitido cambiar de carril.', 'Ninguna de las alternativas es correcta.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Las luces intermitentes de emergencia del vehículo deben utilizarse obligatoriamente:', '0', '0', 'Para girar en las intersecciones y para advertir los cambios de carril.', 'Para indicar la detención, parada o estacionamiento en zona peligrosa o la ejecución de maniobras riesgosas.', 'Durante toda la circulación del vehículo.', 'En cada intersección.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En intersecciones que no tienen señales de Pare, Ceda el Paso o Semáforo, ¿las vías de doble sentido tienen prioridad de paso respecto a las vías de un solo sentido de igual clasificación?', '0', '0', 'No.', 'No.', 'Depende de la intersección.', 'No se encuentra regulado en el reglamento.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si usted se aproxima a una señal de PARE colocada verticalmente o pintada en la vía, la acción correcta es:', '0', '0', 'Disminuir su velocidad y cederle el paso a los vehículos que circulan por la transversal.', 'Disminuir su velocidad y pasar con cuidado.', 'Sobre parar y pasar rápidamente.', 'Parar por completo, ceder el paso a los usuarios que tengan preferencia y luego continuar con precaución.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál es la diferencia entre las señales P-2A y P-1A?', '1', '0', 'No hay diferencia, se usan indistintamente.', 'La señal P-2A se utiliza en situaciones de mayor riesgo.', 'La señal P-1A advierte la presencia de curva pronunciada a la derecha mientras que la P-2A advierte la presencia de curva suave a la derecha.', 'La señal P-2A advierte la presencia de curva pronunciada a la derecha mientras que la P-1A advierte la presencia de curva suave a la derecha.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué indica la señal R-30F?', '1', '0', 'Tener precaución con vehículos lentos.', 'Regula la velocidad máxima permitida en curvas.', 'Regula la velocidad máxima en zonas rurales', 'No se encuentra regulada en el reglamento.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué señal debe utilizar el conductor para disminuir la velocidad o detener el vehículo cuando está en marcha?', '0', '0', 'Luces direccionales.', 'Solo el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo.', 'Luces intermitentes y, en caso de fuerza mayor, utilizar el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo, haciendo ángulo recto con el brazo.', 'Luces bajas.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si dos vehículos se aproximan simultáneamente a una intersección no regulada (sin señalización) procedentes de vías diferentes, ¿quién tiene preferencia de paso?', '1', '0', 'Cualquiera de los dos.', 'El que se aproxime por la derecha del otro.', 'El que se aproxime por la izquierda del otro.', 'El que haga sonar la bocina primero.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En una intersección no regulada (sin señalización) tiene preferencia de paso:', '0', '0', 'El vehículo que ingresó primero a la intersección.', 'El vehículo que haga sonar la bocina primero.', 'El vehículo que haga cambio de luces primero.', 'Cualquier vehículo', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En una rotonda, tiene prioridad de paso el vehículo que:', '0', '0', 'Quiere ingresar a la rotonda.', 'Circula por ella.', 'Acelera primero.', 'Hace sonar la bocina.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito El sobrepaso o adelantamiento de un vehículo en movimiento se efectúa, salvo excepciones, por la _________ retornando el vehículo después de la maniobra a su carril original.', '0', '0', 'Derecha.', 'Izquierda.', 'Izquierda.', 'Por la derecha o izquierda.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si un conductor está tomando medicamentos y por ello siente sueño ¿qué debe hacer?', '0', '0', 'Manejar normalmente.', 'Manejar despacio.', 'Abstenerse de manejar.', 'Manejar con un copiloto.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Son documentos que deben portarse obligatoriamente, durante la conducción del vehículo, y exhibirse cuando la autoridad competente lo solicite:', '0', '0', 'Documento de identidad, SOAT vigente (puede ser virtual) y tarjeta de identificación vehicular', 'Certificado de Inspección Técnica Vehicular y contrato de compraventa del vehículo.', 'Contrato de compraventa del vehículo.', 'Todas las alternativas son correctas.', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a3_a_categories`
--

CREATE TABLE `a3_a_categories` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `question_type` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `option_a` text NOT NULL,
  `option_b` text NOT NULL,
  `option_c` text NOT NULL,
  `option_d` text NOT NULL,
  `answer` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `a3_a_categories`
--

INSERT INTO `a3_a_categories` (`id`, `question`, `question_type`, `image`, `option_a`, `option_b`, `option_c`, `option_d`, `answer`, `created_at`, `updated_at`) VALUES
(3, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Está permitido en la vía:', '0', '0', 'Recoger o dejar pasajeros o carga en cualquier lugar', 'Dejar animales sueltos o situarlos de forma tal que obstaculicen solo un poco el tránsito', 'Recoger o dejar pasajeros en lugares autorizados.', 'Ejercer el comercio ambulatorio o estacionario', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Respecto de los dispositivos de control o regulación del tránsito:', '0', '0', 'Solo los peatones están obligados a su obediencia', 'Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú asignada al tránsito que indique lo contrario', 'Solo los conductores están obligados a su obediencia.', 'Los conductores están obligados a su obediencia, aun cuando la Policía Nacional del Perú asignada al tránsito pueda indicar lo contrario.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La señal vertical reglamentaria R-6 ¿prohibido voltear a la izquierda¿, significa que:', '0', '0', 'Está prohibido voltear a la izquierda y, por lo tanto también está prohibido el giro en U.', 'Está prohibido voltear a la izquierda, sin embargo, está permitido el giro en U.', 'El único sentido de desplazamiento es continuar de frente.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La señal vertical reglamentaria R-3 significa que:', '0', '0', 'Nos acercamos a una zona restringida al tránsito.', 'Está permitido adelantar vehículos.', 'El único sentido de desplazamiento es continuar de frente.', 'Ninguna de las alternativas es correcta', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En las vías, las marcas en el pavimento que son del tipo central discontinua y de color amarillo significan que:', '0', '0', 'Está permitido cruzar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo.', 'No está permitido cruzar al otro carril para el adelantamiento vehicular.', 'Se está reduciendo el ancho de la calzada de la vía por donde se circula.', 'Se está frente a un lugar de cruce peatonal.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito El color ámbar o amarillo del semáforo significa que:', '0', '0', 'Los vehículos deben avanzar.', 'Los vehículos deben detenerse.', 'Los vehículos deben acelerar la marcha.', 'Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo contrario, deberán cruzar y despejar la intersección.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Los colores del semáforo tienen el siguiente significado: rojo: _____ ; ámbar o amarillo: _____; verde: ____.', '0', '0', 'Detención - prevención - paso.', 'Detención - paso con prevención - circulación rápida.', 'Disminución de la velocidad - prevención - paso rápido.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué indica una flecha verde en un semáforo vehicular?', '0', '0', 'Se puede continuar con precaución únicamente en la dirección de la flecha y desde el carril que esta flecha controla.', 'No está permitida la circulación en el sentido que indica la flecha.', 'Se debe respetar únicamente la luz circular.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La siguiente señal vertical reglamentaria R-53:', '0', '0', 'Prohíbe estacionar.', 'Prohíbe al conductor detener el vehículo dentro del área de la intersección.', 'Prohíbe la carga y descarga.', 'Prohíbe la carga y descarga.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si llega a una intersección y visualiza el semáforo con una flecha roja hacia la izquierda y la luz circular verde prendidas al mismo tiempo, la acción correcta es:', '0', '0', 'Avanzar en cualquier sentido, ya que la luz circular está en verde.', 'Avanzar, pero el giro a la izquierda está prohibido por la flecha roja.', 'Avanzar únicamente hacia la izquierda, pues continuar de frente está prohibido.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si llega a una intersección donde el semáforo muestra una luz intermitente, qué afirmación es correcta:', '0', '0', 'Si la luz intermitente es roja, ésta es equivalente a un ¿CEDA EL PASO?', 'Si la luz intermitente es ámbar, tiene preferencia, debiendo reducir la velocidad y continuar con precaución.', 'Si la luz intermitente es verde, ésta es equivalente a un “PARE”.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿La luz intermitente roja es igual que una señal de PARE?', '0', '0', 'Verdad.', 'Es verdad siempre y cuando también se encuentre un Policía de Tránsito indicando la señal de Pare.', '', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Al aproximarse a una intersección con giro permitido a la izquierda, la conducta correcta es:', '0', '0', 'Girar desde cualquier carril.', 'Colocarse en el carril derecho, luego girar con precaución.', 'Colocarse en el carril más despejado de tráfico, luego girar con precaución.', 'Hacer la señal de volteo a la izquierda con las luces direccionales, ubicar con antelación el vehículo en el carril de circulación de la izquierda y girar con precaución.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Al cambiar de carril en una vía de un solo sentido con múltiples carriles, ¿cuál es la conducta correcta?', '0', '0', 'Se deben encender las luces direccionales primero, buscar una brecha y realizar el cambio de carril con precaución.', 'Se debe encontrar una brecha, luego cambiar de carril con precaución; no es necesario el uso de luces direccionales para cambios de carril.', 'Se debe advertir utilizando el claxon, identificar una brecha y realizar el cambio de carril con precaución.', 'Está prohibido el cambio de carril en vías de un solo sentido.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Respecto a los cruces a nivel con vías férreas, señale la afirmación correcta:', '0', '0', 'Los vehículos que transitan por la vía férrea tienen preferencia de paso sobre los que transitan por la vía que la cruza.', 'Los vehículos que transitan por la vía que cruza la línea férrea tienen preferencia de paso sobre los que transitan por la vía férrea.', 'El vehículo que llegue primero tiene preferencia.', 'Tiene preferencia el conductor que viene por la derecha del otro.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Ante la señal de color rojo del semáforo y la indicación de continuar la marcha del efectivo de la Policía Nacional del Perú asignado al control del tránsito, corresponde:', '0', '0', 'Detenerse hasta que cambie a luz verde.', 'Continuar la marcha.', 'Estar prevenido.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Está prohibido estacionar un vehículo:', '0', '0', 'En las curvas.', 'Dentro de una intersección.', 'Frente a la entrada de garajes y de recintos militares o policiales.', 'Todas las alternativas son correctas.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La siguiente señal vertical reglamentaria (R-29):', '0', '0', 'Prohíbe el uso de la bocina en vías urbanas.', 'Prohíbe el uso de la bocina en carreteras.', 'Prohíbe el uso de la bocina.', 'Prohíbe hacer ruido.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Se le impondrá el pago de una multa y no podrá obtener la licencia de conducir por 3 años a la persona que:', '0', '0', 'Conduzca un vehículo automotor sin tener licencia de conducir.', 'Conduzca un vehículo que no cuente con el equipamiento para brindar una máxima comodidad a sus ocupantes.', 'Conduzca un vehículo sin contar con el SOAT.', 'a y c son correctas', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En el supuesto que se encuentre manejando y un vehículo que tiene la intención de sobrepasarlo o adelantarlo lo alcance, ¿qué debería hacer usted?', '0', '0', 'Debe aumentar la velocidad para no dejar que el otro vehículo lo pase.', 'No debe aumentar la velocidad hasta que el vehículo lo sobrepase.', 'Debe disminuir drásticamente la velocidad de su vehículo.', 'Debe detener su vehículo.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál de las siguientes afirmaciones es correcta?', '0', '0', 'El conductor debe respetar los límites máximos y mínimos de velocidad establecidos', 'El conductor debe respetar únicamente los límites máximos de velocidad, pues no existen límites mínimos.', 'El conductor puede conducir a la velocidad que desee, siempre que lo haga de manera prudente.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué luces debe utilizar un conductor que circula en las vías públicas urbanas por la noche?', '0', '0', 'Bajas.', 'Altas.', 'Luces altas en las intersecciones y bajas en las avenidas.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En caso de accidentes, el SOAT cubre los daños que sufren:', '0', '0', 'Solo los ocupantes del vehículo.', 'Los ocupantes y terceros no ocupantes del vehículo.', 'Solo terceros afectados.', 'Solo el conductor del vehículo.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál de los siguientes seguros es exigible para conducir un vehículo automotor?', '0', '0', 'Cualquier tipo de seguro de accidentes personales que comercialicen las empresas de seguro.', 'Cualquier tipo de seguro vehicular, siempre que cubra a los ocupantes del vehículo y terceros afectados por un accidente de tránsito.', 'El Seguro Obligatorio de Accidentes de Tránsito - SOAT.', 'No es obligatorio contar con un seguro.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Cuándo es obligatorio darle preferencia de paso a un vehículo de emergencia o vehículo oficial:', '0', '0', 'Cuando emita señales visibles.', 'Cuando emita señales audibles.', 'Cuando emita señales audibles y visibles.', 'Ninguna de las alternativas es correcta.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si por el carril por donde está conduciendo se aproxima a un vehículo de transporte escolar que se encuentra detenido, recogiendo o dejando escolares ¿Qué debe hacer?', '0', '0', 'Detener el vehículo y no continuar la marcha hasta que haya culminado el ascenso o descenso de los escolares.', 'Adelantar por el lado izquierdo, pero con precaución.', 'Tocar el claxon para alertar que está pasando.', 'Adelantar muy despacio.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué significa un triángulo rojo de seguridad colocado en la calzada?', '0', '0', 'La presencia de un vehículo inmovilizado en la vía pública por alguna circunstancia.', 'Zona de obras por reparación en la calzada.', 'Que el vehículo que lo enfrenta debe detenerse.', 'a y c son correctas.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La siguiente señal vertical reglamentaria P-22C indica que:', '0', '0', 'Está permitido adelantar.', 'Se aproxima un carril adicional.', 'Está permitido cambiar de carril.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Las luces intermitentes de emergencia del vehículo deben utilizarse obligatoriamente:', '0', '0', 'Para girar en las intersecciones y para advertir los cambios de carril.', 'Para indicar la detención, parada o estacionamiento en zona peligrosa o la ejecución de maniobras riesgosas.', 'Durante toda la circulación del vehículo.', 'En cada intersección.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En intersecciones que no tienen señales de Pare, Ceda el Paso o Semáforo, ¿las vías de doble sentido tienen prioridad de paso respecto a las vías de un solo sentido de igual clasificación?', '0', '0', 'No.', 'Si', 'Depende de la intersección.', 'No se encuentra regulado en el reglamento.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si usted se aproxima a una señal de PARE colocada verticalmente o pintada en la vía, la acción correcta es:', '0', '0', 'Disminuir su velocidad y cederle el paso a los vehículos que circulan por la transversal.', 'Disminuir su velocidad y pasar con cuidado.', 'Sobre parar y pasar rápidamente.', 'Parar por completo, ceder el paso a los usuarios que tengan preferencia y luego continuar con precaución.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál es la diferencia entre las señales P-2A y P-1A?', '1', '0', 'No hay diferencia, se usan indistintamente.', 'La señal P-2A se utiliza en situaciones de mayor riesgo.', 'La señal P-1A advierte la presencia de curva pronunciada a la derecha mientras que la P-2A advierte la presencia de curva suave a la derecha.', 'La señal P-2A advierte la presencia de curva pronunciada a la derecha mientras que la P-1A advierte la presencia de curva suave a la derecha.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué indica la señal R-30F?', '1', '0', 'Tener precaución con vehículos lentos.', 'Regula la velocidad máxima permitida en curvas.', 'Regula la velocidad máxima en zonas rurales.', 'No se encuentra regulada en el reglamento.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué señal debe utilizar el conductor para disminuir la velocidad o detener el vehículo cuando está en marcha?', '0', '0', 'Luces direccionales.', 'Solo el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo.', 'Luces intermitentes y, en caso de fuerza mayor, utilizar el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo, haciendo ángulo recto con el brazo.', 'Luces bajas.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si dos vehículos se aproximan simultáneamente a una intersección no regulada (sin señalización) procedentes de vías diferentes, ¿quién tiene preferencia de paso?', '1', '0', 'Cualquiera de los dos.', 'El que se aproxime por la derecha del otro.', 'El que se aproxime por la izquierda del otro.', 'El que haga sonar la bocina primero.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En una intersección no regulada (sin señalización) tiene preferencia de paso:', '0', '0', 'El vehículo que ingresó primero a la intersección.', 'El vehículo que haga sonar la bocina primero.', 'El vehículo que haga cambio de luces primero.', 'Cualquier vehículo', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En una rotonda, tiene prioridad de paso el vehículo que:', '0', '0', 'Quiere ingresar a la rotonda.', 'Circula por ella.', 'Acelera primero.', 'Hace sonar la bocina.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito El sobrepaso o adelantamiento de un vehículo en movimiento se efectúa, salvo excepciones, por la _________ retornando el vehículo después de la maniobra a su carril original.', '0', '0', 'Derecha.', 'Izquierda', 'Berma', 'Por la derecha o izquierda.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si un conductor está tomando medicamentos y por ello siente sueño ¿qué debe hacer?', '0', '0', 'Manejar normalmente.', 'Manejar despacio.', 'Abstenerse de manejar.', 'Manejar con un copiloto.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 'Manual de Dispositivos de Control de Tránsito Son documentos que deben portarse obligatoriamente, durante la conducción del vehículo, y exhibirse cuando la autoridad competente lo solicite:', '0', '0', 'Documento de identidad, SOAT vigente (puede ser virtual) y tarjeta de identificación vehicular.', 'Certificado de Inspección Técnica Vehicular y contrato de compraventa del vehículo.', 'Contrato de compraventa del vehículo.', 'Todas las alternativas son correctas.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `a3_b_categories`
--

CREATE TABLE `a3_b_categories` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `question_type` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `option_a` text NOT NULL,
  `option_b` text NOT NULL,
  `option_c` text NOT NULL,
  `option_d` text NOT NULL,
  `answer` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `a3_b_categories`
--

INSERT INTO `a3_b_categories` (`id`, `question`, `question_type`, `image`, `option_a`, `option_b`, `option_c`, `option_d`, `answer`, `created_at`, `updated_at`) VALUES
(4, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Está permitido en la vía:', '0', '0', 'Recoger o dejar pasajeros o carga en cualquier lugar', 'Dejar animales sueltos o situarlos de forma tal que obstaculicen solo un poco el tránsito', 'Recoger o dejar pasajeros en lugares autorizados.', 'Ejercer el comercio ambulatorio o estacionario', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Respecto de los dispositivos de control o regulación del tránsito:', '0', '0', 'Solo los peatones están obligados a su obediencia', 'Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú asignada al tránsito que indique lo contrario', 'Solo los conductores están obligados a su obediencia.', 'Los conductores están obligados a su obediencia, aun cuando la Policía Nacional del Perú asignada al tránsito pueda indicar lo contrario.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La señal vertical reglamentaria R-6 ¿prohibido voltear a la izquierda¿, significa que:', '0', '0', 'Está prohibido voltear a la izquierda y, por lo tanto también está prohibido el giro en U.', 'Está prohibido voltear a la izquierda, sin embargo, está permitido el giro en U.', 'El único sentido de desplazamiento es continuar de frente.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La señal vertical reglamentaria R-3 significa que:', '1', '0', 'Nos acercamos a una zona restringida al tránsito.', 'Está permitido adelantar vehículos.', 'El único sentido de desplazamiento es continuar de frente.', 'Ninguna de las alternativas es correcta', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En las vías, las marcas en el pavimento que son del tipo central discontinua y de color amarillo significan que:', '0', '0', 'Está permitido cruzar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo.', 'No está permitido cruzar al otro carril para el adelantamiento vehicular.', 'Se está reduciendo el ancho de la calzada de la vía por donde se circula.', 'Se está frente a un lugar de cruce peatonal.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito El color ámbar o amarillo del semáforo significa que:', '0', '0', 'Los vehículos deben avanzar.', 'Los vehículos deben detenerse.', 'Los vehículos deben acelerar la marcha.', 'Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo contrario, deberán cruzar y despejar la intersección.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Los colores del semáforo tienen el siguiente significado: rojo: _____ ; ámbar o amarillo: _____; verde: ____.', '0', '0', 'Detención - prevención - paso.', 'Detención - paso con prevención - circulación rápida.', 'Disminución de la velocidad - prevención - paso rápido.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué indica una flecha verde en un semáforo vehicular?', '0', '0', 'Se puede continuar con precaución únicamente en la dirección de la flecha y desde el carril que esta flecha controla.', 'No está permitida la circulación en el sentido que indica la flecha.', 'Se debe respetar únicamente la luz circular.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La siguiente señal vertical reglamentaria R-53:', '1', '0', 'Prohíbe estacionar.', 'Prohíbe al conductor detener el vehículo dentro del área de la intersección.', 'Prohíbe la carga y descarga.', 'Prohíbe la circulación de vehículos motorizados', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si llega a una intersección y visualiza el semáforo con una flecha roja hacia la izquierda y la luz circular verde prendidas al mismo tiempo, la acción correcta es:', '0', '0', 'Avanzar en cualquier sentido, ya que la luz circular está en verde.', 'Avanzar, pero el giro a la izquierda está prohibido por la flecha roja.', 'Avanzar únicamente hacia la izquierda, pues continuar de frente está prohibido.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si llega a una intersección donde el semáforo muestra una luz intermitente, qué afirmación es correcta:', '0', '0', 'Si la luz intermitente es roja, ésta es equivalente a un ¿CEDA EL PASO?', 'Si la luz intermitente es ámbar, tiene preferencia, debiendo reducir la velocidad y continuar con precaución.', 'Si la luz intermitente es verde, ésta es equivalente a un “PARE”.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿La luz intermitente roja es igual que una señal de PARE?', '0', '0', 'Verdad.', 'Es verdad siempre y cuando también se encuentre un Policía de Tránsito indicando la señal de Pare.', '', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Al aproximarse a una intersección con giro permitido a la izquierda, la conducta correcta es:', '0', '0', 'Girar desde cualquier carril.', 'Colocarse en el carril derecho, luego girar con precaución.', 'Colocarse en el carril más despejado de tráfico, luego girar con precaución.', 'Hacer la señal de volteo a la izquierda con las luces direccionales, ubicar con antelación el vehículo en el carril de circulación de la izquierda y girar con precaución.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Al cambiar de carril en una vía de un solo sentido con múltiples carriles, ¿cuál es la conducta correcta?', '0', '0', 'Se deben encender las luces direccionales primero, buscar una brecha y realizar el cambio de carril con precaución.', 'Se debe encontrar una brecha, luego cambiar de carril con precaución; no es necesario el uso de luces direccionales para cambios de carril.', 'Se debe advertir utilizando el claxon, identificar una brecha y realizar el cambio de carril con precaución.', 'Está prohibido el cambio de carril en vías de un solo sentido.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Respecto a los cruces a nivel con vías férreas, señale la afirmación correcta:', '0', '0', 'Los vehículos que transitan por la vía férrea tienen preferencia de paso sobre los que transitan por la vía que la cruza.', 'Los vehículos que transitan por la vía que cruza la línea férrea tienen preferencia de paso sobre los que transitan por la vía férrea.', 'El vehículo que llegue primero tiene preferencia.', 'Tiene preferencia el conductor que viene por la derecha del otro.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Ante la señal de color rojo del semáforo y la indicación de continuar la marcha del efectivo de la Policía Nacional del Perú asignado al control del tránsito, corresponde:', '0', '0', 'Detenerse hasta que cambie a luz verde.', 'Continuar la marcha.', 'Estar prevenido.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Está prohibido estacionar un vehículo:', '0', '0', 'En las curvas.', 'Dentro de una intersección.', 'Frente a la entrada de garajes y de recintos militares o policiales.', 'Todas las alternativas son correctas.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La siguiente señal vertical reglamentaria (R-29):', '1', '0', 'Prohíbe el uso de la bocina en vías urbanas.', 'Prohíbe el uso de la bocina en carreteras.', 'Prohíbe el uso de la bocina.', 'Prohíbe hacer ruido.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Se le impondrá el pago de una multa y no podrá obtener la licencia de conducir por 3 años a la persona que:', '0', '0', 'Conduzca un vehículo automotor sin tener licencia de conducir.', 'Conduzca un vehículo que no cuente con el equipamiento para brindar una máxima comodidad a sus ocupantes.', 'Conduzca un vehículo sin contar con el SOAT.', 'a y c son correctas', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En el supuesto que se encuentre manejando y un vehículo que tiene la intención de sobrepasarlo o adelantarlo lo alcance, ¿qué debería hacer usted?', '0', '0', 'Debe aumentar la velocidad para no dejar que el otro vehículo lo pase.', 'No debe aumentar la velocidad hasta que el vehículo lo sobrepase.', 'Debe disminuir drásticamente la velocidad de su vehículo.', 'Debe detener su vehículo.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál de las siguientes afirmaciones es correcta?', '0', '0', 'El conductor debe respetar los límites máximos y mínimos de velocidad establecidos.', 'El conductor debe respetar únicamente los límites máximos de velocidad, pues no existen límites mínimos.', 'El conductor puede conducir a la velocidad que desee, siempre que lo haga de manera prudente.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué luces debe utilizar un conductor que circula en las vías públicas urbanas por la noche?', '0', '0', 'Bajas.', 'Altas.', 'Luces altas en las intersecciones y bajas en las avenidas.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En caso de accidentes, el SOAT cubre los daños que sufren:', '0', '0', 'Solo los ocupantes del vehículo.', 'Los ocupantes y terceros no ocupantes del vehículo.', 'Solo terceros afectados.', 'Solo el conductor del vehículo.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál de los siguientes seguros es exigible para conducir un vehículo automotor?', '0', '0', 'Cualquier tipo de seguro de accidentes personales que comercialicen las empresas de seguro.', 'Cualquier tipo de seguro vehicular, siempre que cubra a los ocupantes del vehículo y terceros afectados por un accidente de tránsito.', 'El Seguro Obligatorio de Accidentes de Tránsito - SOAT.', 'No es obligatorio contar con un seguro.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Cuándo es obligatorio darle preferencia de paso a un vehículo de emergencia o vehículo oficial:', '0', '0', 'Cuando emita señales visibles.', 'Cuando emita señales audibles.', 'Cuando emita señales audibles y visibles.', 'Ninguna de las alternativas es correcta.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si por el carril por donde está conduciendo se aproxima a un vehículo de transporte escolar que se encuentra detenido, recogiendo o dejando escolares ¿Qué debe hacer?', '0', '0', 'Detener el vehículo y no continuar la marcha hasta que haya culminado el ascenso o descenso de los escolares.', 'Adelantar por el lado izquierdo, pero con precaución.', 'Tocar el claxon para alertar que está pasando.', 'Adelantar muy despacio.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué significa un triángulo rojo de seguridad colocado en la calzada?', '0', '0', 'La presencia de un vehículo inmovilizado en la vía pública por alguna circunstancia.', 'Zona de obras por reparación en la calzada.', 'Que el vehículo que lo enfrenta debe detenerse.', 'a y c son correctas.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La siguiente señal vertical reglamentaria P-22C indica que:', '1', '0', 'Está permitido adelantar.', 'Se aproxima un carril adicional.', 'Está permitido cambiar de carril.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Las luces intermitentes de emergencia del vehículo deben utilizarse obligatoriamente:', '0', '0', 'Para girar en las intersecciones y para advertir los cambios de carril.', 'Para indicar la detención, parada o estacionamiento en zona peligrosa o la ejecución de maniobras riesgosas.', 'Durante toda la circulación del vehículo.', 'En cada intersección.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En intersecciones que no tienen señales de Pare, Ceda el Paso o Semáforo, ¿las vías de doble sentido tienen prioridad de paso respecto a las vías de un solo sentido de igual clasificación?', '0', '0', 'No.', 'Si.', 'Depende de la intersección.', 'Depende de la intersección.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si usted se aproxima a una señal de PARE colocada verticalmente o pintada en la vía, la acción correcta es:', '0', '0', 'Disminuir su velocidad y cederle el paso a los vehículos que circulan por la transversal.', 'Disminuir su velocidad y pasar con cuidado.', 'Sobre parar y pasar rápidamente.', 'Parar por completo, ceder el paso a los usuarios que tengan preferencia y luego continuar con precaución.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál es la diferencia entre las señales P-2A y P-1A?', '1', '0', 'No hay diferencia, se usan indistintamente.', 'La señal P-2A se utiliza en situaciones de mayor riesgo.', 'La señal P-1A advierte la presencia de curva pronunciada a la derecha mientras que la P-2A advierte la presencia de curva suave a la derecha.', 'La señal P-2A advierte la presencia de curva pronunciada a la derecha mientras que la P-1A advierte la presencia de curva suave a la derecha.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué indica la señal R-30F?', '1', '0', 'Tener precaución con vehículos lentos.', 'Regula la velocidad máxima permitida en curvas.', 'Regula la velocidad máxima en zonas rurales.', 'No se encuentra regulada en el reglamento.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué señal debe utilizar el conductor para disminuir la velocidad o detener el vehículo cuando está en marcha?', '0', '0', 'Luces direccionales.', 'Solo el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo.', 'Luces intermitentes y, en caso de fuerza mayor, utilizar el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo, haciendo ángulo recto con el brazo.', 'Luces bajas.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si dos vehículos se aproximan simultáneamente a una intersección no regulada (sin señalización) procedentes de vías diferentes, ¿quién tiene preferencia de paso?', '0', '0', 'Cualquiera de los dos.', 'El que se aproxime por la derecha del otro.', 'El que se aproxime por la izquierda del otro.', 'El que haga sonar la bocina primero.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En una intersección no regulada (sin señalización) tiene preferencia de paso:', '1', '0', 'El vehículo que ingresó primero a la intersección.', 'El vehículo que haga sonar la bocina primero.', 'El vehículo que haga cambio de luces primero.', 'Cualquier vehículo', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En una rotonda, tiene prioridad de paso el vehículo que:', '0', '0', 'Quiere ingresar a la rotonda.', 'Circula por ella.', 'Acelera primero.', 'Hace sonar la bocina.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito El sobrepaso o adelantamiento de un vehículo en movimiento se efectúa, salvo excepciones, por la _________ retornando el vehículo después de la maniobra a su carril original.', '0', '0', 'Derecha.', 'Izquierda.', 'Berma', 'Por la derecha o izquierda.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si un conductor está tomando medicamentos y por ello siente sueño ¿qué debe hacer?', '0', '0', 'Manejar normalmente.', 'Manejar despacio.', 'Abstenerse de manejar.', 'Manejar con un copiloto.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Son documentos que deben portarse obligatoriamente, durante la conducción del vehículo, y exhibirse cuando la autoridad competente lo solicite:', '0', '0', 'Documento de identidad, SOAT vigente (puede ser virtual) y tarjeta de identificación vehicular.', 'Certificado de Inspección Técnica Vehicular y contrato de compraventa del vehículo.', 'Contrato de compraventa del vehículo.', 'Todas las alternativas son correctas.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `b2_a_categories`
--

CREATE TABLE `b2_a_categories` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `question_type` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `option_a` text NOT NULL,
  `option_b` text NOT NULL,
  `option_c` text NOT NULL,
  `option_d` text NOT NULL,
  `answer` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `b2_a_categories`
--

INSERT INTO `b2_a_categories` (`id`, `question`, `question_type`, `image`, `option_a`, `option_b`, `option_c`, `option_d`, `answer`, `created_at`, `updated_at`) VALUES
(7, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito', '0', '0', 'Recoger o dejar pasajeros o carga en cualquier lugar', 'Dejar animales sueltos o situarlos de forma tal que obstaculicen solo un poco el tránsito', 'Recoger o dejar pasajeros en lugares autorizados.', 'Ejercer el comercio ambulatorio o estacionario', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Materias generales Todas Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito', '0', '0', 'Solo los peatones están obligados a su obediencia', 'Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú asignada al tránsito que indique lo contrario', 'Solo los conductores están obligados a su obediencia.', 'Los conductores están obligados a su obediencia, aun cuando la Policía Nacional del Perú asignada al tránsito pueda indicar lo contrario.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito', '0', '0', 'Está prohibido voltear a la izquierda y, por lo tanto también está prohibido el giro en U.', 'Está prohibido voltear a la izquierda, sin embargo, está permitido el giro en U.', 'El único sentido de desplazamiento es continuar de frente.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito', '1', '0', '0', 'Está permitido adelantar vehículos.', 'El único sentido de desplazamiento es continuar de frente.', 'Ninguna de las alternativas es correcta', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito', '0', '0', 'Está permitido cruzar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo.', 'No está permitido cruzar al otro carril para el adelantamiento vehicular.', 'Se está reduciendo el ancho de la calzada de la vía por donde se circula.', 'Se está frente a un lugar de cruce peatonal.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Los colores del semáforo tienen el siguiente significado:', '0', '0', 'Detención - prevención - paso.', 'Detención - paso con prevención - circulación rápida.', 'Disminución de la velocidad - prevención - paso rápido.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué indica una flecha verde en un semáforo vehicular?', '0', '0', 'Se puede continuar con precaución únicamente en la dirección de la flecha y desde el carril que esta flecha controla.', 'No está permitida la circulación en el sentido que indica la flecha.', 'Se debe respetar únicamente la luz circular.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La siguiente señal vertical reglamentaria R-53:', '0', '0', 'Prohíbe estacionar.', 'Prohíbe al conductor detener el vehículo dentro del área de la intersección.', 'Prohíbe la carga y descarga.', 'Prohíbe la circulación de vehículos motorizados', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si llega a una intersección y visualiza el semáforo con una flecha roja hacia la izquierda y la luz circular verde prendidas al mismo tiempo, la acción correcta es:', '0', '0', 'Avanzar en cualquier sentido, ya que la luz circular está en verde.', 'Avanzar, pero el giro a la izquierda está prohibido por la flecha roja.', 'Avanzar únicamente hacia la izquierda, pues continuar de frente está prohibido.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si llega a una intersección donde el semáforo muestra una luz intermitente, qué afirmación es correcta:', '0', '0', 'Si la luz intermitente es roja, ésta es equivalente a un ¿CEDA EL PASO?', 'Si la luz intermitente es ámbar, tiene preferencia, debiendo reducir la velocidad y continuar con precaución.', 'Si la luz intermitente es verde, ésta es equivalente a un “PARE”.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿La luz intermitente roja es igual que una señal de PARE?', '0', '0', 'Verdad', 'Es verdad siempre y cuando también se encuentre un Policía de Tránsito indicando la señal de Pare.', '', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Al aproximarse a una intersección con giro permitido a la izquierda, la conducta correcta es:', '0', '0', 'Girar desde cualquier carril.', 'Colocarse en el carril derecho, luego girar con precaución.', 'Colocarse en el carril más despejado de tráfico, luego girar con precaución.', 'Hacer la señal de volteo a la izquierda con las luces direccionales, ubicar con antelación el vehículo en el carril de circulación de la izquierda y girar con precaución.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Al cambiar de carril en una vía de un solo sentido con múltiples carriles, ¿cuál es la conducta correcta?', '0', '0', 'Se deben encender las luces direccionales primero, buscar una brecha y realizar el cambio de carril con precaución.', 'Se debe encontrar una brecha, luego cambiar de carril con precaución; no es necesario el uso de luces direccionales para cambios de carril.', 'Se debe advertir utilizando el claxon, identificar una brecha y realizar el cambio de carril con precaución.', 'Está prohibido el cambio de carril en vías de un solo sentido.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Respecto a los cruces a nivel con vías férreas, señale la afirmación correcta:', '0', '0', 'Los vehículos que transitan por la vía férrea tienen preferencia de paso sobre los que transitan por la vía que la cruza.', 'Los vehículos que transitan por la vía que cruza la línea férrea tienen preferencia de paso sobre los que transitan por la vía férrea.', 'El vehículo que llegue primero tiene preferencia.', 'Tiene preferencia el conductor que viene por la derecha del otro.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Ante la señal de color rojo del semáforo y la indicación de continuar la marcha del efectivo de la Policía Nacional del Perú asignado al control del tránsito, corresponde:', '0', '0', 'Detenerse hasta que cambie a luz verde.', 'Continuar la marcha.', 'Estar prevenido', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Está prohibido estacionar un vehículo:', '0', '0', 'En las curvas.', 'Dentro de una intersección.', 'Frente a la entrada de garajes y de recintos militares o policiales.', 'Todas las alternativas son correctas.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La siguiente señal vertical reglamentaria (R-29):', '0', '0', 'Prohíbe el uso de la bocina en vías urbanas.', 'Prohíbe el uso de la bocina en carreteras.', 'Prohíbe el uso de la bocina.', 'Prohíbe hacer ruido.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Se le impondrá el pago de una multa y no podrá obtener la licencia de conducir por 3 años a la persona que:', '0', '0', 'Conduzca un vehículo automotor sin tener licencia de conducir.', 'Conduzca un vehículo que no cuente con el equipamiento para brindar una máxima comodidad a sus ocupantes.', 'Conduzca un vehículo sin contar con el SOAT.', 'a y c son correctas', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En el supuesto que se encuentre manejando y un vehículo que tiene la intención de sobrepasarlo o adelantarlo lo alcance, ¿qué debería hacer usted?', '0', '0', 'Debe aumentar la velocidad para no dejar que el otro vehículo lo pase.', 'No debe aumentar la velocidad hasta que el vehículo lo sobrepase.', 'Debe disminuir drásticamente la velocidad de su vehículo.', 'Debe detener su vehículo.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál de las siguientes afirmaciones es correcta?', '0', '0', 'El conductor debe respetar los límites máximos y mínimos de velocidad establecidos.', 'El conductor debe respetar únicamente los límites máximos de velocidad, pues no existen límites mínimos.', 'El conductor puede conducir a la velocidad que desee, siempre que lo haga de manera prudente.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué luces debe utilizar un conductor que circula en las vías públicas urbanas por la noche?', '0', '0', 'Bajas.', 'Altas.', 'Luces altas en las intersecciones y bajas en las avenidas.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En caso de accidentes, el SOAT cubre los daños que sufren:', '0', '0', 'Solo los ocupantes del vehículo.', 'Los ocupantes y terceros no ocupantes del vehículo.', 'Solo terceros afectados.', 'Solo el conductor del vehículo.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál de los siguientes seguros es exigible para conducir un vehículo automotor?', '0', '0', 'Cualquier tipo de seguro de accidentes personales que comercialicen las empresas de seguro.', 'Cualquier tipo de seguro vehicular, siempre que cubra a los ocupantes del vehículo y terceros afectados por un accidente de tránsito.', 'El Seguro Obligatorio de Accidentes de Tránsito - SOAT.', 'No es obligatorio contar con un seguro.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Cuándo es obligatorio darle preferencia de paso a un vehículo de emergencia o vehículo oficial:', '0', '0', 'Cuando emita señales visibles.', 'Cuando emita señales audibles.', 'Cuando emita señales audibles y visibles.', 'Ninguna de las alternativas es correcta.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si por el carril por donde está conduciendo se aproxima a un vehículo de transporte escolar que se encuentra detenido, recogiendo o dejando escolares ¿Qué debe hacer?', '0', '0', 'Detener el vehículo y no continuar la marcha hasta que haya culminado el ascenso o descenso de los escolares.', 'Adelantar por el lado izquierdo, pero con precaución.', 'Tocar el claxon para alertar que está pasando.', 'Adelantar muy despacio.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué significa un triángulo rojo de seguridad colocado en la calzada?', '1', '0', 'La presencia de un vehículo inmovilizado en la vía pública por alguna circunstancia.', 'Zona de obras por reparación en la calzada.', 'Que el vehículo que lo enfrenta debe detenerse.', 'a y c son correctas.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Las luces intermitentes de emergencia del vehículo deben utilizarse obligatoriamente:', '0', '0', 'Para girar en las intersecciones y para advertir los cambios de carril.', 'Para indicar la detención, parada o estacionamiento en zona peligrosa o la ejecución de maniobras riesgosas.', 'Durante toda la circulación del vehículo.', 'En cada intersección.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En intersecciones que no tienen señales de Pare, Ceda el Paso o Semáforo, ¿las vías de doble sentido tienen prioridad de paso respecto a las vías de un solo sentido de igual clasificación?', '0', '0', 'No.', 'Si.', 'Depende de la intersección.', 'No se encuentra regulado en el reglamento.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si usted se aproxima a una señal de PARE colocada verticalmente o pintada en la vía, la acción correcta es:', '0', '0', 'Disminuir su velocidad y cederle el paso a los vehículos que circulan por la transversal.', 'Disminuir su velocidad y pasar con cuidado.', 'Sobre parar y pasar rápidamente', 'Parar por completo, ceder el paso a los usuarios que tengan preferencia y luego continuar con precaución.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál es la diferencia entre las señales P-2A y P-1A?', '1', '0', 'No hay diferencia, se usan indistintamente.', 'La señal P-2A se utiliza en situaciones de mayor riesgo.', 'La señal P-1A advierte la presencia de curva pronunciada a la derecha mientras que la P-2A advierte la presencia de curva suave a la derecha.', 'La señal P-2A advierte la presencia de curva pronunciada a la derecha mientras que la P-1A advierte la presencia de curva suave a la derecha.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué indica la señal R-30F?', '1', '0', 'Tener precaución con vehículos lentos.', 'Regula la velocidad máxima permitida en curvas.', 'Regula la velocidad máxima en zonas rurales.', 'No se encuentra regulada en el reglamento.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué señal debe utilizar el conductor para disminuir la velocidad o detener el vehículo cuando está en marcha?', '0', '0', 'Luces direccionales.', 'Solo el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo.', 'Luces intermitentes y, en caso de fuerza mayor, utilizar el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo, haciendo ángulo recto con el brazo.', 'Luces bajas.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si dos vehículos se aproximan simultáneamente a una intersección no regulada (sin señalización) procedentes de vías diferentes, ¿quién tiene preferencia de paso?', '1', '0', 'Cualquiera de los dos.', 'El que se aproxime por la derecha del otro.', 'El que se aproxime por la izquierda del otro.', 'El que haga sonar la bocina primero.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En una intersección no regulada (sin señalización) tiene preferencia de paso:', '0', '0', 'El vehículo que ingresó primero a la intersección.', 'El vehículo que haga sonar la bocina primero.', 'El vehículo que haga cambio de luces primero.', 'Cualquier vehículo', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En una rotonda, tiene prioridad de paso el vehículo que:', '0', '0', 'Quiere ingresar a la rotonda.', 'Circula por ella.', 'Acelera primero.', 'Hace sonar la bocina.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito El sobrepaso o adelantamiento de un vehículo en movimiento se efectúa, salvo excepciones, por la _________ retornando el vehículo después de la maniobra a su carril original.', '0', '0', 'Derecha.', 'Izquierda.', 'Berma', 'Por la derecha o izquierda.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si un conductor está tomando medicamentos y por ello siente sueño ¿qué debe hacer?', '0', '0', 'Manejar normalmente.', 'Manejar despacio.', 'Abstenerse de manejar.', 'Manejar con un copiloto.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(44, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Son documentos que deben portarse obligatoriamente, durante la conducción del vehículo, y exhibirse cuando la autoridad competente lo solicite:', '0', '0', 'Documento de identidad, SOAT vigente (puede ser virtual) y tarjeta de identificación vehicular.', 'Certificado de Inspección Técnica Vehicular y contrato de compraventa del vehículo.', 'Contrato de compraventa del vehículo.', 'Todas las alternativas son correctas.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(45, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En los tramos de una vía con pendiente pronunciada, que permite la circulación de un solo vehículo, se debe de tener en cuenta que el vehículo que asciende respecto al vehículo que desciende:', '0', '0', 'No tiene preferencia de paso.', 'Tiene preferencia de paso.', 'Debe detenerse.', 'Debe retroceder.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(46, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Al cambiar de dirección, un conductor debe:', '0', '0', 'Señalizar toda la maniobra hasta su culminación.', 'Cambiar de dirección y luego señalizar.', 'No existe ninguna obligación.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `b2_b_categories`
--

CREATE TABLE `b2_b_categories` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `question_type` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `option_a` text NOT NULL,
  `option_b` text NOT NULL,
  `option_c` text NOT NULL,
  `option_d` text NOT NULL,
  `answer` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `b2_b_categories`
--

INSERT INTO `b2_b_categories` (`id`, `question`, `question_type`, `image`, `option_a`, `option_b`, `option_c`, `option_d`, `answer`, `created_at`, `updated_at`) VALUES
(3, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Está permitido en la vía:', '0', '0', 'Recoger o dejar pasajeros o carga en cualquier lugar', 'Dejar animales sueltos o situarlos de forma tal que obstaculicen solo un poco el tránsito', 'Recoger o dejar pasajeros en lugares autorizados.', 'Ejercer el comercio ambulatorio o estacionario', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Respecto de los dispositivos de control o regulación del tránsito:', '0', '0', 'Solo los peatones están obligados a su obediencia', 'Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú asignada al tránsito que indique lo contrario', 'Solo los conductores están obligados a su obediencia.', 'Los conductores están obligados a su obediencia, aun cuando la Policía Nacional del Perú asignada al tránsito pueda indicar lo contrario.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La señal vertical reglamentaria R-6 ¿prohibido voltear a la izquierda¿, significa que:', '0', '0', 'Está prohibido voltear a la izquierda y, por lo tanto también está prohibido el giro en U.', 'Está prohibido voltear a la izquierda, sin embargo, está permitido el giro en U.', 'El único sentido de desplazamiento es continuar de frente.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La señal vertical reglamentaria R-3 significa que:', '1', '0', 'Nos acercamos a una zona restringida al tránsito.', 'Está permitido adelantar vehículos.', 'El único sentido de desplazamiento es continuar de frente.', 'Ninguna de las alternativas es correcta', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En las vías, las marcas en el pavimento que son del tipo central discontinua y de color amarillo significan que:', '0', '0', 'Está permitido cruzar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo.', 'No está permitido cruzar al otro carril para el adelantamiento vehicular.', 'Se está reduciendo el ancho de la calzada de la vía por donde se circula.', 'Se está frente a un lugar de cruce peatonal.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito El color ámbar o amarillo del semáforo significa que:', '0', '0', 'Los vehículos deben avanzar.', 'Los vehículos deben detenerse.', 'Los vehículos deben acelerar la marcha.', 'Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo contrario, deberán cruzar y despejar la intersección.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Los colores del semáforo tienen el siguiente significado: rojo: _____ ; ámbar o amarillo: _____; verde: ____.', '0', '0', 'Detención - prevención - paso.', 'Detención - paso con prevención - circulación rápida.', 'Disminución de la velocidad - prevención - paso rápido.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué indica una flecha verde en un semáforo vehicular?', '0', '0', 'Se puede continuar con precaución únicamente en la dirección de la flecha y desde el carril que esta flecha controla.', 'No está permitida la circulación en el sentido que indica la flecha.', 'Se debe respetar únicamente la luz circular.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La siguiente señal vertical reglamentaria R-53:', '1', '0', 'Prohíbe estacionar.', 'Prohíbe al conductor detener el vehículo dentro del área de la intersección.', 'Prohíbe la carga y descarga.', 'Prohíbe la circulación de vehículos motorizados', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si llega a una intersección y visualiza el semáforo con una flecha roja hacia la izquierda y la luz circular verde prendidas al mismo tiempo, la acción correcta es:', '0', '0', 'Avanzar en cualquier sentido, ya que la luz circular está en verde.', 'Avanzar, pero el giro a la izquierda está prohibido por la flecha roja.', 'Avanzar únicamente hacia la izquierda, pues continuar de frente está prohibido.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si llega a una intersección donde el semáforo muestra una luz intermitente, qué afirmación es correcta:', '0', '0', 'Si la luz intermitente es roja, ésta es equivalente a un ¿CEDA EL PASO?', 'Si la luz intermitente es ámbar, tiene preferencia, debiendo reducir la velocidad y continuar con precaución.', 'Si la luz intermitente es verde, ésta es equivalente a un “PARE”.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿La luz intermitente roja es igual que una señal de PARE?', '0', '0', 'Verdad.', 'Es verdad siempre y cuando también se encuentre un Policía de Tránsito indicando la señal de Pare.', '', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Al aproximarse a una intersección con giro permitido a la izquierda, la conducta correcta es:', '0', '0', 'Girar desde cualquier carril.', 'Colocarse en el carril derecho, luego girar con precaución.', 'Colocarse en el carril más despejado de tráfico, luego girar con precaución.', 'acer la señal de volteo a la izquierda con las luces direccionales, ubicar con antelación el vehículo en el carril de circulación de la izquierda y girar con precaución.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Al cambiar de carril en una vía de un solo sentido con múltiples carriles, ¿cuál es la conducta correcta?', '0', '0', 'Se deben encender las luces direccionales primero, buscar una brecha y realizar el cambio de carril con precaución.', 'Se debe encontrar una brecha, luego cambiar de carril con precaución; no es necesario el uso de luces direccionales para cambios de carril.', 'Se debe advertir utilizando el claxon, identificar una brecha y realizar el cambio de carril con precaución.', 'Está prohibido el cambio de carril en vías de un solo sentido.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Respecto a los cruces a nivel con vías férreas, señale la afirmación correcta:', '0', '0', 'Los vehículos que transitan por la vía férrea tienen preferencia de paso sobre los que transitan por la vía que la cruza.', 'Los vehículos que transitan por la vía que cruza la línea férrea tienen preferencia de paso sobre los que transitan por la vía férrea.', 'El vehículo que llegue primero tiene preferencia.', 'Tiene preferencia el conductor que viene por la derecha del otro.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Ante la señal de color rojo del semáforo y la indicación de continuar la marcha del efectivo de la Policía Nacional del Perú asignado al control del tránsito, corresponde:', '0', '0', 'Detenerse hasta que cambie a luz verde.', 'Continuar la marcha.', 'Estar prevenido.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Está prohibido estacionar un vehículo:', '0', '0', 'En las curvas.', 'Dentro de una intersección.', 'Frente a la entrada de garajes y de recintos militares o policiales.', 'Todas las alternativas son correctas.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La siguiente señal vertical reglamentaria (R-29):', '1', '0', 'Prohíbe el uso de la bocina en vías urbanas.', 'Prohíbe el uso de la bocina en carreteras.', 'Prohíbe el uso de la bocina.', 'Prohíbe hacer ruido.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Se le impondrá el pago de una multa y no podrá obtener la licencia de conducir por 3 años a la persona que:', '0', '0', 'Conduzca un vehículo automotor sin tener licencia de conducir.', 'Conduzca un vehículo que no cuente con el equipamiento para brindar una máxima comodidad a sus ocupantes.', 'Conduzca un vehículo sin contar con el SOAT.', 'a y c son correctas', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En el supuesto que se encuentre manejando y un vehículo que tiene la intención de sobrepasarlo o adelantarlo lo alcance, ¿qué debería hacer usted?', '0', '0', 'Debe aumentar la velocidad para no dejar que el otro vehículo lo pase.', 'No debe aumentar la velocidad hasta que el vehículo lo sobrepase.', 'Debe disminuir drásticamente la velocidad de su vehículo.', 'Debe detener su vehículo.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál de las siguientes afirmaciones es correcta?', '0', '0', 'El conductor debe respetar los límites máximos y mínimos de velocidad establecidos.', 'El conductor debe respetar únicamente los límites máximos de velocidad, pues no existen límites mínimos.', 'El conductor puede conducir a la velocidad que desee, siempre que lo haga de manera prudente.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué luces debe utilizar un conductor que circula en las vías públicas urbanas por la noche?', '0', '0', 'Bajas.', 'Altas', 'Luces altas en las intersecciones y bajas en las avenidas.', 'Ninguna de las alternativas es correcta.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En caso de accidentes, el SOAT cubre los daños que sufren:', '0', '0', 'Solo los ocupantes del vehículo.', 'Los ocupantes y terceros no ocupantes del vehículo.', 'Solo terceros afectados.', 'Solo el conductor del vehículo.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál de los siguientes seguros es exigible para conducir un vehículo automotor?', '0', '0', 'Cualquier tipo de seguro de accidentes personales que comercialicen las empresas de seguro.', 'Cualquier tipo de seguro vehicular, siempre que cubra a los ocupantes del vehículo y terceros afectados por un accidente de tránsito.', 'El Seguro Obligatorio de Accidentes de Tránsito - SOAT.', 'No es obligatorio contar con un seguro.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Cuándo es obligatorio darle preferencia de paso a un vehículo de emergencia o vehículo oficial:', '0', '0', 'Cuando emita señales visibles.', 'Cuando emita señales audibles.', 'Cuando emita señales audibles y visibles.', 'Ninguna de las alternativas es correcta.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si por el carril por donde está conduciendo se aproxima a un vehículo de transporte escolar que se encuentra detenido, recogiendo o dejando escolares ¿Qué debe hacer?', '0', '0', 'Detener el vehículo y no continuar la marcha hasta que haya culminado el ascenso o descenso de los escolares.', 'Adelantar por el lado izquierdo, pero con precaución.', 'Tocar el claxon para alertar que está pasando.', 'Adelantar muy despacio.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué significa un triángulo rojo de seguridad colocado en la calzada?', '0', '0', 'La presencia de un vehículo inmovilizado en la vía pública por alguna circunstancia.', 'Zona de obras por reparación en la calzada.', 'Que el vehículo que lo enfrenta debe detenerse.', 'a y c son correctas.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito La siguiente señal vertical reglamentaria P-22C indica que:', '1', '0', 'Está permitido adelantar.', 'Se aproxima un carril adicional.', 'Está permitido cambiar de carril.', 'Ninguna de las alternativas es correcta.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Las luces intermitentes de emergencia del vehículo deben utilizarse obligatoriamente:', '0', '0', 'Para girar en las intersecciones y para advertir los cambios de carril.', 'Para indicar la detención, parada o estacionamiento en zona peligrosa o la ejecución de maniobras riesgosas.', 'Durante toda la circulación del vehículo.', 'En cada intersección.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En intersecciones que no tienen señales de Pare, Ceda el Paso o Semáforo, ¿las vías de doble sentido tienen prioridad de paso respecto a las vías de un solo sentido de igual clasificación?', '0', '0', 'No.', 'Si.', 'Depende de la intersección.', 'No se encuentra regulado en el reglamento.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si usted se aproxima a una señal de PARE colocada verticalmente o pintada en la vía, la acción correcta es:', '0', '0', 'Disminuir su velocidad y cederle el paso a los vehículos que circulan por la transversal.', 'Disminuir su velocidad y pasar con cuidado.', 'Sobre parar y pasar rápidamente.', 'Parar por completo, ceder el paso a los usuarios que tengan preferencia y luego continuar con precaución.', 'd', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Cuál es la diferencia entre las señales P-2A y P-1A?', '1', '0', 'No hay diferencia, se usan indistintamente.', 'La señal P-2A se utiliza en situaciones de mayor riesgo.', 'La señal P-1A advierte la presencia de curva pronunciada a la derecha mientras que la P-2A advierte la presencia de curva suave a la derecha.', 'La señal P-2A advierte la presencia de curva pronunciada a la derecha mientras que la P-1A advierte la presencia de curva suave a la derecha.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué indica la señal R-30F?', '1', '0', 'Tener precaución con vehículos lentos.', 'Regula la velocidad máxima permitida en curvas.', 'Regula la velocidad máxima en zonas rurales.', 'No se encuentra regulada en el reglamento.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito ¿Qué señal debe utilizar el conductor para disminuir la velocidad o detener el vehículo cuando está en marcha?', '0', '0', 'Luces direccionales.', 'Solo el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo.', 'Luces intermitentes y, en caso de fuerza mayor, utilizar el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo, haciendo ángulo recto con el brazo', 'Luces bajas.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si dos vehículos se aproximan simultáneamente a una intersección no regulada (sin señalización) procedentes de vías diferentes, ¿quién tiene preferencia de paso?', '0', '0', 'Cualquiera de los dos.', 'El que se aproxime por la derecha del otro.', 'El que se aproxime por la izquierda del otro.', 'El que haga sonar la bocina primero.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En una intersección no regulada (sin señalización) tiene preferencia de paso:', '1', '0', 'El vehículo que ingresó primero a la intersección.', 'El vehículo que haga sonar la bocina primero.', 'El vehículo que haga cambio de luces primero.', 'Cualquier vehículo', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito En una rotonda, tiene prioridad de paso el vehículo que:', '0', '0', 'Quiere ingresar a la rotonda.', 'Circula por ella.', 'Acelera primero.', 'Hace sonar la bocina.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito El sobrepaso o adelantamiento de un vehículo en movimiento se efectúa, salvo excepciones, por la _________ retornando el vehículo después de la maniobra a su carril original.', '0', '0', 'Derecha.', 'Izquierda.', 'Berma', 'Por la derecha o izquierda.', 'b', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Si un conductor está tomando medicamentos y por ello siente sueño ¿qué debe hacer?', '0', '0', 'Manejar normalmente.', 'Manejar despacio.', 'Abstenerse de manejar.', 'Manejar con un copiloto.', 'c', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 'Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito Son documentos que deben portarse obligatoriamente, durante la conducción del vehículo, y exhibirse cuando la autoridad competente lo solicite:', '0', '0', 'Documento de identidad, SOAT vigente (puede ser virtual) y tarjeta de identificación vehicular.', 'Certificado de Inspección Técnica Vehicular y contrato de compraventa del vehículo.', 'Contrato de compraventa del vehículo.', 'Todas las alternativas son correctas.', 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clinic_categories`
--

CREATE TABLE `clinic_categories` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `logo` varchar(255) NOT NULL,
  `cost` text NOT NULL,
  `phone_number` text NOT NULL,
  `location` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `clinic_categories`
--

INSERT INTO `clinic_categories` (`id`, `name`, `logo`, `cost`, `phone_number`, `location`, `created_at`, `updated_at`) VALUES
(4, 'ClINICA LA SOLIDARIDAD BARRANCA SRL', '0', '150', '920571544', 'BARRANCA', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'AJ MEDIC S.A.C.', '0', '150', '920606692', 'LA MOLINA', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'CLINICA UNIVERSITARIA S.A.C.', '0', '150', '920380608', 'SAN MIGUEL', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'SERVICIOS MEDICOS INTEGRALES FAMISALUD SAC', '0', '150', '920508181', 'MIRAFLORES', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'ADMINISTRADORA DE SERVICIOS EN SALUD OCUPACIONAL S.A.C', '0', '150', '905406452', 'LINCE', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `driving_school_categories`
--

CREATE TABLE `driving_school_categories` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `logo` varchar(255) NOT NULL,
  `cost` text NOT NULL,
  `phone_number` text NOT NULL,
  `location` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `driving_school_categories`
--

INSERT INTO `driving_school_categories` (`id`, `name`, `logo`, `cost`, `phone_number`, `location`, `created_at`, `updated_at`) VALUES
(4, 'Escuela de Conductores Profesionales A', '0', '150', '999923400', 'SJM', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Mujeres al Volante autoescuela de manejo', '0', '150', '966291216', 'SAN BORJA', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Escuela de Manejo Jos? Olaya - Surquillo', '0', '150', '938209747', 'SURQUILLO', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Escuela De Manejo King Driver', '0', '150', '5911289', 'SURQUILLO', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(41, '2014_10_12_000000_create_users_table', 2),
(42, '2014_10_12_100000_create_password_resets_table', 2),
(43, '2019_08_19_000000_create_failed_jobs_table', 2),
(44, '2019_12_14_000001_create_personal_access_tokens_table', 2),
(60, '2024_01_02_144449_a2a_category', 11),
(61, '2024_01_02_144614_a3a_category', 11),
(62, '2024_01_02_144631_a3b_category', 11),
(63, '2024_01_02_144648_b2a_category', 11),
(64, '2024_01_02_144706_b2b_category', 11),
(65, '2024_01_02_145319_clinic_category', 11),
(68, '2024_01_02_155619_driving_school_category', 13);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'authToken', '3d280419566dbefc3327325dd33f1f78372c1434b434e89a986a871474435092', '[\"*\"]', NULL, NULL, '2024-01-03 11:49:28', '2024-01-03 11:49:28'),
(2, 'App\\Models\\User', 1, 'authToken', 'da1ab36d22c334a15f5b937f3c213bd15c6eec87e77f9f80ba2950eb7d66bf24', '[\"*\"]', '2024-01-03 15:11:55', NULL, '2024-01-03 12:05:21', '2024-01-03 15:11:55'),
(3, 'App\\Models\\User', 1, 'authToken', '835b2878e981ca15b7dff975d55ebe96f66d4e0b8a11721ebdac3390c90ce346', '[\"*\"]', '2024-01-03 12:24:27', NULL, '2024-01-03 12:23:40', '2024-01-03 12:24:27');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Jorge Portocarrero R', 'j.portocarrero.jp@gmail.com', NULL, '$2y$10$UQOSltdhXEA/RZ2Mm9OoPutrhI1bFTLcLQqtyP8fj1y.39HK.BXsm', 'OY5pCiO9LN7Fm03KehCPqUKhEEEHZRUnla8hpI6uoXqpOnIwkryLLc5vl8uD', '2024-01-03 11:49:28', '2024-01-03 15:08:48');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `a2_a_categories`
--
ALTER TABLE `a2_a_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `a3_a_categories`
--
ALTER TABLE `a3_a_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `a3_b_categories`
--
ALTER TABLE `a3_b_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `b2_a_categories`
--
ALTER TABLE `b2_a_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `b2_b_categories`
--
ALTER TABLE `b2_b_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clinic_categories`
--
ALTER TABLE `clinic_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `driving_school_categories`
--
ALTER TABLE `driving_school_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `a2_a_categories`
--
ALTER TABLE `a2_a_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `a3_a_categories`
--
ALTER TABLE `a3_a_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `a3_b_categories`
--
ALTER TABLE `a3_b_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `b2_a_categories`
--
ALTER TABLE `b2_a_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `b2_b_categories`
--
ALTER TABLE `b2_b_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `clinic_categories`
--
ALTER TABLE `clinic_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `driving_school_categories`
--
ALTER TABLE `driving_school_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
