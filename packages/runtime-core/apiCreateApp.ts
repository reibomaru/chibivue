import { ReactiveEffect } from "../reactivity/effect";
import { Component } from "./component";
import { RootRenderFunction } from "./renderer";

export interface App<HostElement = any> {
  mount(rootContainer: HostElement | string): void;
}

export type CreateAppFunction<HostElement> = (
  rootComponent: Component
) => App<HostElement>;

/**
 * createAppを生成するファクトリ
 * @param render
 * @returns Appをレンダーする関数
 */
export function createAppAPI<HostElement>(
  render: RootRenderFunction<HostElement>
): CreateAppFunction<HostElement> {
  return function createApp(rootComponent) {
    const app: App = {
      mount(rootContainer: HostElement) {
        const componentRenderer = rootComponent.setup?.();

        const updateComponent = () => {
          const vnode = componentRenderer?.();
          render(vnode, rootContainer);
        };

        const effect = new ReactiveEffect(updateComponent);
        effect.run();
      },
    };

    return app;
  };
}
