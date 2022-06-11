import "../style/HomeS/Home.css";
import { Helmet } from 'react-helmet'
import Banner from "./Banner";
import Footer from "./Footer";
import styles from '../style/header/Home.module.css';

function Home() {
  return (
    
    <div className={styles.page}>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Ziil-Taxi Kreuzlingen</title>
              
                <meta property="og:title" content="ZIIL-TAXI: Jetzt dein taxi bestellen" />
                <meta property="og:description" content="Bestellen Sie ein taxi in umkreis Kreuzlingen, gerne wir begeleiten ihnen zu Flughafen bis zu ihrem lieblings einkaufladen." />
 
                <meta name="description" content="Bestellen Sie ein taxi in umkreis Kreuzlingen, gerne wir begeleiten ihnen zu Flughafen bis zu ihrem lieblings einkaufladen."/>
                <meta name="keywords" content="Flughafen, Preis, Kreuzlingen, Zürich, Konstanz, Taxi, Kurier" />
                <link rel="canonical" href="https://www.ziil-taxi.ch/" />
      </Helmet>
                                                    
{/* Testo */}
<Banner/>
<div className={styles.mainDiv}>
<div className={styles.container}>
<div className={styles.card_2}>
       
       <img
       className={styles.fill_cover} 
       src="./Taxi auto.jpg"
      
       />
</div>

      <div className={styles.card_1}>
                   <h1 className="h1text">Taxi</h1>
                   <p className="text">Von wo kann Ziil-taxi mich abholen?</p>
                   <p className="light-text">umkreis von kreuzlingen bis maximal 5 km</p>
                   <p className="text">Kann Ziil-Taxi mich von Zürich flughafen abholen?</p>
                   <p className="light-text">Natürlich</p>
                   <p className="text">Wir sind zu 6 ist das ein problem für Sie?</p>
                   <p className="light-text">Nein, nach dem vereinbarung <br/>wir werden Sie mit ein Mercedes Vito <br/>
                       abholen bis zu 7 sitzpläze, <p className="link-text">Hier klicken um das auto zu sehn.</p> </p>
      </div>
      </div>
  </div>
{/* Fine */}

{/* Testo */}
<div className={styles.mainDiv}>
<div className={styles.container}>
<div className={styles.card_2}>
       
       <img
       className={styles.fill_cover}
       src="./Flughafen-Zuerich_big_01.jpg"
       
       />
</div>
      <div className={styles.card_1}>
                   <h1 className="h1text">FLUGHAFEN TRASFERT</h1>
                   <p className="text">Von kann Ziil-taxi mich abholen?</p>
                   <p className="light-text">umkreis von kreuzlingen bis maximal 5 km </p>
                   <p className="text">Wie viel kostet bis zum zürich flughafen?</p>
                   <p className="light-text">Von Kreuzlingen bahnhof, kostet es 99 Chf. <br/> falls wir ihnen von zuhause abholen mussen <br/>
                   kann der preiss teuer werden.</p>
                   <p className="text">Kann Ziil-Taxi mich von Zürich flughafen abholen?</p>
                   <p className="light-text">Natürlich</p>
                   <p className="text">Wir sind zu 6 ist das ein problem für Sie?</p>
                   <p className="light-text">Nein, nach dem vereinbarung <br/>wir werden Sie mit ein Mercedes Vito <br/>
                       abholen bis zu 7 sitzpläze, <p className="link-text">Hier klicken um das auto zu sehn.</p> </p>
      </div>
      </div>
  </div>
{/* Fine */} 

{/* Testo */}
<div className={styles.mainDiv}>
<div className={styles.container}>
<div className={styles.card_2}>
       
                   <img
                   className={styles.fill_cover}
                   src="./eugene-chystiakov-B-h3so_5UKA-unsplash.jpg"
                   
                   />
    </div>
        <div className={styles.card_1}>
       
                   <h1 className="h1text">Kurier</h1>
                   <p className="text">Maximal gewicht?</p>
                   <p className="light-text">30 kg </p>
                   <p className="text">Was kann ziil-taxi mitbringen?</p>
                   <p className="light-text">Dokumente, Formulare, <br/> Pakete, Blumen, Fotos, Geschenke, usw…</p>
                   <p className="text">Bis wo kann mein packet Ziil-Taxi liefern?</p>
                   <p className="light-text">max-200km umkreis kreuzlingen</p>
        </div>
      </div>
  </div>
{/* Fine */}          
 <Footer/>
    
    </div>
  );
}

export default Home;
