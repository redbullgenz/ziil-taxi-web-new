import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
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

            <Routes >
            <Route exact path="/" activeClassName="selected" element={<Home/>} />
      </Routes >


            <Routes >
            <Route exact path="/AutoMieten" activeClassName="selected" element={<AutoMieten/>} />
      </Routes >

            <Routes >
            <Route exact path="/Impressum" activeClassName="selected" element={<Impressum/>} />
      </Routes >


            <Routes >
            <Route exact path="/Covid" activeClassName="selected" element={<Covid/>} />
      </Routes >


              <Routes >
            <Route exact path="/Kontakt" activeClassName="selected" element={<Kontakt/>} />
      </Routes >
        </Router>
      </div>
    </div>
  );
}

export default App;
