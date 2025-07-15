"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logo_svg_1 = __importDefault(require("./logo.svg"));
require("./App.css");
const gsap_1 = require("gsap");
const react_1 = require("@gsap/react");
const footer_1 = __importDefault(require("./components/sections/footer"));
function App() {
    gsap_1.gsap.registerPlugin(react_1.useGSAP);
    return (<div className="App">
      <header className="App-header">
        <img src={logo_svg_1.default} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <footer_1.default />
    </div>);
}
exports.default = App;
