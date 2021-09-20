import "../style/FooterS/Footer.css";

function Footer() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="divFooter">
            <div className="footermenu">
              <h3>INFO</h3>
              <a>Sie können mich gerne jeder zeit ereischen </a>
              <a href="mailto:info@ziil-taxi.ch" className="FooterLink">
                E: info@ziil-taxi.ch
              </a>
              <a href="tel:+41794001111" className="FooterLink">
                P: 079 400 11 11
              </a>
            </div>

            <div className="footermenu">
              <h3>PATNER</h3>
              <a>K-12 Kiosk</a>
            </div>

            <div className="footermenu">
              <h3>Folgen Sie mir auf</h3>
              <a href="https://wa.me/+41794001111" className="FooterLink">
                {" "}
                Instagram
              </a>
            </div>

            <div className="footermenu">
              <h3>KONTAKT</h3>
              <a>
                <a href="https://wa.me/+41794001111" className="FooterLink">
                  WhatsApp
                </a>
              </a>
              <a>
                <a href="https://" className="FooterLink">
                  Telegram
                </a>
              </a>

              <a>
                <a href="tel:+41794001111" className="FooterLink">
                  SMS
                </a>
              </a>
            </div>
          </div>
        </div>
        <div className="Acover">Powered by Albert Z</div>
      </div>
    </div>
  );
}

export default Footer;
