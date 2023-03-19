import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "./Utils";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const setComponent = (props) => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      return <Component {...props} />;
    }
    return (
      <Redirect
        to={{
          pathname: "/user/login",
          state: { from: props.location },
        }}
      />
    );
  };

  return <Route {...rest} render={setComponent} />;
};

const AuthRoute = ({ component: Component, ...rest }) => {
  const setComponent = (props) => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      return <Component {...props} />;
    }
    return (
      <Redirect
        to={{
          pathname: "/app",
          state: { from: props.location },
        }}
      />
    );
  };

  return <Route {...rest} render={setComponent} />;
};

export { ProtectedRoute, AuthRoute };
