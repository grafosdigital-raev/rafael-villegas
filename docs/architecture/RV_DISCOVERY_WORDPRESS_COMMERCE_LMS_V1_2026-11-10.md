# RafaelVillegas.mx — Portal de Descubrimiento V1

**Decisión:** Rafael Villegas, 2026-11-10  
**Clasificación:** PRY / marca personal  
**Estado:** Arquitectura aprobada; MVP WordPress empaquetado, pendiente de instalación y QA real.  
**Identidad canónica:** **Consciencia · Acción · Resultados**.

## Propósito

El visitante no llega a una biografía ni a un catálogo de servicios. Primero se encuentra consigo mismo mediante preguntas, opciones y reflexiones útiles. Rafael Villegas es el facilitador y puente humano de experiencias de desarrollo personal, liderazgo, aprendizaje, tecnología, eXeT y Funnel-IA.

**Cadena de valor:** descubrimiento → reflexión → recurso útil → acción → formación/acompañamiento opcional → resultado/medición.

## Arquitectura aprobada

- **WordPress:** plataforma central y CMS; no sustituir por otro creador SaaS.
- **WooCommerce:** infraestructura transaccional de cursos, talleres, programas, sesiones y servicios. Etiquetar cada producto por ecosistema y vendedor; proteger aislamiento de datos.
- **Mercado Pago:** pasarela objetivo, mediante plugin oficial en México. Todavía no instalado ni validado.
- **LMS:** escuela para cursos gratuitos y pagados, avance del alumno y acceso a lecciones. **Tutor LMS** es una opción candidata por su integración con WooCommerce; selección/QA pendientes.
- **Biblioteca:** recursos etiquetados, artículos, videos, audios, guías, ejercicios y talleres de calidad revisada.
- **Skool / Hotmart:** distribución complementaria por decidir; nunca obligatorias para la plataforma central.
- **Tulio:** futura integración **solo después** de comprobar autorización, aislamiento de fuentes y funcionamiento productivo. No es dependencia del MVP.

## Primer recorrido — plugin [rv_discovery]

La experiencia 0.1 tiene tres pasos:
1. «¿Qué te gustaría transformar hoy?» Cuatro puertas: vida y bienestar; relaciones y liderazgo; negocio e ingresos; aprendizaje y futuro.
2. Pregunta enfocada según la puerta seleccionada.
3. Una pregunta de reflexión, ejercicio práctico y siguiente paso relevante.

El plugin no pide ni almacena datos ni utiliza herramientas de analítica. Debe insertarse como shortcode en una página **borrador** y pasar QA antes de hacerse portada. Artefacto ZIP V0.1 conservado en BusinessOS/Rafael_Villegas/«RafaelVillegas.mx — Portal de Descubrimiento».

## Identidad visual y contenidos

Antes de integrar una imagen de marca, cotejar el logo y su variante aprobada con los materiales existentes; no generar logotipo sustitutivo. Respetar `BRAND.md` y `DESIGN.md`: humanidad, claridad, tipografía editorial, mobile-first, legibilidad y evitar estética de coaching genérico o startup futurista.

Fuente auxiliar: inventario histórico «00_INVENTARIO_MAESTRO_COACH_RAFAEL_VILLEGAS», corte 2026-09-23: 105 archivos y 5 subcarpetas. Material histórico ≠ contenido aprobado. Validar afirmaciones, derechos de autor e imágenes antes de publicar.

## Compuertas de seguridad y lanzamiento

1. Conectar WPVibe a RafaelVillegas.mx y verificar permisos.
2. Inventariar WordPress real: tema, plugins, WooCommerce, backups y compatibilidades; no deducir configuración.
3. Respaldar y preparar borrador/staging; instalar ZIP; QA móvil, Safari/Chrome, teclado, accesibilidad y links.
4. WooCommerce + Mercado Pago en sandbox: pedido, estados, cancelación, devolución y conciliación verificables; identificar titular vendedor y requisitos fiscales antes de pagos reales.
5. LMS: curso gratuito y curso pagado piloto, compra → matrícula → acceso → progreso, con pruebas completas.
6. Publicación solo tras revisión humana.

**Prioridad:** lanzar la experiencia útil y una biblioteca inicial sin bloquearlos por automatizaciones o ecommerce no implementados.

## Estado verificable a 2026-11-10

- **Confirmado:** repo/ADN y carpeta BusinessOS existentes; decisión WordPress; acervo identificado.
- **Construido fuera de producción:** ZIP WordPress Discovery V0.1, PHP/JS sintaxis PASS.
- **No probado:** instalación real, compatibilidad WP/tema, calidad visual en dispositivos, logo final, integración de pagos, LMS, tienda y publicación.
- **Bloqueador inmediato:** autorización del conector WordPress por el propietario.

**Fuentes oficiales:** https://www.mercadopago.com.mx/developers/es/docs/woocommerce/overview · https://tutorlms.com/integrations/woocommerce/

**Seguridad:** no guardar claves ni credenciales en GitHub ni en los expedientes; gestionar rotación y bóveda segura por vía autorizada.
