import React, { Suspense } from "react";
import { withRouter } from "react-router-dom";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";

const ViewSurgeonsPage = React.lazy(() => import("./view-surgeons/index"));
const ViewCategoriesPage = React.lazy(() => import("./view-category/index"));
const ViewReportPage = React.lazy(() => import("./view-report/index"));
const ViewSurveysPage = React.lazy(() => import("./view-surveys/index"));

const ViewSurveyDetails = React.lazy(() => import("./survey-details/index"));

const AddPatientPage = React.lazy(() => import("./add-patient/index"));
const EditPatientPage = React.lazy(() => import("./edit-patient/index"));

const ViewError = React.lazy(() => import("../error"));
const ViewUnauthorized = React.lazy(() => import("../unauthorized"));

const App = () => {
  let match = useRouteMatch();

  return (
    <AppLayout>
      <Suspense fallback={<div style={{color: "#fff"}}>Loading....</div>}>
        <Switch>
          <Redirect
            exact
            from={`${match.url}`}
            to={`${match.url}/view-patients`}
          />
          <Route
            path={`${match.url}/view-patients`}
            render={(props) => <ViewSurgeonsPage {...props} />}
          />
          <Route
            path={`${match.url}/add-patients`}
            render={(props) => <AddPatientPage {...props} />}
          />
          <Route
            path={`${match.url}/edit-patient`}
            render={(props) => <EditPatientPage {...props} />}
          />
          <Route
            path={`${match.url}/view-categories`}
            render={(props) => <ViewCategoriesPage {...props} />}
          />
          <Route
            path={`${match.url}/view-survey-details`}
            render={(props) => <ViewSurveyDetails {...props} />}
          />

          <Route
            path={`${match.url}/view-report`}
            render={(props) => <ViewReportPage {...props} />}
          />
          <Route
            path={`${match.url}/view-surveys`}
            render={(props) => <ViewSurveysPage {...props} />}
          />

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
      </Suspense>
    </AppLayout>
  );
};

export default withRouter(App);
