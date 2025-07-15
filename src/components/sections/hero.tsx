import React, { useEffect, useState, useRef, ElementType, JSX } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../button";

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
  align-items: flex-end;
  flex-wrap: wrap;
  overflow-x: hidden;
  align-self: stretch;
`;

const ReadMore = styled.h1`
  color: ${theme.colors.neutral_0};
  font-size: ${theme.fontSizes.base};
  font-family: ${theme.fontFamily.base};
  text-align: left;
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

  function addCharacter(character: string, totalDelay: number): void {
    setTimeout(() => {
      setDisplayText1((prev) => [...prev, <div>{character}</div>]);
    }, totalDelay);
  }

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
          totalDelay += 100;
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
    }, 3000);
  }

  const greetingText: string[] = [
    "Hi 👋\n",
    "My name is Garret, nice to meet you!\n",
    "I’m a front-end engineer, and I want to work at your company.",
  ];

  useGSAP(() => {});

  useEffect(() => {
    if (!hasRun.current) {
      typewriter(greetingText);
      hasRun.current = true;
    }
  }, []);

  return (
    <Wrapper>
      <TopSectionContainer>
        <Typewriter className="typewriter">{displayText1}</Typewriter>
        <Button text="Want to chat?" />
      </TopSectionContainer>
      <ReadMore>Here's a little about why you might want to hire me.</ReadMore>
    </Wrapper>
  );
};

export default Hero;
