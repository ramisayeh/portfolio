import React, { PureComponent } from 'react'
import "./assets/css/main.css";
import "./assets/css/noscript.css";
class SecondSection extends PureComponent {


    render() {
        return (
            <div  id="two" className="main style2" >
                <div className="container">
					<div className="row gtr-150">
						<div className="col-6 col-12-medium">
							<ul className="major-icons">
								<li><span className="icon solid style1 major fa-code"></span></li>
								<li><span className="icon solid style2 major fa-bolt"></span></li>
								<li><span className="icon solid style3 major fa-camera-retro"></span></li>
								<li><span className="icon solid style4 major fa-cog"></span></li>
								<li><span className="icon solid style5 major fa-desktop"></span></li>
								<li><span className="icon solid style6 major fa-calendar"></span></li>
							</ul>
						</div>
						<div className="col-6 col-12-medium">
							<header className="major">
								<h2>Lorem ipsum dolor adipiscing<br />
								amet dolor consequat</h2>
							</header>
							<p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
							<p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
							<p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
						</div>
					</div>
				</div>
            </div>
        )
    }
}

export default SecondSection
