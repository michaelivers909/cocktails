import React, { useEffect, useState} from "react";
import Search from "./components/Search";
import {
  NavLink,
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Saved from "./components/Saved";
import Login from "./components/Login";
import { DrinkContext, initialState } from "./shared/DrinkContext";
import { useSelector } from "react-redux";
import Store from "./redux/Store";
import "./App.css";
import axios from "axios";
import { useSelectors, useActionCreators } from "use-redux";
import { usernameSelector } from "./redux/selectors/UserSelectors";
import { clearUser, setUser } from "./redux/actions";
import SignUp from "./components/SignUp";

function App() {
  const [globalState, setGlobalState] = useState(initialState);
  const [username] = useSelectors(usernameSelector);
  const [logout, login] = useActionCreators(clearUser, setUser);

  useEffect(async () => {
    try {
      const json = await axios.get("/authenticate");
      if (json.data.success) {
        login(json.data.data.username);
      }
    } catch (err) {}
  }, []);
  return (
    
      <Router>
        <>
          <nav className="navContainer">
            <NavLink
              to="/Login"
              className=" navLink text-center"
              activeClassName="active-link"
            >
              Login
            </NavLink>
            <NavLink
              to="/Search"
              className="navLink text-center"
              activeClassName="active-link"
            >
              Search
            </NavLink>
            <NavLink
              to="/Saved"
              className=" navLink text-center"
              activeClassName="active-link"
            >
              Saved Cocktails
            </NavLink>
          </nav>
          <main>
            <Switch>
              <Route path="/Login" component={Login} />
              <Route path="/SignUp" component={SignUp}/>
              <Route path="/Search" component={Search} />
              <Route path="/Saved" component={Saved} />
              <Route path="*">
                <Redirect to="/Search" />
              </Route>
            </Switch>
          </main>
        </>
      </Router>
    
  );
}

export default App;
