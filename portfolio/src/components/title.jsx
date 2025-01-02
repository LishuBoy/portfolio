import React from "react";

const Titulo = (props) => {
    return (
      <div className="title-wrap">
         <span className="super-text">{props.texto2}</span>
         <h2 className="titulo-padrao">{props.texto}</h2>
      </div>
  );};

  export default Titulo