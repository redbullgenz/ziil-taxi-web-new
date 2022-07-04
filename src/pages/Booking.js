import { styles } from '@material-ui/pickers/views/Calendar/Calendar'
import React from 'react'
import stylese from '../style/header/Booking.module.css';
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Booking() {
  return (
    <div>
        <div className={stylese.bookingdiv}>
        <div className={stylese.title}>BOOKING ONLINE</div>
        <div>Wählen sie ihre fahrt</div>
        <div className={stylese.pogress_div}> 
            <div className={stylese.load_progressActive}></div>
            <div className={stylese.load_progress}></div>
            <div className={stylese.load_progress}></div>
        </div>
        <div className={stylese.selector_div}>
        <div className={stylese.buttonSelecter}>
            <div className={stylese.logo_div}>
            <img
       className={stylese.logo_div} 
       src="./Taxi.png"
      
       />
            </div>
            <Link to="./Classic" activeClassName="selected"><button className={stylese.button}>CLASSIC FAHRT</button></Link>
        </div>

        <div className={stylese.buttonSelecter}>
            <div className={stylese.logo_div}>
            <img
       className={stylese.logo_div} 
       src="./plane.png"
      
       />
            </div>
            <Link to="./FlughafenBooking" activeClassName="selected"><button className={stylese.button}>FLUGHAFEN</button></Link>
        </div>
        
        <div className={stylese.buttonSelecter}>
            <div className={stylese.logo_div}>
            <img
       className={stylese.logo_div} 
       src="./kurier.png"
      
       />
            </div>
            <Link to="./KurierBooking" activeClassName="selected"><button className={stylese.button}>KURIER</button></Link>
        </div>
            
        </div>
        </div>

        <Footer />
    </div>
  )
}

export default Booking