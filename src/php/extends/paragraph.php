<?php

namespace LEON\WORDPRESS\BLOCKS\PARAGRAPH;


function add_left_border($block_content, $block)
{
    $name = $block['blockName'];
    if ($name != 'core/paragraph') return $block_content;
    $isLeftBorder = $block['attrs']['isLeftBorder'] ?? false;
    $borderColor = $block['attrs']['borderColor'] ?? 'green';
    $paddingLeft = $block['attrs']['paddingLeft'] ?? '0';
    $style = "style='border-left:6px solid $borderColor; padding:10px; padding-left:{$paddingLeft}px'";
    if ($isLeftBorder) return "<div $style>" . $block_content . '</div>';
    else return "<div>" . $block_content . '</div>';
}
add_filter('render_block', __NAMESPACE__ . '\\add_left_border', 10, 2);

//register scripts and styles that are only available in the editor
function register_block_editor_assets()
{
    $NAME = "paragraph";
    $args = require(plugin_dir_path(LEON_PLUGIN_BLOCKS) . "/build/$NAME.asset.php");
    $src = plugins_url("/build/$NAME.js", LEON_PLUGIN_BLOCKS);
    wp_enqueue_script("$NAME-script", $src, $args['dependencies'], $args['version']);
}
add_filter('enqueue_block_editor_assets', __NAMESPACE__ . '\\register_block_editor_assets');


//register scripts and styles that are available in the editor and frontend
// function register_block_assets()
// {
//     $args = require(plugin_dir_path(__FILE__) . "/build/$NAME.asset.php");
//     $src = plugins_url("/build/$NAME.css", __FILE__);
//     wp_enqueue_style("$NAME-css", $src, [], $args['version']);
// }
// add_filter('enqueue_block_assets', __NAMESPACE__ . '\\register_block_assets');
