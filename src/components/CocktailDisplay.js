import React, { useEffect, useState } from "react";
// 
// const [error, setError] = useState("");
// 
// 
// async function moreInfo(id) {
  // const url = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${id}`;
  // try {
    // setError("");
    // let response = await fetch(url);
    // let json = await response.json();
    // let resCocktails = json.drinks.map((val) => {
      // let ingredients = [];
      // for (let i = 1; i <= 15; i++) {
        // if (val[`strIngredient${i}`] !== null) {
          // ingredients.push({
            // ingredient: val[`strIngredient${i}`],
            // measure: val[`strMeasure${i}`],
          // });
        // }
      // }
      // return {
        // drink: val.strDrink,
        // thumbnail: val.strDrinkThumb,
        // ingredients: ingredients,
        // instructions: val.strInstructions,
        // id: val.idDrink,
      // };
    // });
    // console.log(resCocktails)
    // props.setSearch(resCocktails);
  // } catch (e) {
    // setError("Something went wrong. Check your search parameters.");
    // 
    // setQuery([]);
  // }
// }
// 
// 
// 
// needs to be in curly brackets
const CocktailDisplay = ({ drink, gif, addSaved, deleteSaved, isSaved}) => {
  console.log(drink)
  return (
    <div className="drink-container background-everything">
      <img className="img-gif center" src={gif} alt="drunk gif" />
      <h3>{drink.drink}</h3>
      <img className="img-drink center" src={drink.thumbnail}></img>
      <div> 
        {drink.ingredients.map((v, i) => {
          return (
            <div key={i}>
              Ingredient {i + 1}: {v.ingredient}, &nbsp;&nbsp; Measurement: {" "}
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
            addSaved(drink, gif);
          }}
        >
          {" "}
          Save This Cocktail!
        </button>
      )}
      {isSaved && (
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteSaved(drink.drink_id);
          }}
        >
          {" "}
          Delete From Saved Cocktails
        </button>
      )}
      <div>
      {!isSaved && drink.ingredients.length === 0 && (
        <button
        onClick={(e) => {
          e.preventDefault();
          // moreInfo(drink.id);
        }}
        >
         {" "} 
         Get Cocktail Information
        </button>
      )}
      </div>
    </div>
  );
};

export default CocktailDisplay;
