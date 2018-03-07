<?php
  $context = Timber::get_context();
  $post = new TimberPost();
  $context['page'] = $post;
  // $context['global'] = get_fields('options');
  Timber::render( array(
    'views/pages/page-' . $post->post_name . '.twig',
    'views/pages/page.twig'
  ), $context );
?>