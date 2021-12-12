import Cover from "../components/Cover";
import Footer from "../components/Footer";
import "../style/HomeS/Home.css";
import { Helmet } from 'react-helmet'

function Home() {
  return (
    
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Cover />
      <div>
        <div className="mainPage">
          
          <div>
          <div className="margin_">
          <div className="cardConte">
            <div className="iconC">
              <img src="./iconcovid.png" height="150" />
            </div>
            <div className="textC">
              <p className="titletextCard">COVID-19</p>
              <h5>Wir bieten für diese Coronazeiten <br/>
                Kleitransporte aller art wie</h5>
              <li>Medikamente</li>
              <li>Eilsendungen</li>
              <li>Personentransporte</li>
            </div>
          </div>
          </div>
          </div>


          <div className="margin_">
          <div className="cardConte">
            <div className="iconC">
              <img src="./icontaxi.png" height="150" />
            </div>
            <div className="textC">
              <p className="titletextCard">TAXI</p>
              <h5>Umkreis Kreuzlingen</h5>
              <li>Tägerwilen</li>
              <li>Bottighofen</li>
              <li>Lengwil</li>
            </div>
          </div>
          </div>


          <div className="margin_">
          <div className="cardConte">
            <div className="iconC">
              <img src="./iconkurier.png" height="150" />
            </div>
            <div className="textC">
              <p className="titletextCard">KURIER</p>
              <p className="textcard_">
                Kuriersendungen (Dokumente, Formulare, Pakete, Blumen, Fotos,
                Geschenke, usw…) in kürzester Zeit an den gewünschten
                Bestimmungsort. Ihre Anfrage nehmen wir gerne telefonisch 079
                400 11 11 oder über unser Kontaktformular entgegen.Express
                Kurierservice: Ob Brief, Dokument, Pass, Blutprobe, Medikamente
                nennen Sie uns Ihre Anforderung, wir finden die passende Lösung.
                (Pakete bis 30 kg.)
              </p>
            </div>
          </div>
          </div>
        
          <div className="margin_">
          <div className="cardConte">
            <div className="iconC">
              <img src="./iconflug.png" height="150" />
            </div>
            <div className="textC">
              <p className="titletextCard">FLUGHAFEN TRANSFER</p>
              <p className="textcard_">
                Sie freuen sich auf Ihren Urlaub, wissen aber noch nicht, wer
                Sie zum Flughafen bringt? Sie müssen auf eine Geschäftsreise,
                möchten Ihr Auto aber nicht den ganzen Tag auf dem
                Flughafenparkplatz abstellen? Wir befördern Sie gerne! Bestellen
                Sie unser Taxi telefonisch oder via E-Mail Formular auf dieser
                Webseite. Wir werden Ihre Bestellung umgehend bestätigen und
                holen Sie pünktlich ab. Sie sind gerade gelandet und suchen nun
                nach einem komfortablen Weg, um nach Hause oder ins Hotel zu
                kommen? Nach vorheriger Taxibestellung können wir Sie direkt
                nach der Zollkontrolle mit einem Namensschild abholen!
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
