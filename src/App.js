import "./App.css";
import Header from "./comps/header.jsx";
import FirstSection from "./comps/firstSection.jsx";
import SecondSection from "./comps/secondSection.jsx";
import ThirdSection from "./comps/thirdSection.jsx";
import FourthSection from "./comps/fourthSection.jsx";
import Footer from "./comps/footer.jsx";
import "./comps/assets/css/main.css";
import "./comps/assets/css/noscript.css";
function App() {
  return (
    <div className="App" className="is-preload">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
}

export default App;
