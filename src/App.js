import './App.css';
import './css/main.css';
import './css/base.css';
import './css/vendor.css';
import Header from './comps/header.jsx';
import Sectionone from './comps/sectionone.jsx';
import About from './comps/About.jsx';
import Services from './comps/services.jsx';
import Portfolio from './comps/portfolio.jsx'
function App() {
  return (
    <div className='App'>
    <Header/>
    <Sectionone/>
    <About/>
    <Services/>
    <Portfolio/>
    </div>
  );
}

export default App;
