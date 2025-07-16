import React, { useEffect, useState, useRef, JSX } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { useGSAP } from "@gsap/react";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import gsap from "gsap";
import BusButton from "../buttons/bus_button";

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  padding: 0 160px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
`;

const TopSectionContainer = styled.div`
  margin-top: 30vh;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  align-self: stretch;
`;

const Typewriter = styled.h1`
  color: ${theme.colors.neutral_0};
  font-size: ${theme.fontSizes.base};
  font-family: ${theme.fontFamily.base};
  white-space: pre-line;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow-x: hidden;
  align-self: stretch;
  height: calc(${theme.fontSizes.base} * 3.83);
`;

const ReadMore = styled.h1`
  color: ${theme.colors.neutral_0};
  font-size: ${theme.fontSizes.base};
  font-family: ${theme.fontFamily.base};
  text-align: left;
  gap: 24px;
  margin-bottom: 64px;
  display: flex;
  align-content: center;
`;

const cursorAnimation = keyframes`
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

const Cursor = styled.span`
  animation: ${cursorAnimation} 1s infinite;
`;

const Hero: React.FC = () => {
  const [displayText1, setDisplayText1] = useState<JSX.Element[]>([]);
  const hasRun = useRef(false);

  function updateWord(word: string, currentWordIndex: number): void {
    setDisplayText1((prev) => [
      ...prev.slice(currentWordIndex, currentWordIndex),
      <div>
        {word}
        <Cursor>|</Cursor>
      </div>,
    ]);
    console.log(word);
  }
  const [currentWord, setCurrentWord] = useState<string[]>([]);

  function typewriter(array: string[]) {
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
                const word: string = updated.join("");
                updateWord(word, currentWordCount);
                return updated;
              });
              currentWordCount++;
              console.log(currentWordCount);
            }, totalDelay);
          } else {
            setTimeout(() => {
              setCurrentWord((prev) => {
                const updated = [...prev, character];
                const word: string = updated.join("");
                updateWord(word, currentWordCount);
                return updated;
              });
            }, totalDelay);
          }
          if (character === ",") totalDelay += 400;
          totalDelay += 40 + Math.ceil(Math.random() * 100);
          console.log(currentWord);
        });
        currentLineCount++;
        totalDelay += 1000;
        if (currentLineCount < 3) {
          setTimeout(() => {
            setDisplayText1((prev) => [
              ...prev,
              <br style={{ width: 1000 }} />,
            ]);
          }, totalDelay);
        }
      });
    }, 2500);
  }

  const greetingText: string[] = [
    "Hi 👋\n",
    "My name is Garret, nice to meet you!\n",
    "I’m a front-end engineer, and I want to work at your company.",
  ];

  useEffect(() => {
    if (!hasRun.current) {
      typewriter(greetingText);
      hasRun.current = true;
    }
  }, []);

  const busRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(MotionPathPlugin);
    if (!busRef.current) return;

    gsap.set(busRef.current, {
      xPercent: -40,
      yPercent: -700,
    });
    gsap.to(busRef.current, {
      motionPath: {
        path: "M0.5 1.00005C110 -6.33329 362.794 139.116 525 317.518C679.5 487.444 972.091 406.349 983.5 603.018C994 784.018 801.5 886.016 635.5 852.016C557.338 836.007 460.135 716.634 353 675.016C232.602 628.245 130.051 664.87 56.5 667.516",
        autoRotate: 180,
      },
      duration: 10,
      delay: 7,
      autoAlpha: 1,
    });
  });

  return (
    <Wrapper>
      <TopSectionContainer>
        <Typewriter className="typewriter">{displayText1}</Typewriter>
        <BusButton ref={busRef} text="Want to chat?" />
      </TopSectionContainer>
      <ReadMore>
        Here's a little about why you might want to hire me.
        <img src="/downArrow.svg"></img>
      </ReadMore>
    </Wrapper>
  );
};

export default Hero;
