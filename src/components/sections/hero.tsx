import React, { useEffect, useState, useRef, JSX } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionWrapper from "../layout/section_wrapper";

const HeroContent = styled.div`
  height: 100vh;
  display: flex;
  align-self: stretch;
  flex-direction: column;
  margin-bottom: 20vh;
`;

const TopSectionContainer = styled.div`
  @media (max-width: ${theme.breakpoints.small}) {
    padding-top: 20vh;
  }
  /* height: 60vh; */
  padding-top: 40vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  align-self: stretch;
  /* justify-content: flex-end; */
`;

const Typewriter = styled.h1`
  /* @media (min-width: 540px) {
    height: calc(${theme.fontSizes.base} * 3.83);
  } */
  /* height: 185px; */
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
const ReadMore = styled.h1`
  @media (max-width: ${theme.breakpoints.small}) {
    padding-bottom: 8vh;
  }
  color: ${theme.colors.neutral_0};
  font-size: ${theme.fontSizes.base};
  font-family: ${theme.fontFamily.base};
  text-align: left;
  gap: 24px;
  margin-top: 0;
  padding-bottom: 5vh;
  display: flex;
  flex: 0;
  align-items: center;
`;

const Arrow = styled.img`
  src: "/downArrow.svg";
  height: 39px;
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
  }

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
          totalDelay += 20 + Math.ceil(Math.random() * 60);
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
    "Hi 👋\n\n",
    "My name is Garret, nice to meet you!\n\n",
    "I’m a front-end engineer, and I want to work at your company.\n\n",
    "Here's a little about why you might want to hire me.",
  ];

  function isSmallScreen(): boolean {
    const isSmallScreen = window.innerWidth < 540;
    return isSmallScreen;
  }
  const [currentWord, setCurrentWord] = useState<string[]>([]);

  useEffect(() => {
    if (!hasRun.current) {
      typewriter(greetingText);
      hasRun.current = true;
    }
  }, []);

  useGSAP(() => {
    gsap.set(arrowRef.current, {
      yPercent: 100,
      opacity: 0,
    });
    gsap.to(arrowRef.current, {
      delay: 15.29,
      opacity: 1,
      duration: 0.01,
    });
    gsap.to(arrowRef.current, {
      delay: 15.3,
      ease: "elastic.out",
      duration: 1,
      yPercent: -250,
    });
  }, []);

  const arrowRef = useRef<HTMLImageElement>(null);
  return (
    <SectionWrapper>
      <HeroContent>
        <TopSectionContainer>
          <Typewriter className="typewriter">{displayText1}</Typewriter>
        </TopSectionContainer>
        <Arrow ref={arrowRef} src="/assets/images/downArrow.svg"></Arrow>
      </HeroContent>
    </SectionWrapper>
  );
};

export default Hero;
