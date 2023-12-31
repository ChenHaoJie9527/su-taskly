import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn.js";
import zhCN from "antd/locale/zh_CN";
import App from "./App.tsx";
import "./index.css";

dayjs.locale("zh-cn");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
