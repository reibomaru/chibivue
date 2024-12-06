import { RendererOptions } from "../runtime-core/renderer";

export const nodeOps: Omit<RendererOptions<Node, Element>, "patchProp"> = {
  setElementText(node, text) {
    node.textContent = text;
  },

  createElement: (tagName) => {
    return document.createElement(tagName);
  },

  createText: (text: string) => {
    return document.createTextNode(text);
  },

  setText(node, text) {
    node.textContent = text;
  },

  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
};
