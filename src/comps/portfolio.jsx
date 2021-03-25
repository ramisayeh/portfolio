import React, { PureComponent } from 'react'
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
                <section id="portfolio" class="s-portfolio target-section">

<div class="row s-portfolio__header">
    <div class="column large-6 medium-8 tab-full">
        <div class="section-intro" data-num="03" data-aos="fade-up">
            <h3 class="subhead">Portfolio</h3>
            <h1 class="display-1">
                A selection of recent projects I have worked on.
            </h1>
        </div>
    </div>
</div> 

<div class="row s-porfolio__list block-large-1-2 block-tab-full collapse">

    <div class="column" data-aos="fade-up">
        <div class="folio-item">
            <div class="folio-item__thumb">
                <a class="folio-item__thumb-link" href="images/portfolio/gallery/g-windows-in-the-city.jpg" title="Windows in The City" data-size="1050x700">
                    <img src="images/portfolio/windows-in-the-city.jpg" 
                         srcSet="images/portfolio/windows-in-the-city.jpg 1x, images/portfolio/windows-in-the-city@2x.jpg 2x" alt=""/>
                </a>
            </div>
            <div class="folio-item__info">
                <div class="folio-item__cat">Branding</div>
                <h4 class="folio-item__title">Windows in The City</h4>
            </div>
            <a href="https://www.behance.net/" title="Project Link" class="folio-item__project-link">Project Link</a>
            <div class="folio-item__caption">
                <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
            </div>
        </div>
    </div>
    <div class="column" data-aos="fade-up">
        <div class="folio-item">
            <div class="folio-item__thumb">
                <a class="folio-item__thumb-link" href="images/portfolio/gallery/g-building-blocks.jpg" title="Building Blocks" data-size="1050x700">
                    <img src="images/portfolio/building-blocks.jpg" 
                         srcset="images/portfolio/building-blocks.jpg 1x, images/portfolio/building-blocks@2x.jpg 2x" alt=""/>
                </a>
            </div>
            <div class="folio-item__info">
                <div class="folio-item__cat">Frontend Design</div>
                <h4 class="folio-item__title">Building Blocks</h4>
            </div>
            <a href="https://www.behance.net/" title="Project Link" class="folio-item__project-link">Project Link</a>
            <div class="folio-item__caption">
                <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
            </div>
        </div>
    </div> 
    <div class="column" data-aos="fade-up">
        <div class="folio-item">
            <div class="folio-item__thumb">
                <a class="folio-item__thumb-link" href="images/portfolio/gallery/g-shout-jump.jpg" Title="Shout and Jump" data-size="1050x700">
                    <img src="images/portfolio/shout-and-jump.jpg" 
                         srcset="images/portfolio/shout-and-jump.jpg 1x, images/portfolio/shout-and-jump@2x.jpg 2x" alt=""/>
                </a>
            </div>
            <div class="folio-item__info">
                <div class="folio-item__cat">Branding</div>
                <h4 class="folio-item__title">Shout Jump</h4>
            </div>
            <a href="https://www.behance.net/" title="Project Link" class="folio-item__project-link">Project Link</a>
            <div class="folio-item__caption">
                <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
            </div>
        </div>
    </div>
    <div class="column" data-aos="fade-up">
        <div class="folio-item">
            <div class="folio-item__thumb">
                <a class="folio-item__thumb-link" href="images/portfolio/gallery/g-sand-dunes.jpg" title="Sand Dunes" data-size="1050x700">
                    <img src="images/portfolio/sand-dunes.jpg" 
                         srcset="images/portfolio/sand-dunes.jpg 1x, images/portfolio/sand-dunes@2x.jpg 2x" alt=""/>
                </a>
            </div>
            <div class="folio-item__info">
                <div class="folio-item__cat">Frontend Design</div>
                <h4 class="folio-item__title">Sand Dunes</h4>
            </div>
            <a href="https://www.behance.net/" title="Project Link" class="folio-item__project-link">Project Link</a>
            <div class="folio-item__caption">
                <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
            </div>
        </div>
    </div> 
    <div class="column" data-aos="fade-up">
        <div class="folio-item">
            <div class="folio-item__thumb">
                <a class="folio-item__thumb-link" href="images/portfolio/gallery/g-woodcraft.jpg" title="Sand Dunes" data-size="1050x700">
                    <img src="images/portfolio/woodcraft.jpg" 
                         srcset="images/portfolio/woodcraft.jpg 1x, images/portfolio/woodcraft@2x.jpg 2x" alt=""/>
                </a>
            </div>
            <div class="folio-item__info">
                <div class="folio-item__cat">Product Design</div>
                <h4 class="folio-item__title">Wooocraft</h4>
            </div>
            <a href="https://www.behance.net/" title="Project Link" class="folio-item__project-link">Project Link</a>
            <div class="folio-item__caption">
                <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
            </div>
        </div>
    </div> 
    <div class="column" data-aos="fade-up">
        <div class="folio-item">
            <div class="folio-item__thumb">
                <a class="folio-item__thumb-link" href="images/portfolio/gallery/g-lamp.jpg" title="The Lamp" data-size="1050x700">
                    <img src="images/portfolio/lamp.jpg" 
                         srcset="images/portfolio/lamp.jpg 1x, images/portfolio/lamp@2x.jpg 2x" alt=""/>
                </a>
            </div>
            <div class="folio-item__info">
                <div class="folio-item__cat">Product Design</div>
                <h4 class="folio-item__title">The Lamp</h4>
            </div>
            <a href="https://www.behance.net/" title="Project Link" class="folio-item__project-link">Project Link</a>
            <div class="folio-item__caption">
                <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
            </div>
        </div>
    </div>

</div> 

</section>
            </div>
        )
    }
}

export default Portfolio