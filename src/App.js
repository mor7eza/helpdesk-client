import React from "react";
import { ConfigProvider } from "antd";
import Router from "./Router";

import faIR from "antd/es/locale/fa_IR";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <ConfigProvider direction="rtl" locale={faIR}>
      <Router />
    </ConfigProvider>
  );
}

export default App;
