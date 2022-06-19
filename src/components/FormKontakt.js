import DataPicker from "../components/DataPicker";
import React from 'react'

function FormKontakt() {
  return (
    <div><form className="form">
         
    <h1>KONTAKT</h1>
    
    <div className="divForm"> 
    <div className="label_input">
    <label for="fname" className="label">Vorname </label>
    <input type="text" id="fname" name="firstname" placeholder="" className="input" value=""></input>
    <label for="fname" className="label">Nachname</label>
    <input type="text" id="fname" name="firstname" placeholder="" className="input" value=""></input>
    <label for="fname" className="label">E-Mail</label>
    <input type="text" id="fname" name="firstname" placeholder="" className="input" value=""></input>
    </div>
    </div>


    <div className="label_input">  
    <label for="fname" className="label">Nachricht</label>
    <input type="text" id="fname" name="firstname" placeholder="" className="inputMessage" value=""></input>
    </div>
    <button className="btn_submit">Senden</button>
    </form></div>
  )
}

export default FormKontakt