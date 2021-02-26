import React, { useState } from "react";
import { alcoholTypes } from "../shared/AlcoholTypes";

const Search = (props) => {
    const [query, setQuery] = useState("");
    const [alcohol, setAlcohol] = useState("");
    // const [cocktail, setCocktail] = useState("");
    const [error, setError] = useState("");
    const [savedwwIds, setSavedIds] = useState([]);

    async function getCocktails(query, alcohol) {
      const url = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${query}&php?i=${alcohol}`;
      try {
        setError("");
        let response = await fetch(url);
        let json = await response.json();
        let resCocktails = json.drinks.map((val) => {
          let ingredients = [];
          for (let i =1; i <= 15; i++) {
            if (val[`val[strIngredient${i}`] !==null) {
              ingredients.push({
                ingredient: val[`strIngredient${i}`],
                measure: val[`strMeasure${i}`],
              });
            }
          }
          return {
            drink: val.strDrink,
            thumbnail: val.strDrinkThumb,
            ingredients: val.ingredients,
            instructions: val.strInstructions,
          };
        });
        props.setSearch(resCocktails);
      } catch (e) {
        setError("Something went wrong. Check your search parameters.");
        props.setQuery([]);
      }
    }
  

    return (
        <>
        <div>
          <form>
            <h1>Search By Cocktail or Alcohol Type</h1>
            <div>
            <label for="query">Enter A Cocktail Name</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              id="query"
              placeholder="Cocktail Name"
            />
            </div>
            <div>
            <label for="alcohol">Choose an Alcohol Type</label>
            <select
              onChange={(e) => {
                setAlcohol(e.target.value);
                console.log(e.target.value);
              }}
            >
              ;
              { alcoholTypes.map((option) => (
                <option value={option.value}>{option.view}</option>
              ))}
            </select>
            </div>
            <div>
            <button
              className="submit"
              onClick={() => getCocktails(query, alcohol)}
            >
              I'm Thirsty!
            </button>
            </div>
            <div>
                {error.length > 0 && <h1>{error}</h1>}
                {error.length === 0 &&
                props.gifs.map((v) => (
                <CocktailDisplay
                key={v.id}
                gif={v}
                isFavorite={faveIds.includes(v.id)}
                deleteFavorite={props.deleteFavorite}
                addFavorite={props.addFavorite}
            />
            ))}
            </div>
          </form>
        </div>
      </>
  );    
};  

export default Search;
