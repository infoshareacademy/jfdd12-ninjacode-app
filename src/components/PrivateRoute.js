import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function PrivateRoute({ component: Component, ...rest }) {
  const isLoggedIn = useAuth();
  return (
    <Route
      {...rest}
      render={props => {
        if (isLoggedIn === null) {
          return null;
        }

        return isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
