import DataPicker from "../components/DataPicker";
import React from 'react'

function FormFlughafen() {
  return (
    <div><form className="form">
         
    <h1>FLUGHAFEN BOOKING</h1>
    
    <div className="divForm"> 
    <div className="label_input">
    <label for="fname" className="label">Vorname </label>
    <input type="text" id="fname" name="firstname" placeholder="" className="input" value=""></input>
    <label for="fname" className="label">Nachname</label>
    <input type="text" id="fname" name="firstname" placeholder="" className="input" value=""></input>
    <label for="fname" className="label">E-Mail</label>
    <input type="text" id="fname" name="firstname" placeholder="" className="input" value=""></input>
    <label for="fname" className="label">Von:</label>
    <input type="text" id="fname" name="firstname" placeholder="" className="input" value=""></input>
    <label for="fname" className="label">Zu:</label>
    <input type="text" id="fname" name="firstname" placeholder="" className="input" value=""></input>
    <label for="fname" className="label">um wie viel Uhr:</label>
    <DataPicker/>
    <label for="fname" className="label">Personen</label>
    <select id="country" name="country" className="input">
            <option value="australia">1</option>
            <option value="canada">2</option>
            <option value="usa">3</option>
            <option value="australia">4</option>
            <option value="canada">5</option>
            <option value="usa">6</option>
            <option value="usa">7 max</option>
            
    </select>
    <label for="fname" className="label">Gate:</label>
    <select id="country" name="country" className="input">
            <option value="australia">1</option>
            <option value="canada">2</option>
            <option value="usa">3</option>
            
    </select>
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

export default FormFlughafen