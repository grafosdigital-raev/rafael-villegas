# Rafael Villegas — Portal de Descubrimiento (WordPress)

**Versión:** 0.1.0 — MVP candidato, NO publicado / NO verificado en WordPress real.

## Propósito
Primer componente de la futura plataforma RafaelVillegas.mx: experiencia progresiva de descubrimiento, antes que biografía o catálogo de ventas. Respeta el ADN público del repo `grafosdigital-raev/rafael-villegas`. No sustituye tema, ni hace compras, ni gestiona acceso a cursos.

## Instalación
1. Instalar ZIP `rv-discovery-0.1.0.zip` en WordPress → Plugins → Añadir plugin → Subir plugin. Activar **en staging antes de producción**.
2. Crear página de borrador «Descubre tu camino» y añadir bloque *Shortcode*: `[rv_discovery]`.
3. Ajustar cabecera/espacios del tema y probar en móvil. No convertir en portada sin QA y revisión humana.
4. Opcional: `[rv_discovery biblioteca_url="https://rafaelvillegas.mx/biblioteca/"]` **solo cuando exista esa página**. Sin URL, la CTA de biblioteca se oculta.
5. El plugin reutiliza el logotipo configurado en Apariencia → Personalizar → Identidad del sitio, si el tema admite logotipo. En su ausencia muestra una marca tipográfica provisional; NO crear ni sustituir logo de Rafa.

## Comportamiento
- Tres pantallas: elección de una de cuatro rutas → una pregunta de enfoque → reflexión/ejercicio y siguiente paso.
- Las cuatro rutas son vida/bienestar, relaciones/liderazgo, negocio/ingresos, aprendizaje/futuro.
- Rutas de acompañamiento enlazan a eXeT y Funnel-IA; biblioteca se habilita por shortcode cuando exista.
- No solicita, almacena ni transmite datos personales. No instala cookies, métricas ni IA conversacional.
- Teclado, pantalla móvil, estados de foco, `aria-live` y `prefers-reduced-motion` contemplados.

## Arquitectura prevista, no implementada
WordPress + WooCommerce + Mercado Pago oficial para México + LMS (Tutor LMS como candidato, sujeto a compatibilidad) + biblioteca y recursos. Paywalls/cursos, pedidos, accesos y facturación se implementan en etapas separadas con pruebas de sandbox, roles y política de identidad eXeT/Funnel-IA.

## Control de calidad pendiente
- Instalación y prueba en WordPress staging del dominio real.
- Compatibilidad tema/constructores, PHP, WP, WooCommerce y futuro LMS.
- QA Safari/Chrome/Android, teclado/lectores de pantalla, Core Web Vitals.
- Link QA y logo canónico validado.
- Revisión editorial y legal de contenido e información comercial antes de publicar.
