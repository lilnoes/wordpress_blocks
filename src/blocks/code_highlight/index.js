import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import Save from "./save";

registerBlockType("leon/code-highlight", {
  apiVersion: 2,
  edit: Edit,
  save: Save,
  title: "Code Highlight",
  icon: "editor-code",
  category: "widgets",
});

console.log("loaded me...");
