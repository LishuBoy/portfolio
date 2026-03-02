import React from "react";

const Stripe = (props) => {
    return(
        <div className="stripe-wrapper">
            <div className="stripe-1">
                <div className="gira">
                    <div className="titulo-stripe">{props.text1}<span className="dif">{props.text2}</span></div>
                    <img src="/images/logo.png"/>
                </div>
                <div className="gira">
                    <div className="titulo-stripe">{props.text1}<span className="dif">{props.text2}</span></div>
                    <img src="/images/logo.png"/>
                </div>
            </div>
        </div>
    );
}

export default Stripe