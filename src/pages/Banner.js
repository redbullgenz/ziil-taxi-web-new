import React from 'react'
import styles from '../style/header/Banner.module.css'
import { iconLinks } from "../pages/data";



export default function Banner() {
  return (

    <div className={styles.container}>
        {/* 


            <div className={styles.cover}>
                <video autoPlay muted loop className={styles.video}>
                    <source src="Kreuzlingen _ Konstanz - DJI MAVIC Video Test.mp4" type='video/mp4' />
                </video>
            
            </div>

            <div className={styles.itemsCover}>
                <div>
                <p className="title" >ZIIL-TAXI</p>
                <a className="nummer" href="tel:+41794001111" alt="Handy Nummero">079 400 11 11</a>
                <p className="text">BESTELL DIR JETZT DEIN TAXI <br/>
                   MIT EIN <bold className="link-text">SMS</bold> ODER PER <bold className="link-text">WHATSAPP</bold>
                </p>
                    <div className={styles.div_background}>
                    {iconLinks.map((link, index) => {
                        if (link.id === true) {
                        return (
                        <div>
                            <a className={styles.itemsDiv} href={link.path}>
                                <div>
                                    <div className={styles.text} key={index}>{link.description}</div>
                                </div>
                                <div className={styles.img} style={{backgroundColor: link.color_}}> 
                                    <div className={styles.img2}>
                                        <img
                                            src={link.src}
                                            width="50px"
                                            height="50px"
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                        );
                    }

                    if (link.id === false) {
                        return (
                        <div>
                            <a className={styles.itemsDiv} href={link.path}>
                                
                                <div className={styles.img} style={{backgroundColor: link.color_}}>
                                    <div className={styles.img2}>
                                        <img
                                            src={link.src}
                                            width="50px"
                                            height="50px"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.text2} key={index}>{link.description}</div>
                                </div>
                            </a>
                        </div>
                        );
                    }
                })}
                    </div>

                </div>
                <div className={styles.Title}>Zahlung art: </div>
                <div className={styles.dividerZahlungArt}>
                <img className={styles.img_zahlung} src="Visa.svg"  />
                <img className={styles.img_zahlung2} src="MasterCard.svg"  />
                <img className={styles.img_zahlung} src="v-pay.jpg"  />
                <img className={styles.img_zahlung} src="v-pay.jpg"  />
                
                </div>
            </div>
            A JSX comment */}

            <div className={styles.ferien}>
                <div className={styles.ferientext}>
                    Wir sind ab den 13.07.2022 bis den 31.07.2022 in die Ferien
                </div>
            </div>


                <div className={styles.divider}></div>
    </div>
  )
}
