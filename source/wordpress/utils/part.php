<?php

  add_action('part', function ($name, $data) {
    $path = locate_template("parts/$name.php");
    include($path);
  }, 10, 2);
