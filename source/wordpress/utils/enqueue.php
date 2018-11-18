<?php

  add_action('wp_enqueue_scripts', function () {
    $path = get_template_directory_uri();
    wp_enqueue_style('bundle', "$path/assets/styles/bundle.css");
    wp_enqueue_script('bundle', "$path/assets/scripts/bundle.js");
  });
