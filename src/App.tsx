import logo from "./logo.svg";
import "./App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "./components/sections/hero";
import BoldDesign from "./components/sections/bold_design";
import Footer from "./components/sections/footer";

function App() {
  gsap.registerPlugin(useGSAP);
  return (
    <div className="App">
      <Hero />
      <BoldDesign />
      <Footer />
    </div>
  );
}

export default App;
