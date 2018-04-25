<?php
/**
 * fuzzco functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package fuzzcode
 */

/**
 * Routes!
 */
Routes::map('/', function($params){
  Routes::load('routes/index.php', $params, null, 200);
});

Routes::map('/sample-page', function($params){
  Routes::load('routes/sample-page.php', $params, null, 200);
});

Routes::map('/:post', function($params){
  Routes::load('routes/post.php', $params, null, 200);
});


/**
 * Timber Theme Context Filter
 */
add_filter( 'timber_context', 'mytheme_timber_context'  );

/**
 * Add Version number to Global Vars
 */
function mytheme_timber_context( $context ) {
  $theme = wp_get_theme();
  $context['version'] = $theme->get('Version');
  $context['options'] = get_fields('option');
  return $context;
}

/**
 * Hide Admin bar when logged in
 */
show_admin_bar( false );
