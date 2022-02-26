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
  attributes: {
    rawText: { type: "string" },
    html: { type: "string" },
    language: { type: "string", default: "javascript" },
  },
});

console.log("loaded me...");
