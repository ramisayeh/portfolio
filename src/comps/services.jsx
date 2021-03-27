import React, { PureComponent } from "react";
import "../css/main.css";
import "../css/base.css";
import "../css/vendor.css";
import AOS from "aos";
class Services extends PureComponent {
  componentDidMount() {
    console.log("yes");

    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }
  render() {
    return (
      <div>
        <section id="services" className="s-services target-section h-dark-bg">
          <div className="row s-services__content">
            <div className="vert-line"></div>

            <div className="column large-6 s-services__leftcol">
              <div className="section-intro" data-num="02" data-aos="fade-up">
                <h3 className="subhead">Expertise</h3>

                <h1 className="display-1">
                  I focus on crafting web experiences and creating optimal designs.
                </h1>
              </div>

              <p className="lead" data-aos="fade-up">
                I really cant get enough of discovering new tech's . 
                A user friendly website is always my first goal.
              </p>
            </div>

            <div className="column large-6">
              <ul className="services-list" data-aos="fade-up">
                <li className="services-list__item is-active">
                  <div className="services-list__item-header">
                    <h5>Reactjs</h5>
                  </div>
                </li>
                <li className="services-list__item">
                  <div className="services-list__item-header">
                    <h5>Vuejs</h5>
                  </div>
                </li>
                <li className="services-list__item">
                  <div className="services-list__item-header">
                    <h5>Angular2+</h5>
                  </div>
                </li>
                <li className="services-list__item">
                  <div className="services-list__item-header">
                    <h5>MongoDB</h5>
                  </div>
                </li>
                <li className="services-list__item">
                  <div className="services-list__item-header">
                    <h5>Nodejs</h5>
                  </div>
                </li>
                <li className="services-list__item">
                  <div className="services-list__item-header">
                    <h5>redux</h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
