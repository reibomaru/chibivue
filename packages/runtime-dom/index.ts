import {
  CreateAppFunction,
  createAppAPI,
  createRenderer,
} from "../runtime-core";
import { nodeOps } from "./nodeOps";
import { patchProp } from "./patchProp";

const { render } = createRenderer({ ...nodeOps, patchProp });
const _createApp = createAppAPI(render);

/**
 * appを生成する関数
 * @param args
 * @returns
 */
export const createApp: CreateAppFunction<Element> = (...args) => {
  const app = _createApp(...args);
  const { mount } = app;
  // マウントをセレクタから行う処理に変換
  app.mount = (selector: string) => {
    const container = document.querySelector(selector);
    if (!container) return;
    mount(container);
  };
  return app;
};
