<?php

/**
 * Plugin Name: INGABE Blocks
 */


function ingabe_add_left_border($block_content, $block)
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
add_filter('render_block', 'ingabe_add_left_border', 10, 2);

function ingabe_add_block_filters()
{
    $paragraph = require(plugin_dir_path(__FILE__) . '/build/paragraph.asset.php');
    $src = plugins_url("/build/paragraph.js", __FILE__);
    wp_enqueue_script('ingabe_paragraph', $src, $paragraph['dependencies'], $paragraph['version']);
}
add_filter('enqueue_block_editor_assets', 'ingabe_add_block_filters');
