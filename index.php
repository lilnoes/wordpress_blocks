<?php

namespace LEON\WORDPRESS\BLOCKS;

/**
 * Plugin Name: Leon Blocks
 */


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

function register_block_name($name)
{
    $args = require(plugin_dir_path(__FILE__) . "/build/$name.asset.php");
    $src = plugins_url("/build/$name.js", __FILE__);
    wp_enqueue_script("$name-script", $src, $args['dependencies'], $args['version']);
}

function register_blocks()
{
    register_block_name("paragraph");
    register_block_name("codeHighlight");
}
add_filter('enqueue_block_editor_assets', __NAMESPACE__ . '\\register_blocks');

function register_common_block_styles()
{
    $args = require(plugin_dir_path(__FILE__) . "/build/codeHighlight.asset.php");
    $src = plugins_url("/build/codeHighlight.css", __FILE__);
    wp_enqueue_style("codeHighlight-css", $src, [], $args['version']);
}
add_filter('enqueue_block_assets', __NAMESPACE__ . '\\register_common_block_styles');
