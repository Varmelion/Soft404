import React, { Component } from "react";
import { Redirect } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import EditProfile from "./Components/Profile/EditProfile";
import LoginForm from "./Components/LoginForm/";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          render={() =>
            sessionStorage.getItem("azure_access_token") ? (
              <Header />
            ) : (
              <React.Fragment />
            )
          }
        />

        <Route
          exact
          path="/login"
          render={() =>
            sessionStorage.getItem("azure_access_token") ? (
              <Redirect to="/" />
            ) : (
              <LoginForm />
            )
          }
        />

        <Route exact path="/logout" render={() => <Redirect to="/login" />} />
        <Route
          exact
          path="/"
          render={() =>
            sessionStorage.getItem("azure_access_token") ? (
              <PostsList />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/create_post"
          render={() =>
            sessionStorage.getItem("azure_access_token") ? (
              <NewPost />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          exact
          path="/profile"
          render={() =>
            sessionStorage.getItem("azure_access_token") ? (
              <Profile />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/edit_profile"
          render={() =>
            sessionStorage.getItem("azure_access_token") ? (
              <EditProfile />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/"
          render={() =>
            sessionStorage.getItem("azure_access_token") ? (
              <Footer />
            ) : (
              <React.Fragment />
            )
          }
        />
      </BrowserRouter>
    );
  }
}

export default App;
