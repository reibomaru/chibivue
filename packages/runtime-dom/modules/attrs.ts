type AttrsValue = string;

export function patchAttrs(el: Element, rawName: string, value: AttrsValue) {
  if (rawName && value) {
    el.setAttribute(rawName, value);
  } else {
    el.removeAttribute(rawName);
  }
}
