import { createApp, h } from "chibivue";

createApp({
  render: () =>
    h("div", { id: "my-app" }, [
      h("p", { style: "color: red; font-weight: bold;" }, ["Hello world."]),
      h(
        "button",
        {
          onClick() {
            alert("Hello world!");
          },
        },
        ["click me!"]
      ),
    ]),
}).mount("#app");
