<?php
  $context = Timber::get_context();
  $post = new TimberPost();
  $context['post'] = $post;
  $context['global'] = get_fields('options');
  Timber::render( array(
    'views/page/post-' . $post->post_name . '.twig',
    'views/page/post.twig'
  ), $context );
?>