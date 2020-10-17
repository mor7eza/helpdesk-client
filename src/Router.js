import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Portal from "./pages/Portal";
import RecoverPassword from "./pages/RecoverPassword";
import Register from "./pages/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/recover-password" component={RecoverPassword} />
      <Route exact path="/portal" component={Portal} />
    </BrowserRouter>
  );
};

export default Router;
