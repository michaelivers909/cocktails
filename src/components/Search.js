import React, { useState, useMemo } from "react";
import { alcoholTypes } from "../shared/AlcoholTypes";
import { setSearch, setUser, setGif, addSaved, deleteSaved } from "../redux/actions";
import { connect } from "react-redux";
import CocktailDisplay from "./CocktailDisplay";
import axios from "axios";
import { json } from "express";

const Search = (props) => {
  const [query, setQuery] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [error, setError] = useState("");
  const [random, setRandom] = useState("");

  const savedIds = useMemo(() => {
    return props.saved.map((drink) => drink.drink_id);
  }, [props.saved]);

  async function getCocktails(query) {
    const url = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${query}`;
    try {
      setError("");
      let response = await fetch(url);
      let json = await response.json();
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
          drink_id: val.idDrink,
        };
      });
      console.log(resCocktails)
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
      let resCocktails = json.drinks.map((val) => {
        let ingredients = [];
        for (let i = 1; i <= 15; i++) {
          if (val[`strIngredient${i}`] ) {
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
          drink_id: val.idDrink,
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
          drink_id: val.idDrink,
        };
      });
      props.setSearch(resCocktails);
    } catch (e) {
      setError("Something went wrong. Check your search parameters.");
      setRandom([]);
    }
  }

  async function getGif() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=pNd73F2GiTlIEcEnhFBLj9s6WZboo1qp&tag=drunk&rating=r`;
    let response = await fetch(url);
    let json = await response.json();
    let resGifs = json.data.images.original.url;
    console.log(resGifs);

    props.setGif(resGifs);
  }
  async function setSavedDb(drink, gif) {
    try {
      const json = await axios.post("/saved/add", {
          drink,
          gif
      });
      console.log(json);
      if (json.data.error) {
        setError(json.data.error);
      } else {
        props.addSaved(gif, drink);
        
      }
    } catch (err) {
      setError("Something went wrong, please try again later.");
    }
  }

    // async function deleteSavedDb(drink_id) {
      // try {
        // const jason = await axios.delete(`/saved/delete/${drink_id}`, {
          // drink_id
      // });
      // if(json.data.error) {
        // setError(json.data.error);
      // } else {
        // props.deleteSaved(drink_id);
      // }
    // } catch (err) {
      // setError("Something went wrong, please try again later.");
    // }
  // };
  




  return (
    <>
      <div className="background-everything text-center">
        <form className="form-container">
          <h1>Search By Cocktail or Alcohol Type</h1>
          <div>
            <div>
              <label htmlFor="query">Enter A Cocktail Name</label>
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              id="query"
              placeholder="Cocktail Name"
            />
          </div>
          <div>
            <button style={{marginBottom: "15px"}}
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                getCocktails(query);
                getGif();
              }}
            >
              I'm Thirsty!
            </button>
          </div>
          <div>
            <div>
              <label htmlFor="alcohol">Choose an Alcohol Type</label>
            </div>
            <div>
              <select
                onChange={(e) => {
                  setAlcohol(e.target.value);

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
          </div>
          <div>
            <button style={{marginBottom: "15px"}}
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                getByAlcohol(alcohol);
                getGif();
              }}
            >
              Get Me a Drink!
            </button>
          </div>
          <div>
            <div>
              <label>Get a Random Cocktail</label>
            </div>
            <button style={{marginBottom: "10px"}}
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                getRandom(random);
                getGif();
              }}
            >
              Get Me Anything!
            </button>
          </div>
        </form>

        <div>
          {error.length > 0 && <h1>{error}</h1>}
          {error.length === 0 && props.drinks.length > 0 && (
            <>
              <h2>Cocktail Results</h2>
              <div>
                {props.drinks.map((v) => (
                  <CocktailDisplay
                    gif={props.gif}
                    key={v.drink_id}
                    drink={v}
                    isSaved={savedIds.includes(v.drink_id)}
                    deleteSaved={deleteSaved}
                    addSaved={setSavedDb}
                  />
                ))}
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo(0, 0);
                }}
              >
                Back to Top
              </button>
              <div></div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  setSearch,
  setUser,
  setGif,
  addSaved,
  deleteSaved,
};

function mapStateToProps(state) {
  return {
    globalState: state,
    gif: state.gif,
    drinks: state.search,
    saved: state.saved,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
