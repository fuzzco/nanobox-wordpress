<?php
  $context = Timber::get_context();
  $post = new TimberPost();
  $context['page'] = $post;

  Timber::render( array(
    'views/pages/sample-page.twig',
    'views/pages/page.twig'
  ), $context );
?>