import React, { useState } from "react";

const CocktailDisplay = ({ drink, gif, addSaved, deleteSaved }) => {
  console.log(drink);
  return (
    <div>
      <h2></h2>
      <img src={gif} alt="drunk gif" />
      <div>{drink.drink}</div>
      <img src={drink.thumbnail}></img>
      <div>
        {drink.ingredients.map((v, i) => {
          return (
            <div>
              ingredient: {i + 1}: {v.ingredient} measure: {v.measure}
            </div>
          );
        })}
      </div>
      <div>{drink.instructions}</div>

      <button onClick={() => addSaved(gif.id)}></button>
      <button onClick={() => deleteSaved(gif.id)}></button>
    </div>
  );
};

export default CocktailDisplay;
