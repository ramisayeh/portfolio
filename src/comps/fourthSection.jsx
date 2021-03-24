import React, { PureComponent } from "react";
import "./assets/css/main.css";
import "./assets/css/noscript.css";
class FourthSection extends PureComponent {
  render() {
    return (
      <div id="four" className="main style2 special">
        <div className="container">
          <header className="major">
            <h2>Ipsum feugiat consequat?</h2>
          </header>
          <p>Sed lacus nascetur ac ante amet sapien.</p>
          <ul className="actions special">
            <li>
              <a href="#" className="button wide primary">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" className="button wide">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FourthSection;
