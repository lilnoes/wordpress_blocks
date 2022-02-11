import { addAttributes, withAdvancedEdit } from "./withAdvancedEdit";

wp.hooks.addFilter(
  "blocks.registerBlockType",
  "ingabe/paragraph_edit",
  addAttributes
);
wp.hooks.addFilter(
  "editor.BlockEdit",
  "ingabe/paragraph_edit",
  withAdvancedEdit
);
