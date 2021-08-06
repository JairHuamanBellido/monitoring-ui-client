
import {  Route, Switch } from "react-router-dom";
import PresentationPage from "../module/Presentation/PresentationPage";

export default function MainRouter() {
  return (
    <Switch>
      <Route path="/">
        <PresentationPage />
      </Route>
    </Switch>
  );
}
