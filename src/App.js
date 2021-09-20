import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AutoMieten from "./pages/AutoMieten";
import Covid from "./pages/Covid";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <div>
      <div>
        <Router>
          <NavBar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>

          <Switch>
            <Route path="/AutoMieten">
              <AutoMieten />
            </Route>
          </Switch>

          <Switch>
            <Route path="/Impressum">
              <Impressum />
            </Route>
          </Switch>

          <Switch>
            <Route path="/Covid">
              <Covid />
            </Route>
          </Switch>

          <Switch>
            <Route path="/Kontakt">
              <Kontakt />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
