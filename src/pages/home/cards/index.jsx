import React from "react";


function Cards({data}){
    return(
        <div id="whatido" className="cardsWrap  my-container">
            {data.map((card) =>(
                <div className="my-card" key={card.id}>
                    <div className="icon">
                        <img src={card.svg} className="svg"/>
                    </div>
                    <div className="name">{card.name}</div>
                    <div className="texto">{card.texto}</div>
              </div>
            ))}
        </div>
    )
}

export default Cards;

