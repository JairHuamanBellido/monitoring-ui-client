import { Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "../module/Login/LoginPage";
import RegisterPage from "../module/Register/RegisterPage";

export default function PresentationRouter() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route exact={true} path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
}
