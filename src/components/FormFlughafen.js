import DataPicker from "../components/DataPicker";
import Footer from "./Footer";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import stylese from '../style/header/FormFlug.module.css';

const FormFlughafen = () => {

  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1oxdvoc', 'template_vgjdrng', form.current, 'i_U9_Bw4a-U8yNi_G')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  

  return (
    <div>
    <div className={stylese.maindiv_}>
    <form className="form" ref={form} onSubmit={sendEmail}>     
    <h1>FLUGHAFEN BOOKING</h1> 
    <div className="divForm"> 
    <div className="label_input">
    <label for="fname" className="label">Vorname </label>
    <input type="text" id="fname" name="user_vorname" placeholder="" className="input" ></input>
    <label for="fname" className="label">Nachname</label>
    <input type="text" id="fname" name="user_nachname" placeholder="" className="input" ></input>
    <label for="fname" className="label">E-Mail</label>
    <input type="text" id="fname" name="user_email" placeholder="" className="input" ></input>
    <label for="fname" className="label">Von:</label>
    <input type="text" id="fname" name="user_vonAbholung" placeholder="" className="input" ></input>
    <label for="fname" className="label">Zu:</label>
    <input type="text" id="fname" name="user_zuAbholung" placeholder="" className="input"></input>
    <label for="fname" className="label">um wie viel Uhr:</label>
    <DataPicker/>
    <label for="fname" className="label">Personen</label>
    <select id="country" name="user_personen"  className="input">
            <option value="australia">1</option>
            <option value="canada">2</option>
            <option value="usa">3</option>
            <option value="australia">4</option>
            <option value="canada">5</option>
            <option value="usa">6</option>
            <option value="usa">7 max</option>
            
    </select>
    <label for="fname" className="label">Gate:</label>
    <select id="country" name="user_gate" className="input">
            <option value="australia">1</option>
            <option value="canada">2</option>
            <option value="usa">3</option>
            
    </select>
    </div>
    <div className="label_input">  
    <label for="fname" className="label">Nachricht</label>
    <input type="text" id="fname" name="message" placeholder="" className="inputMessage"></input>
    </div>
    <button type="submit" value="Send" className="btn_submit">Senden</button>
    </div>
    </form>
    </div>
    <Footer />
    </div>
  )
}

export default FormFlughafen