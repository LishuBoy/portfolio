import React from "react";
import { ContactUs } from "../../../components/form";

function Contact (){
    return(
        
        <div id="contact" className="contact">
            <div class="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="my-container contact-wrap">
                <div className="text-contact">
                    <div className="icons">
                        <div className="icon-ctt">
                            <div className="icon"><img src="/images/chat.svg"/></div>
                            <div className="content">
                                <span className="nome">Chat me</span>
                                <p>Our friendly team is here to help.</p>
                                <span className="value">caiquetancredi@gmail.com</span>
                            </div>
                        </div>
                        <div className="icon-ctt">
                            <div className="icon"><img src="/images/phone.svg"/></div>
                            <div className="content">
                                <span className="nome">Call me</span>
                                <p>Mon-Fri from 8-am to 5pm.</p>
                                <span className="value">caiquetancredi@gmail.com</span>
                            </div>
                        </div>
                        <div className="icon-ctt">
                            <div className="icon"><span class="material-symbols-rounded">forum</span></div>
                            <div className="content">
                                <span className="nome">Chat to us</span>
                                <p>Our friendly team is here to help</p>
                                <span className="value">caiquetancredi@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="socials">
                        <a className="btn-social" href="#"><i class="bi bi-instagram"></i></a>
                        <a className="btn-social" href="#"><i class="bi bi-whatsapp"></i></a>
                        <a className="btn-social" href="#"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
                
                <ContactUs/>
            </div>
            
        </div>
        
        
    )
}


export default Contact