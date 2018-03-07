<?php
  $context = Timber::get_context();
  $post = new TimberPost();
  $context['post'] = $post;
  // $context['global'] = get_fields('options');
  Timber::render( array(
    'views/pages/post-' . $post->post_name . '.twig',
    'views/pages/post.twig'
  ), $context );
?>