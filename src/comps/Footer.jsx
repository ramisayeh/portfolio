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
        <footer class="s-footer h-dark-bg">
          <div class="right-vert-line"></div>

          <div class="row s-footer__main">
            <div class="column large-6">
              <div class="section-intro" data-aos="fade-up">
                <h3 class="subhead">Get In Touch</h3>

                <h1 class="display-1">
                  Have an idea or a concept that really excite you? Let's turn
                  that idea into reality. Shoot me a message.
                </h1>
              </div>

              <div class="footer-email-us">
                <a href="mailto:#0" class="btn btn--primary h-full-width">
                  Let's Talk
                </a>
              </div>
            </div>

            <div class="column large-5">
              <div class="footer-contacts">
                <div class="footer-contact-block" data-aos="fade-up">
                  <h5 class="footer-contact-block__header">Email</h5>
                  <p class="footer-contact-block__content">
                    <a href="mailto:#0">sayhello@ethos.com</a>
                  </p>
                </div>
                <div class="footer-contact-block" data-aos="fade-up">
                  <h5 class="footer-contact-block__header">Phone</h5>
                  <p class="footer-contact-block__content">
                    <a href="tel:+1975432345">+197 543 2345</a>
                  </p>
                </div>
                <br></br>
                <div class="footer-contact-block" data-aos="fade-up">
                  <h5 class="footer-contact-block__header">Social</h5>
                  <ul class="footer-contact-block__list">
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

          <div class="row s-footer__bottom">
            <div class="column large-full ss-copyright">
              <span>© Copyright Ethos 2019</span>
              <span>
                Design by <a href="https://www.styleshout.com/">StyleShout</a>
              </span>
            </div>

            <div class="ss-go-top">
              <a class="smoothscroll" title="Back to Top" href="#top">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0l8 9h-6v15h-4v-15h-6z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
