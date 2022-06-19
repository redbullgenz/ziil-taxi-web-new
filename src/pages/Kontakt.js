
import Footer from "./Footer";
import { Helmet } from 'react-helmet'
import "../style/KontaktS/Kontakt.css";
import FormFlughafen from "../components/FormFlughafen";
import FormKontakt from "../components/FormKontakt";

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
        

        <FormKontakt/>
        </div>
        <div className="boxtextcontainer">
        <div className="boxText2">
          <h1>ÖFFNUNGSZEITEN</h1>
          <p>
            Montag bis Sonntag <br/> Vormittag 08:00 – 12:00 Uhr<br/> Nachmittag 13:30 –
            3:00 Uhr  <br/>Freitagnachmittag bis 3:00 Uhr
          </p>
        </div>

        <div className="boxText2">
          <h1>OFFICE</h1>
          <p>
            ZIIL TAXI Diensleistungen Gmbh 
            <br/> Finkerstrasse 1
            <br/> 8280 Kreuzlingen
          </p>
        </div>

        <div className="boxText2">
          <h1>KONTAKT</h1>
          <p>
            Tel: 079 400 11 11 <br/> 
            E-mail: info@ziil-taxi.ch<br/> 
          </p>
        </div>
        
        </div>
      </div>
     <Footer/>
      
    
    </div>
  );
}

export default Kontakt;
