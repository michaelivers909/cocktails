import React, { useState } from "react";

const CocktailDisplay = ({drink, gif, addSaved, deleteSaved }) => {
    return (
    <div>
    <h2 ></h2>
    <img src={gif} alt="drunk gif"/>

    <button 
            onClick={()=>addSaved(gif.id)}></button>
    <button
            onClick={()=>deleteSaved(gif.id)}></button>
    </div>
    );
};

export default CocktailDisplay;




