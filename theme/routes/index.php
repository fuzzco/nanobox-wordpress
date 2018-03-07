<?php
  $context = Timber::get_context();
  $post = new TimberPost();
  // $context['global'] = get_fields('options');
  Timber::render( array('views/pages/index.twig'), $context );
?>