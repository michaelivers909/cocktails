import React from "react";
import CocktailDisplay from "./CocktailDisplay";
import { connect } from "react-redux";
import { deleteSaved } from "../redux/actions";
import { getQueriesForElement } from "@testing-library/react";

const Saved = (props) => {
    return (
    <>
      <h1>Saved Cocktails</h1>
      <div>
        {props.saved.map((v) => (
          <CocktailDisplay
            // key=
            // gif={gif.id}
            key={v.id}
            drink={v}
            isSaved={true}
            deleteSaved={props.deleteSaved}
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
  