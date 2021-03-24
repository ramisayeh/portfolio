import React, { Component } from "react";
import "./assets/css/main.css";
import "./assets/css/noscript.css";
export default class header extends Component {
  render() {
    return (
      <div id="header">
        <div className="inner">
          <span className="icon solid major fa-cloud"></span>
          <h1>
            Hi, I'm <strong>Rami</strong>, a full stack   
            <br />
            developer graduated from <a href="https://www.rbktunisia.com/">RBKtn</a>.
          </h1>
          <ul className="actions special">
            <li>
              <a href="#one" className="button scrolly">
                Discover
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
