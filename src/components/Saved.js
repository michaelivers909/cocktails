import React from "react";
import CocktailDisplay from "./CocktailDisplay";
import { connect } from "react-redux";
import { deleteSaved } from "../redux/actions";
import { rootReducer } from "../redux/reducers"

const Saved = (props) => {
    return (
    <>
      <h1></h1>
      <div>
        {props.saved.map((v) => (
          <CocktailDisplay
            gif={gif}
            key={v.id}
            drink={v}
            isSaved={savedIds.includes(v.id)}
            deleteSaved={props.Saved}
          />
        ))}
      </div>
    </>);
  };
    
  
  const mapDispatchToProps = {
    deleteSaved,
  };
  
  function mapStateToProps(state) {
    return {
      saved: state.saved,
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Saved);
  