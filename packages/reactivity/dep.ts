import { type ReactiveEffect } from "./effect";

export type Dep = Set<ReactiveEffect>;

export function createDep(effects?: ReactiveEffect[]): Dep {
  return new Set<ReactiveEffect>(effects);
}
