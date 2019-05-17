<?php
/**
** activation theme
**/
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
 wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

}

function cool_scripts() {
    wp_enqueue_script('cool-stuff', get_stylesheet_directory_uri() . '/js/script.js', array('jquery'), '1.0.0', false );
}
add_action( 'wp_enqueue_scripts', 'cool_scripts' );