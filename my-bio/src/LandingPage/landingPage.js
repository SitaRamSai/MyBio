import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Home from "./home";
import ResumeUpload from "./resumeUpload";
import Questions from "./questions";
import Contact from "./contact";

export class landingPage extends Component {
  render() {
    return (
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
    );
  }
}

export default landingPage;
