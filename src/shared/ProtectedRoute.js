import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isAuth, authRequired, component, path }) => {
  const redirect = authRequired ? "/login" : "/search";

  if ((authRequired && !isAuth) || (!authRequired && isAuth)) {
    return <Redirect to={redirect} />;
  }
  return <Route path={path} component={component} />;
};

export default ProtectedRoute;