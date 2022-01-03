import "../style/CoverS/CoverS.css";

function Cover() {
  return (
    <div>
      <div className="Cover">
        <img src="googlemaps.png" className="background" />
        <a href="https://www.k12-kiosk.ch" target="_blank" className="k12Link">
          <div className="mini_text">
          <img src="K12Button.svg" width="180px"></img>
          </div>
        </a>

        
        <div className="texttileHead">
          <h1> ZIIL-TAXI</h1>
          <div className="background_text">
          <a href="tel:+41794001111" className="phoneLink">
            079 400 11 11
          </a>
          </div>
      
          <h4>BESTELL DIR JETZT DEIN TAXI <h4>MIT EIN <a className="color_"> SMS</a> ODER PER <a className="color_"> WHATSAPP</a></h4>  </h4>
          <div>
          <div className="call_icon">
            <a className="link_phone" href="tel:+41794001111">
          <div className="tooltip_" >Hier klicken um ein taxi zu bestellen</div>
          <img src="icontelefon.png" height="50px"/>
          </a>

          <a className="link_phone" href="https://wa.me/41794001111">
          <div className="tooltip_d">Hier klicken um ein taxi zu bestellen</div>
          <img src="iconwhatsapp.png"   height="50px"/>
          </a>
          </div>
          <a className="link_phone" href="sms:+41794001111">
          <div className="tooltip_d">Hier klicken um ein taxi zu bestellen</div>
          <div className="sms_">SMS</div>
          </a>

          <div className="k12-container">
          <a href="https://www.k12-kiosk.ch" target="_blank" className="k12Link2">
          <div className="mini_text">
          <img src="K12Button.svg" width="170px"></img>
          </div>
        </a>
        </div>
      
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Cover;
