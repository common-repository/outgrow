<?php
// render_shortcode.php

if (isset($_POST['shortcode'])) {
    $shortcode = $_POST['shortcode'];

    // Include WordPress functions
    require_once('wp-load.php');

    // Use do_shortcode to render the shortcode
    $renderedContent = do_shortcode($shortcode);

    // Return the rendered content
    echo $renderedContent;
} else {
    echo 'Invalid Request';
}
?>