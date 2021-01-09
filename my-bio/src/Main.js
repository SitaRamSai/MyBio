import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

//Adding firebase dependencies
import { signInWithGoogle } from "./firebase/firebase.utils";
import { auth } from "./firebase/firebase.utils";

import Home from "./Home";
import ResumeUpload from "./ResumeUpload";
import Questions from "./Questions";
import Contact from "./Contact";

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
        {/* SignIN with google */}
        <div className='user-info'>
        {

          this.state.currentUser ?

            (<div>
              <div>Name: {this.state.currentUser.displayName}</div>
              <div>Email: {this.state.currentUser.email}</div>

              <button onClick={() => auth.signOut()}>LOG OUT</button>
            </div>
            ) :

            <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>

        }
      </div >
        {/*links to our components*/}
        <div>
          <h1>My-BIO</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/ResumeUpload">ResumeUpload</NavLink>
            </li>
            <li>
              <NavLink to="/Questions">Questions</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/ResumeUpload" component={ResumeUpload} />
            <Route path="/Questions" component={Questions} />
            <Route path="/Contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
