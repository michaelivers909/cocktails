import React from "react";
import Search from "./components/Search";
import { NavLink, Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Saved from "./components/Saved";
import Login from "./components/Login";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import "./App.css";


function App() {
  return (
    <Provider store={Store}>
    <Router>
      <>
        <nav className="navContainer">
          <NavLink to="/Login" className=" navLink text-center" activeClassName="active-link">Login</NavLink>
          <NavLink to="/Search" className="navLink text-center" activeClassName="active-link">Search</NavLink>
          <NavLink to="/Saved" className=" navLink text-center"activeClassName="active-link">Saved Cocktails</NavLink>
        </nav>
        <main>
          <Switch>
            <Route path="/Login" component={Login} /> 
            <Route path="/Search" component={Search} />
            <Route path="/Saved" component={Saved} /> 
            <Route path="*">
              <Redirect to="/Search" />
            </Route>
          </Switch>
        </main>
      </>
    </Router>
    </Provider>
  );
}

export default App;
