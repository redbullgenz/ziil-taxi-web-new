import Cover from "../components/Cover";
import Footer from "../components/Footer";

import "../style/CovidS/Covid.css";

function Covid() {
  return (
    <div>
      <div>
        <div className="CovidDiv">
          <img className="imgCovid" src="covid-payment.png" />
          <div>
            <h1>Unsere Trennwände schützen Sie vor Viren</h1>
            <a>wwww.bag.admin.ch </a>
            <h2>Zahlung Methode</h2>
            <div className="ImgCV">
              <img className="paymentImg" src="v-pay.jpg" height="80" />
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