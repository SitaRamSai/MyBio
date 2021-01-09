import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

//Adding firebase dependencies
import { auth } from "./firebase/firebase.utils";
import LandingPage from "./LandingPage/landingPage";
import LoginPage from "./LoginPage/loginPage";

class Main extends Component {
  //Creating a constructor
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <HashRouter>
        <div className="user-info">
          {this.state.currentUser ? (
            <div>
              <div>Name: {this.state.currentUser.displayName}</div>
              <div>Email: {this.state.currentUser.email}</div>
              <LandingPage />
              <button onClick={() => auth.signOut()}>LOG OUT</button>
            </div>
          ) : (
            <LoginPage />
          )}
        </div>
      </HashRouter>
    );
  }
}

export default Main;
