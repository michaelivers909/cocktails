import React from "react";
import CocktailDisplay from "./CocktailDisplay";
import { connect } from "react-redux";
import { deleteSaved } from "../redux/actions";

const Saved = (props) => {
    return (
    <>
    <div className="background-everything text-center">
      <h1>Saved Cocktails</h1>
      <div>
        {props.saved.map((v) => (
          <CocktailDisplay
            // gif={gif}
            key={v.id}
            drink={v}
            isSaved={true}
            deleteSaved={props.deleteSaved}
          />
        ))}
      </div>
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
  