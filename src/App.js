import React, { useEffect, useMemo, useState} from "react";
import Search from "./components/Search";
import {
  NavLink,
  Switch,
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";
import Saved from "./components/Saved";
import Login from "./components/Login";
import { DrinkContext, initialState } from "./shared/DrinkContext";
import "./App.css";
import axios from "axios";
import { useSelectors, useActionCreators } from "use-redux";
import { usernameSelector, userSelector } from "./redux/selectors/UserSelectors";
import { clearSearch, clearUser, clearSaved, setUser } from "./redux/actions";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./shared/ProtectedRoute";

function App() {
  const [globalState, setGlobalState] = useState(initialState);
  const [username, user] = useSelectors(usernameSelector, userSelector);
  const [clearUserFromState, setUserInState, clearSearchInState, clearSavedInState] = useActionCreators(
    clearUser,
    setUser,
    clearSearch,
    clearSaved
  );

  const isAuth = useMemo(() => {
    return username.length > 0;
  }, [user]);

  useEffect(async () => {
    try {
      const json = await axios.get("/users/authenticate");
      if (json.data.success) {
        setUserInState(json.data.data.username);
      }
    } catch (err) {}
  }, []);

  async function logout() {
    try {
      const { data } = await axios("/users/logout");
      clearUserFromState(); 
      clearSearchInState(); 
      clearSavedInState();
    } catch (err) {

    }
  }
  
  return (
    <DrinkContext.Provider value={[globalState, setGlobalState]}>
      <Router>
        <>
          <nav className="navContainer">
            {username.length > 0 && (
            <>
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
            </>
            )}
          </nav>
            
          <main>
          {username.length > 0 && (
            <button className="right" onClick={() => logout()}>Log Out</button>
          )}
            <Switch>
              <ProtectedRoute isAuth={isAuth} path="/Login" authRequired={false} component={Login} />
              <ProtectedRoute isAuth={isAuth} path="/SignUp" authRequired={false} component={SignUp}/>
              <ProtectedRoute isAuth={isAuth} path="/Search" authRequired={true} component={Search} />
              <ProtectedRoute isAuth={isAuth} path="/Saved" authRequired={true} component={Saved} />
              <Route path="*">
                <Redirect to="/Login" />
              </Route>
            </Switch>
          </main>
        </>
      </Router>
    </DrinkContext.Provider>
  );
}



export default App;
