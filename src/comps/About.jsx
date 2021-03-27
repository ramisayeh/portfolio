import React, { Component } from "react";
import "../css/main.css";
import "../css/base.css";
import "../css/vendor.css";
import AOS from "aos";
export default class About extends Component {
  componentDidMount() {

    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }
  render() {
    return (
      <div>
        <section id="about" className="s-about target-section">
          <div className="s-about__section s-about__section--profile">
            <div className="right-vert-line"></div>

            <div className="row">
              <div className="column large-6 medium-8 tab-full">
                <div className="section-intro" data-num="01" data-aos="fade-up">
                  <h3 className="subhead">About Me</h3>
                  <h1 className="display-1">
                    I'm the kind of person who isn't afraid of challenges.
                  </h1>
                </div>

                <div className="profile-pic" data-aos="fade-up">
                  <img
                    src="images/rami.jpg"
                    srcSet="images/rami-pic.jpg 1x, images/rami-pic.jpg 2x"
                    alt=""
                  />
                </div>

                <h3 data-aos="fade-up">Profile</h3>

                <p data-aos="fade-up">
                  My coding journey began when I realized that I wanted to
                  invent solutions for life's everyday problems. I enjoy the
                  logic of solving coding challenges by splitting a big problem
                  into smaller tasks and systematically tackling them one at a
                  time. When I'm not coding, I'm spending my free time either
                  playing Ping Pong, Surfing, or looking for new music on
                  SoundCloud.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
