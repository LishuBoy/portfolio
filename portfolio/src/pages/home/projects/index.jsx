import React from "react";
import Titulo from "../../../components/title";
import StaticExample from "../../../components/modal";

function Projects(){
    return(
        <div id="projects" className="my-container projects">
            <Titulo texto="my projects" texto2="what have I already done"/>
            <StaticExample/>
        </div>   
    )
}

export default Projects