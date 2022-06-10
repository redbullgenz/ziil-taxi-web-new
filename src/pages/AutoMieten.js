import Cover from "../components/Cover";
import Footer from "./Footer";
import { Helmet } from 'react-helmet';
import "../style/AutoMietenS/AutoMieteCs.css";


function AutoMieten() {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Auto Mieten | Ziil-Taxi Kreuzlingen</title>
                <meta name="description" content="Brauchen Sie das auto für den ganze tag? kein problem fühlen sie den formular aus und wir werden uns bei ihnen melden"/>
                <link rel="canonical" href="https://www.ziil-taxi.ch/AutoMieten" />
            </Helmet>
     
      <div>
        <div>
          <div className="divMiete_">
            
            <h1>Seite in Bearbeitung...<br/>COMMING SOON</h1>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AutoMieten;
