import DataPicker from "../components/DataPicker";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormKontakt = () => {

  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1oxdvoc', 'template_oajqvtc', form.current, 'i_U9_Bw4a-U8yNi_G')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div>
    <form className="form" ref={form} onSubmit={sendEmail}>
         
    <h1>KONTAKT</h1>
    
    <div className="divForm"> 
    <div className="label_input">
    <label for="fname" className="label">Vorname </label>
    <input type="text" name="user_vorname"  className="input" ></input>
    <label for="fname" className="label">Nachname</label>
    <input type="text" name="user_nachname"  className="input" ></input>
    <label for="fname" className="label">E-Mail</label>
    <input type="text" name="user_email"  className="input" ></input>
    </div>
    </div>


    <div className="label_input">  
    <label for="fname" className="label">Nachricht</label>
    <textarea name="message"  className="inputMessage" ></textarea>
    </div>
    <input  className="btn_submit" type="submit" value="Senden"/>
    </form>
    </div>
  )
}

export default FormKontakt