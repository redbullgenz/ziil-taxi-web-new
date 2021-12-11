import Cover from "../components/Cover";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet';

import "../style/AutoMietenS/AutoMieteCs.css";

function AutoMieten() {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Auto Mieten</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
     
      <div>
        <div>
          <div className="divMiete_">
            Seite in Bearbeitung
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
