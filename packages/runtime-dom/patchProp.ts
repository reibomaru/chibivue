import { RendererOptions } from "../runtime-core";
import { patchAttrs } from "./modules/attrs";
import { patchEvent } from "./modules/event";

type DOMRendererOptions = RendererOptions<Node, Element>;

const onRE = /^on[^a-z]/;
export const isOn = (key: string) => onRE.test(key);

export const patchProp: DOMRendererOptions["patchProp"] = (el, key, value) => {
  if (isOn(key)) {
    patchEvent(el, key, value);
  } else {
    patchAttrs(el, key, value);
  }
};
