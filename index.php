<?php

namespace LEON\WORDPRESS\BLOCKS;

define("LEON_PLUGIN_BLOCKS", __FILE__);

/**
 * Plugin Name: Leon Blocks
 * text-domain: leon-blocks
 */

//Blocks
//Comment the line to disable it
require_once(dirname(LEON_PLUGIN_BLOCKS) . '/src/php/blocks/codeHighlight.php');

//Extends
//Comment the line to disable it
require_once(dirname(LEON_PLUGIN_BLOCKS) . '/src/php/extends/paragraph.php');
