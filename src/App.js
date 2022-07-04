import Helmet from "react-helmet";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AutoMieten from "./pages/AutoMieten";
import ZahlungArt from "./pages/ZahlungArt";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Kontakt from "./pages/Kontakt";
import Booking from "./pages/Booking";
import FormTaxi from "./pages/FormTaxi";
import FormKurier from "./components/FormKurier";
import FormKontakt from "./components/FormKontakt";
import FormFlughafen from "./components/FormFlughafen";


function App() {
  return (
    <div>
      <div>
        
      <Router>
        <Helmet>
          <title>ZIIL-TAXI</title>
          <meta name="description" content="Bestellen Sie ein taxi in umkreis Kreuzlingen, gerne wir begeleiten ihnen zu Flughafen bis zu ihrem lieblings einkaufladen."/>
        </Helmet>
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
            <Route exact path="/ZahlungArt" activeClassName="selected" element={<ZahlungArt/>} />
      </Routes >


              <Routes >
            <Route exact path="/Kontakt" activeClassName="selected" element={<Kontakt/>} />
      </Routes >

      <Routes >
            <Route exact path="/Booking" activeClassName="selected" element={<Booking/>} />
      </Routes >

      <Routes >
            <Route exact path="/Booking/Classic" activeClassName="selected" element={<FormTaxi/>} />
      </Routes >
      <Routes >
            <Route exact path="/Booking/FlughafenBooking" activeClassName="selected" element={<FormFlughafen/>} />
      </Routes >
      <Routes >
            <Route exact path="/Booking/KurierBooking" activeClassName="selected" element={<FormKurier/>} />
      </Routes >
        </Router>
      </div>
    </div>
  );
}

export default App;
