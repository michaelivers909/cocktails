import React, { useState } from "react";
import { addSaved, deleteSaved } from "../redux/actions";

const CocktailDisplay = ({ drink, gif, addSaved, deleteSaved, isSaved }) => {
  console.log(drink);
  return (
    <div className="drink-container background-everything">
      <h2>Cocktail Results</h2>
      <img className="img-gif center" src={gif} alt="drunk gif" />
      <div>{drink.drink}</div>
      <img className="img-drink center" src={drink.thumbnail}></img>
      <div>
        {drink.ingredients.map((v, i) => {
          return (
            <div>
              Ingredient {i + 1}: {v.ingredient} Measure: {v.measure}
            </div>
          );
        })}
      </div>
      <div>{drink.instructions}</div>

      <button 
        onClick={(e) => {
          e.preventDefault(); 
          
          addSaved(gif, drink)}}>Save This Cocktail!</button>
      <button className=""
        onClick={(e) => {
          e.preventDefault();
          deleteSaved(drink.id)}}>Delete From Saved Cocktails</button>
    </div>
  );
};

export default CocktailDisplay;
