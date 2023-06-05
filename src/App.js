import "./App.css";
import Menu from "./components/NavBar/Menu";
import MenuResponsivo from "./components/NavBar/MenuResponsivo";
import Section1 from "./components/Section1/Section1";
import Features from "./components/Section1/Features";
import Section2 from "./components/Section2/section2";
import Section3 from "./components/Section3/section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Section6 from "./components/Section6/Section6";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Menu />
      <MenuResponsivo />
      <Section1 />
      <Features />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default App;
