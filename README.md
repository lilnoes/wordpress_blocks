# Wordpress Gutenberg custom blocks
This is a list of blocks that i created and use them in my projects.

## 1. Add Left Border to core paragraph block.

## 2. PrismJS code highlighter
Custom block that highlights code using [prismJS](https://prismjs.com/)
Read more [here](https://leonema.vercel.app/projects/wordpress-prismjs-code-highlighter-gutenberg-block)


### How to build
All you have to do is to comment/uncomment specific entry you want in webpack.config.js

The js and css files will be in the build folder.


### How to add files in php
each file generates a .asset.php file which contains required dependencies, and version.

If you want you can comment/uncomment specific entry in index.php

or you can manually do it yourself using .asset.php file generated.