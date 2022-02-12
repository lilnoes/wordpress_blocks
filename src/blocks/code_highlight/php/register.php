<?php

namespace LEON\WORDPRESS\BLOCKS\CODEHIGHLIGHT;


//register scripts and styles that are only available in the editor
function register_block_editor_assets()
{
    $NAME = "codeHighlight";
    $args = require(plugin_dir_path(LEON_PLUGIN_BLOCKS) . "/build/$NAME.asset.php");
    $src = plugins_url("/build/$NAME.js", LEON_PLUGIN_BLOCKS);
    wp_enqueue_script("$NAME-script", $src, $args['dependencies'], $args['version']);
}
add_filter('enqueue_block_editor_assets', __NAMESPACE__ . '\\register_block_editor_assets');


//register scripts and styles that are available in the editor and frontend
function register_block_assets()
{
    $NAME = "codeHighlight";
    $args = require(plugin_dir_path(LEON_PLUGIN_BLOCKS) . "/build/$NAME.asset.php");
    $src = plugins_url("/build/$NAME.css", LEON_PLUGIN_BLOCKS);
    wp_enqueue_style("$NAME-css", $src, [], $args['version']);
}
add_filter('enqueue_block_assets', __NAMESPACE__ . '\\register_block_assets');
