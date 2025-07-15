"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const gsap_1 = require("gsap");
const react_1 = require("@gsap/react");
const hero_1 = __importDefault(require("./components/sections/hero"));
const footer_1 = __importDefault(require("./components/sections/footer"));
function App() {
    gsap_1.gsap.registerPlugin(react_1.useGSAP);
    return (<div className="App">
      <hero_1.default />
      <footer_1.default />
    </div>);
}
exports.default = App;
