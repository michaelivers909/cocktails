import React from "react";

const CocktailDisplay = ({ drink, gif, addSaved, deleteSaved, isSaved }) => {
  return (
    <div className="drink-container background-everything">
      <img className="img-gif center" src={gif} alt="drunk gif" />
      <h3>{drink.drink}</h3>
      <img className="img-drink center" src={drink.thumbnail}></img>
      <div>
        {drink.ingredients.map((v, i) => {
          return (
            <div key={i}>
              Ingredient {i + 1}: {v.ingredient}, &nbsp;&nbsp; Measurement:{" "}
              {v.measure}
            </div>
          );
        })}
      </div>
      <div>{drink.instructions}</div>
      {!isSaved && (
        <button
          onClick={(e) => {
            e.preventDefault();
            addSaved(gif, drink);
          }}
        >
          {" "}
          Save This Cocktail!
        </button>
      )}
      {isSaved && (
        <button
          className=""
          onClick={(e) => {
            e.preventDefault();
            deleteSaved(drink.id);
          }}
        >
          {" "}
          Delete From Saved Cocktails
        </button>
      )}
    </div>
  );
};

export default CocktailDisplay;
