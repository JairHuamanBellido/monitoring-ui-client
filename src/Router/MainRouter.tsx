import HomePage from "module/Home/application/HomePage";
import PresentationPage from "module/Presentation/application/PresentationPage";
import { Route, Switch } from "react-router-dom";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact={true} path="/home">
        <HomePage />
      </Route>
      <Route path="/">
        <PresentationPage />
      </Route>
    </Switch>
  );
}
