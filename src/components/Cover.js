import "../style/CoverS/CoverS.css";

function Cover() {
  return (
    <div>
      <div className="Cover">
        <img src="googlemaps.png" height="100%" width="100%" title="Bild von Kreulingen" alt="colver bild von kreulingen von oben" className="background" />

        
        <div className="texttileHead">
          <p className="title-big"> ZIIL-TAXI</p>
          <div className="background_text">
          <a href="tel:+41794001111" className="phoneLink">
            079 400 11 11
          </a>
          </div>
      
          <p>BESTELL DIR JETZT DEIN TAXI <p>MIT EIN <a className="color_"> SMS</a> ODER PER <a className="color_"> WHATSAPP</a></p>  </p>


          <div className="xx_">

          <div className="xx_">

          <a className="background_icon" href="tel:+41794001111">
          <div className="text_btn_cover">Hier Klicken und <br/> <br/><br/> <br/>mit ein <br/> <br/><br/> <br/> anruf ein Taxi <br/> <br/><br/> <br/> bestellen</div>
          <div className="icon_btn_cover">

          <img src="icontelefon.png" height="50px" width="50" alt="icon von telefon" title="Telefon"/>
          </div>
          </a>

          <a className="background_icon2" href="https://wa.me/41794001111">
          <div className="text_btn_cover">Hier Klicken und <br/> <br/><br/> <br/>ein Taxi <br/> <br/><br/> <br/> per WhatsApp <br/> <br/><br/> <br/> bestellen</div>
            <div className="icon_btn_cover">
          <img src="iconwhatsapp.png"   height="50px" width="50" alt="icon von WhatsApp" title="WhatsApp"/>
              </div>
          </a>

          
          <a className="sms_" href="sms:+41794001111">
            <div className="text_btn_cover">Hier Klicken und <br/> <br/><br/> <br/>ein Taxi per SmS <br/> <br/><br/> <br/> bestellen</div>
            <div className="icon_btn_cover">
            <img src="sms.png"   height="50px" width="50" alt="icon von sms" title="sms"/>
              </div>
            
            </a>

            <a className="k12" href="https://www.k12-kiosk.ch/">
            <div className="text_btn_cover">Hier Klicken und <br/> <br/><br/> <br/>Tabak waren <br/> <br/><br/> <br/> zu kaufen <br/> <br/><br/> <br/> mit Ziil-taxi</div>
            <div className="icon_btn_cover">
            <img src="k12me.png"   height="30px" width="50px" alt="icon von k12" title="k12"/>
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
