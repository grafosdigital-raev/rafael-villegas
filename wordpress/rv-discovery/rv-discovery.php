<?php
/**
 * Plugin Name: Rafael Villegas — Portal de Descubrimiento
 * Description: Experiencia interactiva de autodescubrimiento, accesible y compatible con WooCommerce y plataformas LMS.
 * Version: 0.1.0
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * Author: Rafael Villegas
 * License: GPL-2.0-or-later
 * Text Domain: rv-discovery
 */

if (!defined('ABSPATH')) { exit; }

define('RV_DISCOVERY_VERSION', '0.1.0');
define('RV_DISCOVERY_URL', plugin_dir_url(__FILE__));

add_action('wp_enqueue_scripts', static function () {
    wp_register_style('rv-discovery', RV_DISCOVERY_URL . 'assets/discovery.css', [], RV_DISCOVERY_VERSION);
    wp_register_script('rv-discovery', RV_DISCOVERY_URL . 'assets/discovery.js', [], RV_DISCOVERY_VERSION, true);
});

/**
 * Usage: [rv_discovery]
 * Optional: [rv_discovery biblioteca_url="https://rafaelvillegas.mx/biblioteca/"]
 * No database writes, tracking, payments or collection of visitor information.
 */
add_shortcode('rv_discovery', static function ($attributes = []) {
    $options = shortcode_atts([
        'biblioteca_url' => '',
        'exet_url' => 'https://elexitoeretu.com.mx/',
        'funnel_url' => 'https://funnel-ia.shop/',
    ], $attributes, 'rv_discovery');

    wp_enqueue_style('rv-discovery');
    wp_enqueue_script('rv-discovery');

    $uid = function_exists('wp_unique_id') ? wp_unique_id('rv-discovery-') : 'rv-discovery-' . uniqid('', false);
    $logo = function_exists('has_custom_logo') && has_custom_logo() ? get_custom_logo() : '';

    ob_start();
    ?>
    <section id="<?php echo esc_attr($uid); ?>" class="rvd" aria-label="Portal de descubrimiento Rafael Villegas"
        data-exet-url="<?php echo esc_url($options['exet_url']); ?>"
        data-funnel-url="<?php echo esc_url($options['funnel_url']); ?>"
        data-biblioteca-url="<?php echo esc_url($options['biblioteca_url']); ?>">
      <div class="rvd__ambient rvd__ambient--a" aria-hidden="true"></div>
      <div class="rvd__ambient rvd__ambient--b" aria-hidden="true"></div>
      <div class="rvd__shell">
        <header class="rvd__header">
          <div class="rvd__brand">
            <?php if ($logo) : ?><div class="rvd__custom-logo"><?php echo $logo; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- core get_custom_logo() returns sanitized image markup. ?></div><?php else : ?><span class="rvd__monogram" aria-hidden="true">RV<span class="rvd__monogram-dot">.</span></span><?php endif; ?>
            <span class="rvd__brand-text">RAFAEL VILLEGAS</span>
          </div>
          <div class="rvd__header-detail">Consciencia <span>·</span> Acción <span>·</span> Resultados</div>
        </header>

        <div class="rvd__topline"><span class="rvd__eyebrow">UN ESPACIO PARA MIRAR DISTINTO</span><span class="rvd__chapter">01 / 03</span></div>
        <div class="rvd__progress" aria-hidden="true"><span class="rvd__progress-inner"></span></div>

        <div class="rvd__stage" aria-live="polite" aria-atomic="true">
          <div class="rvd__intro">
            <div class="rvd__overline"><span class="rvd__smallstar" aria-hidden="true">✳</span> Todo comienza con una pregunta</div>
            <h1 class="rvd__heading">¿Qué te gustaría <em>transformar</em> hoy?</h1>
            <p class="rvd__description">No necesitas tener todas las respuestas. Elige aquello que hoy merece tu atención y descubramos juntos un primer paso.</p>
          </div>
          <div class="rvd__choices" role="group" aria-label="Elige tu camino">
            <button class="rvd__choice" type="button" data-path="vida"><span class="rvd__choice-index">01</span><span class="rvd__choice-name">Mi vida y mi bienestar</span><span class="rvd__choice-arrow" aria-hidden="true">↗</span></button>
            <button class="rvd__choice" type="button" data-path="liderazgo"><span class="rvd__choice-index">02</span><span class="rvd__choice-name">Mis relaciones y liderazgo</span><span class="rvd__choice-arrow" aria-hidden="true">↗</span></button>
            <button class="rvd__choice" type="button" data-path="negocio"><span class="rvd__choice-index">03</span><span class="rvd__choice-name">Mi negocio y mis ingresos</span><span class="rvd__choice-arrow" aria-hidden="true">↗</span></button>
            <button class="rvd__choice" type="button" data-path="aprendizaje"><span class="rvd__choice-index">04</span><span class="rvd__choice-name">Mi aprendizaje y el futuro</span><span class="rvd__choice-arrow" aria-hidden="true">↗</span></button>
          </div>
        </div>
        <footer class="rvd__footer"><span>No necesitas cambiarlo todo. Solo decidir por dónde comenzar.</span><span>Una experiencia de Rafael Villegas</span></footer>
      </div>
    </section>
    <?php
    return (string) ob_get_clean();
});
