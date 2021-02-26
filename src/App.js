import React from "react";
import Search from "./components/Search";
import { NavLink, Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Saved from "./components/Saved";
import Login from "./components/Login";
import { Provider } from "react-redux";
import Store from "./redux/Store";


function App() {
  return (
    <Provider store={Store}>
    <Router>
      <>
        <nav>
          <NavLink to="/Login">Login</NavLink>
          <NavLink to="/Search">Saved Cocktails</NavLink>
          <NavLink to="/Saved">Search</NavLink>
        </nav>
        <main>
          <Switch>
            {/* <Route path="/Login" component={Login} /> */}
            <Route path="/Search" component={Search} />
            {/* <Route path="/Saved" component={Saved} /> */}
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
