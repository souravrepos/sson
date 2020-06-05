import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from "./components/layouts/Alert";
// Components Link
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profiles-form/CreateProfile";
import AddExpirence from "./components/profiles-form/AddExpirence";
import AddEducation from "./components/profiles-form/AddEducation";
import AllProfiles from "./components/profiles/Profiles";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authAction";
import setAuthToken from "./utils/setAuthToken";
import EditProfile from "./components/profiles-form/EditProfile";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/allprofiles" component={AllProfiles} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/createProfile"
                component={CreateProfile}
              />
              <PrivateRoute exact path="/editProfile" component={EditProfile} />
              <PrivateRoute
                exact
                path="/addExperience"
                component={AddExpirence}
              />
              <PrivateRoute
                exact
                path="/addEducation"
                component={AddEducation}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
