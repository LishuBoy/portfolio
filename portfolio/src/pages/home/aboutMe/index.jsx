import React from "react";
import Titulo from "../../../components/title";

function Aboutme(){
    return(
        <div id="aboutme" className="about-me my-container">
            
            <div className="me-wrap">
                <div className="img-wrap">
                    <img src="images/me.png"/>
                </div>
                <div className="wrap-text">
                    <Titulo texto="About me" texto2="get to know a little " />
                    <div>
                        <p>Hi! My name is Caique, I’m 21 years old, and I’m a web developer passionate about creating dynamic and functional digital experiences. With two years of experience in the field, I specialize in <span className="destaque">front-end development</span>, focusing on turning ideas and designs into attractive and accessible user interfaces.</p>
                        <p>I work with a wide range of technologies and tools, including<span className="destaque"> ReactJS, HTML, CSS, JavaScript, Bootstrap, WordPress, WooCommerce, Shopify/Liquid, and PHP</span> . I also have experience with Figma, which helps me collaborate effectively with designers and ensure design consistency throughout projects.</p>
                        <p>I’m a calm and easygoing person, qualities that help me stay focused and efficient when solving challenges, always striving to deliver high-quality solutions. I’m continuously learning and staying up-to-date with market trends to ensure my projects align with the best practices and innovations in the industry.</p>
                        <p>If you’re looking for someone committed and detail-oriented to bring your next digital project to life, <span className="destaque">I’m here to help!</span></p>
                    </div>
                    <div className="btns-wrap">
                        <a className="btn-social" href=""><span>Whatsapp</span><i className="bi bi-whatsapp"></i></a>
                        <a className="btn-social" href=""><span>Instagram</span><i className="bi bi-instagram"></i></a>
                        <a className="btn-social" href=""><span>LinkedIn</span><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme