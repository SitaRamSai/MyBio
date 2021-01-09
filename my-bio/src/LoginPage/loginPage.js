import React, { Component } from "react";
import { signInWithGoogle } from "./../firebase/firebase.utils";

export class loginPage extends Component {
  render() {
    return (
      <div>
        <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
      </div>
    );
  }
}

export default loginPage;
