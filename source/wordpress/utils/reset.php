<?php

  add_action('after_setup_theme', function () {
    show_admin_bar(FALSE);

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');

    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
  });

  add_action('wp_footer', function () {
    wp_deregister_script('wp-embed');
  });

  add_action('admin_menu', function () {
    remove_menu_page('edit-comments.php');
    //remove_menu_page('edit.php');
  });
