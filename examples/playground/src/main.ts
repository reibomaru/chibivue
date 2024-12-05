import { createApp, h } from "chibivue";

createApp({
  render: () =>
    h("div", {}, [
      h("p", {}, ["Hello world."]),
      h("button", {}, ["click me!"]),
    ]),
}).mount("#app");
