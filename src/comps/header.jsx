import React, { Component } from 'react'
import '../css/main.css';
import '../css/base.css'
import '../css/vendor.css'
export default class header extends Component {
    render() {
        return (
            <div className="s-header">

    
            <div className="header-content">
        
                <nav className="row header-nav-wrap">
                    <ul className="header-nav">
                        <li><a className="smoothscroll" href="#hero" title="Intro">Home</a></li>
                        <li><a className="smoothscroll" href="#about" title="About">About</a></li>
                        <li><a className="smoothscroll" href="#services" title="Services">Services</a></li>
                        <li><a className="smoothscroll" href="#portfolio" title="Works">Works</a></li>
                        <li><a href="mailto:#0" title="Contact us">Say Hello</a></li>
                    </ul>
                </nav> 
    
                <a href="#0" className="btn btn--stroke btn--small">Download CV</a>
    
            </div> 
    
            <a className="header-menu-toggle" href="#0"><span>Menu</span></a>
    
        </div>
        )
    }
}
