"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const theme_1 = require("../../styles/theme");
const react_2 = require("@gsap/react");
const button_1 = __importDefault(require("../button"));
const Wrapper = styled_components_1.default.section `
  height: 100vh;
  display: flex;
  padding: 0 160px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
`;
const TopSectionContainer = styled_components_1.default.div `
  margin-top: 30vh;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  align-self: stretch;
`;
const Typewriter = styled_components_1.default.h1 `
  color: ${theme_1.theme.colors.neutral_0};
  font-size: ${theme_1.theme.fontSizes.base};
  font-family: ${theme_1.theme.fontFamily.base};
  white-space: pre-line;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: wrap;
  overflow-x: hidden;
  align-self: stretch;
`;
const ReadMore = styled_components_1.default.h1 `
  color: ${theme_1.theme.colors.neutral_0};
  font-size: ${theme_1.theme.fontSizes.base};
  font-family: ${theme_1.theme.fontFamily.base};
  text-align: left;
`;
const cursorAnimation = (0, styled_components_1.keyframes) `
    0% {
        opacity: 0;
    }

    49.9% {
        opacity: 0;
    }

    50% {
        opacity: 100;
    }

    100% {
        opacity: 100;
    }
  `;
const Cursor = styled_components_1.default.span `
  animation: ${cursorAnimation} 1s infinite;
`;
const Hero = () => {
    const [displayText1, setDisplayText1] = (0, react_1.useState)([]);
    const hasRun = (0, react_1.useRef)(false);
    function addCharacter(character, totalDelay) {
        setTimeout(() => {
            setDisplayText1((prev) => [...prev, <div>{character}</div>]);
        }, totalDelay);
    }
    function updateWord(word, currentWordIndex) {
        setDisplayText1((prev) => [
            ...prev.slice(currentWordIndex, currentWordIndex),
            <div>
        {word}
        <Cursor>|</Cursor>
      </div>,
        ]);
        console.log(word);
    }
    const [currentWord, setCurrentWord] = (0, react_1.useState)([]);
    function typewriter(array) {
        updateWord("", 0);
        let currentLineCount = 0;
        let currentWordCount = 0;
        let totalDelay = 0;
        setTimeout(() => {
            array.forEach((line) => {
                line.split("").forEach((character) => {
                    if (character === " ") {
                        setTimeout(() => {
                            setCurrentWord((prev) => {
                                const updated = [...prev, " "];
                                const word = updated.join("");
                                updateWord(word, currentWordCount);
                                return updated;
                            });
                            currentWordCount++;
                            console.log(currentWordCount);
                        }, totalDelay);
                    }
                    else {
                        setTimeout(() => {
                            setCurrentWord((prev) => {
                                const updated = [...prev, character];
                                const word = updated.join("");
                                updateWord(word, currentWordCount);
                                return updated;
                            });
                        }, totalDelay);
                    }
                    totalDelay += 100;
                    console.log(currentWord);
                });
                currentLineCount++;
                totalDelay += 1000;
                if (currentLineCount < 3) {
                    setTimeout(() => {
                        setDisplayText1((prev) => [
                            ...prev,
                            <br style={{ width: 1000 }}/>,
                        ]);
                    }, totalDelay);
                }
            });
        }, 3000);
    }
    const greetingText = [
        "Hi 👋\n",
        "My name is Garret, nice to meet you!\n",
        "I’m a front-end engineer, and I want to work at your company.",
    ];
    (0, react_2.useGSAP)(() => { });
    (0, react_1.useEffect)(() => {
        if (!hasRun.current) {
            typewriter(greetingText);
            hasRun.current = true;
        }
    }, []);
    return (<Wrapper>
      <TopSectionContainer>
        <Typewriter className="typewriter">{displayText1}</Typewriter>
        <button_1.default text="Want to chat?"/>
      </TopSectionContainer>
      <ReadMore>Here's a little about why you might want to hire me.</ReadMore>
    </Wrapper>);
};
exports.default = Hero;
