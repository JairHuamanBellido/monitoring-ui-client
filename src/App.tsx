import { BrowserRouter as Router } from "react-router-dom";
import "./sass/App.scss";
import MainRouter from "./Router/MainRouter";

function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;
