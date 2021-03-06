import React, { Component } from "react";
import "../css/main.css";
import "../css/base.css";
import "../css/vendor.css";
import AOS from "aos";
export default class sectionone extends Component {
  componentDidMount() {
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }
  render() {
    return (
      <div>
        <section
          id="hero"
          className="s-hero target-section"
          data-parallax="scroll"
        >
           {/* <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video> */}
          <div className="row hero-content">
            <div className="column large-full">
              <div data-aos="fade-right">
                <h1>
                  <p>Hello, I'm Rami sayeh</p>
                  <p> a full stack developer </p>
                </h1>
              </div>
              <div data-aos="flip-right">
              <ul className="hero-social">
              
                <li>
                  <a href="#0" title="">
                    Twitter
                  </a>
                </li>
                
                <li>
                  <a href="#0" title="">
                    Behance
                  </a>
                </li>
                <li>
                  <a href="#0" title="">
                    Dribbble
                  </a>
                </li>
              </ul>
              </div>
            </div>
          </div>

          <div className="hero-scroll">
            <a href="#about" className="scroll-link smoothscroll">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 24l-8-9h6v-15h4v15h6z" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    );
  }
}
