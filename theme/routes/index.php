<?php
  $context = Timber::get_context();
  $post = new TimberPost();
  $context['page'] = $post;
  $context['global'] = get_fields('options');
  Timber::render( array(
    'views/page-' . $post->post_name . '.twig',
    'views/page.twig'
  ), $context );