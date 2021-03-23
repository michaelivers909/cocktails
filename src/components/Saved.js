import React from "react";
import CocktailDisplay from "./CocktailDisplay";
import { connect } from "react-redux";
import { deleteSaved } from "../redux/actions";

const Saved = (props) => {
    return (
    <>
    <div className="background-everything text-center">
      <h1>Saved Cocktails</h1>
      {props.saved.length && (
      <div>
        {props.saved.map((v) => (
          <CocktailDisplay
            gif={v.gif}
            key={v.drink_id}
            drink={v}
            isSaved={true}
            deleteSaved={props.deleteSaved}
          />
        ))}
      </div>
      )}
      {props.saved.length === 0 && (
        <h2>You don't have any saved cocktails yet!</h2>
      )}
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
  