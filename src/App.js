import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
            <Route exact path="/" activeClassName="selected">
              <Home />
            </Route>
          </Switch>

          <Switch>
            <Route path="/AutoMieten" activeClassName="selected">
              <AutoMieten />
            </Route>
          </Switch>

          <Switch>
            <Route path="/Impressum" activeClassName="selected">
              <Impressum />
            </Route>
          </Switch>

          <Switch>
            <Route path="/Covid" activeClassName="selected">
              <Covid />
            </Route>
          </Switch>

          <Switch>
            <Route path="/Kontakt" activeClassName="selected">
              <Kontakt />
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="StickyContakt">w</div>
    </div>
  );
}

export default App;
