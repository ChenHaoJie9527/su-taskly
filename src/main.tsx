import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import { atom, Provider, createStore } from "jotai";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn.js";
import zhCN from "antd/locale/zh_CN";
import App from "./App.tsx";
import "./index.css";
import { appStore } from "./store/index.ts";

dayjs.locale("zh-cn");

// 创建一个 Provider 组件，使所有组件都能访问到状态
interface Props {
  children: ReactNode;
}

export const StoreProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={appStore} >{children}</Provider>;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ConfigProvider>
  </React.StrictMode>
);
