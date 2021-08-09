import LoginPage from "module/Login/application/LoginPage";
import RegisterPage from "module/Register/application/RegisterPage";
import { Redirect, Route, Switch } from "react-router-dom";

export default function PresentationRouter() {
  return (
    <Switch>
      <Route exact={true}  path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact={true} path="/register">
        <RegisterPage />
      </Route>
      <Route exact={true} path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
}
