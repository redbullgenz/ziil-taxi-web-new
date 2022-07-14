import DataPicker from "./DataPicker";
import styles from '../style/header/FormKurier.module.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from "./Footer";

const FormKurier = () => {
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

    <div className={styles.main_div}>
    <form className="form" ref={form} onSubmit={sendEmail}>
         
    <h1>KURIER BOOKING</h1>
    
    <div className="divForm"> 
    <div className="label_input">
    <label type="text" for="fname" className="label">Vorname </label>
    <input type="text" id="fname"  placeholder="" className="input" value="" name="user_vorname"></input>
    <label for="fname" className="label">Nachname</label>
    <input type="text" id="fname" name="user_nachname" placeholder="" className="input" ></input>
    <label type="email" for="fname" className="label" >E-Mail</label>
    <input type="text" id="fname" name="user_email" placeholder="" className="input" ></input>
    <label for="fname" className="label">Von:</label>
    <input type="text" id="fname" name="user_vonAbholung" placeholder="" className="input" ></input>
    <label for="fname" className="label">Zu:</label>
    <input type="text" id="fname" name="user_zuAbholung" placeholder="" className="input" ></input>
    <label for="fname" className="label">um wie viel Uhr:</label>
    <DataPicker/>
    <label for="fname" className="label">KG:</label>
    <input type="text" id="fname" name="user_kg" placeholder="" className="input"></input>
    <label for="fname" className="label">Was wird transportiert?</label>
    <select id="country" name="user_items" className="input">
            <option value="australia">Medikamente</option>
            <option value="canada">Brief</option>
            <option value="usa">Olthers</option>
            
    </select>
    </div>
    </div>


    <div className="label_input">  
    <label for="fname" className="label">Nachricht</label>
    <textarea name="message" type="text" id="fname"  placeholder="" className="inputMessage" value=""></textarea>
    </div>
    <input className="btn_submit" type="submit" value="Send">Senden</input>
    </form>
    <Footer />
    </div>
  )
}

export default FormKurier