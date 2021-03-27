import React, { PureComponent } from "react";
import "../css/main.css";
import "../css/base.css";
import "../css/vendor.css";
import AOS from "aos";
class Footer extends PureComponent {
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
        <footer className="s-footer h-dark-bg">
          <div className="right-vert-line"></div>

          <div className="row s-footer__main">
            <div className="column large-6">
              <div className="section-intro" data-aos="fade-up">
                <h3 className="subhead">Get In Touch</h3>

                <h1 className="display-1">
                  Have an idea or a concept that really excite you? Let's turn
                  that idea into reality. Shoot me a message.
                </h1>
              </div>

              <div className="footer-email-us">
                <a href="mailto:#0" className="btn btn--primary h-full-width">
                  Let's Talk
                </a>
              </div>
            </div>

            <div className="column large-5">
              <div className="footer-contacts">
                <div className="footer-contact-block" data-aos="fade-up">
                  <h5 className="footer-contact-block__header">Email</h5>
                  <p className="footer-contact-block__content">
                    <a href="mailto:#0">sayeh8rami@gmail.com</a>
                  </p>
                </div>
                <div className="footer-contact-block" data-aos="fade-up">
                  <h5 className="footer-contact-block__header">Phone</h5>
                  <p className="footer-contact-block__content">
                    <a href="tel:+1975432345">+216 46 350 703</a>
                  </p>
                </div>
                <br></br>
                <div className="footer-contact-block" data-aos="fade-up">
                  <h5 className="footer-contact-block__header">Social</h5>
                  <ul className="footer-contact-block__list">
                    <li>
                      <a href="#0">Twitter</a>
                    </li>
                    <li>
                      <a href="#0">Instagram</a>
                    </li>
                    <li>
                      <a href="#0">Behance</a>
                    </li>
                    <li>
                      <a href="#0">Dribbble</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
