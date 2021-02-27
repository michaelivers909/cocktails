import React, { useState, useMemo } from "react";
import { alcoholTypes } from "../shared/AlcoholTypes";
import { gifApi } from "../shared/GifApi";
import { setSearch, setUser, addSaved, deleteSaved } from "../redux/actions";
import { connect } from "react-redux";
import CocktailDisplay from "./CocktailDisplay";

const Search = (props) => {
  const [query, setQuery] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [cocktail, setCocktail] = useState("");
  const [error, setError] = useState("");
  const [gif, setGif] = useState("");
  const [random, setRandom] = useState("");

  const savedIds = useMemo(() => {
    return props.saved.map((drink) => drink.id);
  }, [props.saved]);

  async function getCocktails(query) {
    const url = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${query}`;
    try {
      setError("");
      let response = await fetch(url);
      let json = await response.json();
      console.log(json);
      let resCocktails = json.drinks.map((val) => {
        let ingredients = [];
        for (let i = 1; i <= 15; i++) {
          if (val[`strIngredient${i}`] !== null) {
            ingredients.push({
              ingredient: val[`strIngredient${i}`],
              measure: val[`strMeasure${i}`],
            });
          }
        }
        return {
          drink: val.strDrink,
          thumbnail: val.strDrinkThumb,
          ingredients: ingredients,
          instructions: val.strInstructions,
        };
      });
      console.log(resCocktails);
      props.setSearch(resCocktails);
    } catch (e) {
      setError("Something went wrong. Check your search parameters.");
      setQuery([]);
    }
  }

  async function getByAlcohol(alcohol) {
    const url = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${alcohol}`;
    try {
      setError("");
      let response = await fetch(url);
      let json = await response.json();
      console.log(json);
      let resCocktails = json.drinks.map((val) => {
        let ingredients = [];
        for (let i = 1; i <= 15; i++) {
          if (val[`strIngredient${i}`] !== null) {
            ingredients.push({
              ingredient: val[`strIngredient${i}`],
              measure: val[`strMeasure${i}`],
            });
          }
        }
        return {
          drink: val.strDrink,
          thumbnail: val.strDrinkThumb,
          ingredients: ingredients,
          instructions: val.strInstructions,
        };
      });
      const shuffled = [...resCocktails].sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, 5);

      console.log(selected);
      props.setSearch(selected);
    } catch (e) {
      setError("Something went wrong. Check your search parameters.");
      setAlcohol([]);
    }
  }

  async function getRandom() {
    const url = `https://www.thecocktaildb.com/api/json/v2/9973533/random.php`;
    try {
      setError("");
      let response = await fetch(url);
      let json = await response.json();
      console.log(json);
      let resCocktails = json.drinks.map((val) => {
        let ingredients = [];
        for (let i = 1; i <= 15; i++) {
          if (val[`strIngredient${i}`] !== null) {
            ingredients.push({
              ingredient: val[`strIngredient${i}`],
              measure: val[`strMeasure${i}`],
            });
          }
        }
        return {
          drink: val.strDrink,
          thumbnail: val.strDrinkThumb,
          ingredients: ingredients,
          instructions: val.strInstructions,
        };
      });
      console.log(resCocktails);
      props.setSearch(resCocktails);
    } catch (e) {
      setError("Something went wrong. Check your search parameters.");
      setRandom([]);
    }
  }

  

  return (
    <>
      <div>
        <form>
          <h1>Search By Cocktail or Alcohol Type</h1>
          <div>
            <label htmlFor="query">Enter A Cocktail Name</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              id="query"
              placeholder="Cocktail Name"
            />
          </div>
          <div>
            <button
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                getCocktails(query);
                getGifs();
              }}
            >
              I'm Thirsty!
            </button>
          </div>
          <div>
            <label htmlFor="alcohol">Choose an Alcohol Type</label>
            <select
              onChange={(e) => {
                setAlcohol(e.target.value);
                console.log(e.target.value);
              }}
            >
              ;
              {alcoholTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.view}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                getByAlcohol(alcohol);
                getGifs();
              }}
            >
              Get Me a Drink!
            </button>
          </div>
          <div>
            <button
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                getRandom(random);
                getGifs();
              }}
            >
              Get Me Anything
            </button>
          </div>
          <div>
            {error.length > 0 && <h1>{error}</h1>}
            {error.length === 0 &&
              props.cocktails.map((v) => (
                <CocktailDisplay
                  gif={gif}
                  key={v.id}
                  drink={v}
                  isSaved={savedIds.includes(v.id)}
                  deleteSaved={props.deleteSaved}
                  addSaved={props.addSaved}
                />
              ))}
          </div>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  setSearch,
  setUser,
  addSaved,
  deleteSaved,
};

function mapStateToProps(state) {
  return {
    globalState: state,
    cocktails: state.search,
    saved: state.saved,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
