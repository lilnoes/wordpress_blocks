<?php

namespace LEON\WORDPRESS\BLOCKS;

define("LEON_PLUGIN_BLOCKS", __FILE__);

/**
 * Plugin Name: Leon Blocks
 * text-domain: leon-blocks
 */

//Blocks
//Comment the line to disable it
require_once(dirname(LEON_PLUGIN_BLOCKS) . '/src/blocks/code_highlight/php/register.php');

//Extends
//Comment the line to disable it
require_once(dirname(LEON_PLUGIN_BLOCKS) . '/src/extends/paragraph/php/register.php');
