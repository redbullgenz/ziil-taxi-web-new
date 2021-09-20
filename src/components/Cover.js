import "../style/CoverS/CoverS.css";

function Cover() {
  return (
    <div>
      <div className="Cover">
        <img src="googlemaps.png" className="background" />
        <div className="texttileHead">
          <h1> ZIIL-TAXI</h1>
          <a href="tel:+41794001111" className="phoneLink">
            079 400 11 11
          </a>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Cover;
