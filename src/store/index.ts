import { atom, createStore } from "jotai";

// 创建一个状态原子
export const countAtom = atom(0);

// 创建一个修改状态的方法
export const increment = (state: number) => state + 1;
export const decrement = (state: number) => state - 1;

export const appStore = createStore();
export const userInfo = atom({ name: "", age: 0 });

appStore.set(userInfo, {
  name: "jotai",
  age: 18,
});
