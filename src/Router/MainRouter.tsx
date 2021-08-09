import PresentationPage from "module/Presentation/application/PresentationPage";
import { Route, Switch } from "react-router-dom";

export default function MainRouter() {
  return (
    <Switch>
      <Route path="/">
        <PresentationPage />
      </Route>
    </Switch>
  );
}
