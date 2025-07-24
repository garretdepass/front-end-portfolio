import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/sections/hero";
import BoldDesign from "./components/sections/bold_design";
import Footer from "./components/sections/footer";
import Impact from "./components/sections/impact";
import Experience from "./components/sections/experience";
import { useRef } from "react";
import EngineerPlus from "./components/sections/engineer_plus";

function App() {
  const impactSectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <Hero />
      <BoldDesign />
      <Impact impactSectionRef={impactSectionRef} />
      <Experience impactSectionRef={impactSectionRef} />
      <EngineerPlus />
      <Footer />
    </div>
  );
}

export default App;
