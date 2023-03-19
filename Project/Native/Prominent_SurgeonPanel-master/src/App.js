import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "./helpers/authHelper";
import LoginScreen from "./views/user/login";

const ViewApp = React.lazy(() => import("./views/app"));
const ViewError = React.lazy(() => import("./views/error"));
const ViewUnauthorized = React.lazy(() => import("./views/unauthorized"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Router>
        <Switch>
          <ProtectedRoute path="/app" component={ViewApp} />
          <Redirect exact from="/" to="/app" />
          <AuthRoute path="/user/login" component={LoginScreen} />
          <Route
            path="/error"
            exact
            render={(props) => <ViewError {...props} />}
          />
          <Route
            path="/unauthorized"
            exact
            render={(props) => <ViewUnauthorized {...props} />}
          />
          <Redirect to="/error" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
