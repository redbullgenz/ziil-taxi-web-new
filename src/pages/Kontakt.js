import Cover from "../components/Cover";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet'
import "../style/KontaktS/Kontakt.css";

function Kontakt() {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Kontakt</title>
                <meta name="description" content="Kontakt mit Ziil-Taxi aufnehmen für weitere info zu erhalten."/>
                <link rel="canonical" href="https://www.ziil-taxi.ch/Kontakt" />
            </Helmet>
      <div className="KontaktDiv">
        <div className="boxText1">
          <h2>Ihr Kontakt zu uns</h2>
          <h4>
            Haben Sie Fragen an uns, oder möchten Sie gerne ein Taxi
            reservieren? Wir sind gerne für Sie da. Füllen Sie einfach unser
            Kontakt Formular aus, und wir setzen uns so bald wie möglich mit
            Ihnen in Verbindung. Wir freuen uns über Ihre Kontakt.
          </h4>
          <a href="tel:+41794001111" className="phoneLinkKontakt">
            079 400 11 11
          </a>
        </div>
        <div className="boxText1">
          <h2>ÖFFNUNGSZEITEN</h2>
          <h4>
            Montag bis Sonntag Vormittag 08:00 – 12:00 Uhr Nachmittag 13:30 –
            3:00 Uhr Freitagnachmittag bis 3:00 Uhr
          </h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kontakt;
