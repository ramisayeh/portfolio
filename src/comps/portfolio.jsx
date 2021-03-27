import React, { PureComponent } from "react";
import "../css/main.css";
import "../css/base.css";
import "../css/vendor.css";
import AOS from "aos";
class Portfolio extends PureComponent {
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
        <section id="portfolio" className="s-portfolio target-section">
          <div className="row s-portfolio__header">
            <div className="column large-6 medium-8 tab-full">
              <div className="section-intro" data-num="03" data-aos="fade-up">
                <h3 className="subhead">Portfolio</h3>
                <h1 className="display-1">
                  A selection of recent projects I have worked on.
                </h1>
              </div>
            </div>
          </div>

          <div className="row s-porfolio__list block-large-1-2 block-tab-full collapse">
            <div className="column" data-aos="fade-up">
              <div className="folio-item">
                <div className="folio-item__thumb">
                  <a
                    className="folio-item__thumb-link"
                    href="images/portfolio/gallery/g-windows-in-the-city.jpg"
                    title="Windows in The City"
                    data-size="1050x700"
                  >
                    <img
                      src="images/portfolio/windows-in-the-city.jpg"
                      srcSet="images/portfolio/windows-in-the-city.jpg 1x, images/portfolio/windows-in-the-city@2x.jpg 2x"
                      alt=""
                    />
                  </a>
                </div>
                <div className="folio-item__info">
                  <div className="folio-item__cat">frontend and Design</div>
                  <h4 className="folio-item__title">mi casa es tu casa</h4>
                </div>
                <a
                  href="https://github.com/ramisayeh/mctc"
                  title="Project Link"
                  className="folio-item__project-link"
                >
                  Project Link
                </a>
                <div className="folio-item__caption">
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>
            <div className="column" data-aos="fade-up">
              <div className="folio-item">
                <div className="folio-item__thumb">
                  <a
                    className="folio-item__thumb-link"
                    href="images/portfolio/gallery/g-building-blocks.jpg"
                    title="Building Blocks"
                    data-size="1050x700"
                  >
                    <img
                      src="images/portfolio/building-blocks.jpg"
                      srcSet="images/portfolio/building-blocks.jpg 1x, images/portfolio/building-blocks@2x.jpg 2x"
                      alt=""
                    />
                  </a>
                </div>
                <div className="folio-item__info">
                  <div className="folio-item__cat">FullStack and frontend Design</div>
                  <h4 className="folio-item__title">freshkytn</h4>
                </div>
                <a
                  href="https://github.com/freshkytn/freshky"
                  title="Project Link"
                  className="folio-item__project-link"
                >
                  Project Link
                </a>
                <div className="folio-item__caption">
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
