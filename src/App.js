import React from "react";
import Search from "./components/Search";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <nav>
          <NavLink to="/Login">Login</NavLink>
          <NavLink to="/Search">Saved Cocktails</NavLink>
          <NavLink to="/Saved">Search</NavLink>
        </nav>
        <div>
          <Search/>
        </div>
      </>
    </Router>
  );
}

export default App;
