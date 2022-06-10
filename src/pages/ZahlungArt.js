import Cover from "../components/Cover";
import Footer from "./Footer";
import { Helmet } from 'react-helmet'
import "../style/CovidS/Covid.css";

function Covid() {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Covid bag | Ziil-Taxi Kreuzlingen</title>
                <meta name="description" content="Wie siehts mit Covid aus? hier erfahren Sie was sie brauchen"/>
                <link rel="canonical" href="https://www.ziil-taxi.ch/Covid" />
            </Helmet>
      <div>
        <div className="CovidDiv">
          <img className="imgCovid" src="covid-payment.png" />
          <div>
            <h1>Zahlung art</h1>
            <h2>Zahlung Methode</h2>
            <p>Bei uns Können sie mit:</p>
            <div className="ImgCV">
              <img className="paymentImg" src="v-pay.jpg" height="80" />
              <img className="paymentImg" src="twint-logo.png" height="80" />
              <img className="paymentImg" src="mastercard.png" height="80" />
              <img className="paymentImg" src="visa.jpg" height="80" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Covid;