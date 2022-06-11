import Cover from "../components/Cover";
import Footer from "./Footer";
import { Helmet } from 'react-helmet'
import "../style/KontaktS/Kontakt.css";

function Kontakt() {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Kontakt | Ziil-Taxi Kreuzlingen</title>
                <meta name="description" content="Kontakt mit Ziil-Taxi aufnehmen für weitere info zu erhalten."/>
                <meta name="keywords" content="info, booking, job" />
                <link rel="canonical" href="https://www.ziil-taxi.ch/Kontakt" />
            </Helmet>
      <div className="KontaktDiv">
        <div className="boxText1">
          <h1>Ihr Kontakt zu uns</h1>
          <p>
            Haben Sie Fragen an uns, oder möchten Sie gerne ein Taxi <br/>
            reservieren? Wir sind gerne für Sie da. Füllen Sie einfach unser <br/>
            Kontakt Formular aus, und wir setzen uns so bald wie möglich mit <br/>
            Ihnen in Verbindung. Wir freuen uns über Ihre Kontakt.
          </p>
          <a href="tel:+41794001111" className="phoneLinkKontakt">
            079 400 11 11
          </a>
          <form className="form">
          <div className="divForm">
          <label for="fname" className="label">Vorname </label>
          <input type="text" id="fname" name="firstname" placeholder="Dein Vorname..." className="input" value=""></input>
          <label for="fname" className="label">Nachname</label>
          <input type="text" id="fname" name="firstname" placeholder="Dein Nachname..." className="input" value=""></input>
          </div>
          <div className="divForm"> 
          <label for="fname" className="label">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="E-Mail..." className="input" value=""></input>
          <label for="fname" className="label">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Mobile..." className="input" value=""></input>
          </div>
          </form>
        </div>
        <div className="boxtextcontainer">
        <div className="boxText2">
          <h1>ÖFFNUNGSZEITEN</h1>
          <p>
            Montag bis Sonntag <br/> Vormittag 08:00 – 12:00 Uhr<br/> Nachmittag 13:30 –
            3:00 Uhr  <br/>Freitagnachmittag bis 3:00 Uhr
          </p>
        </div>
        </div>
      </div>
          14
      <Footer />
    </div>
  );
}

export default Kontakt;
