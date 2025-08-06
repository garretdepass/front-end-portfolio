import React, { useEffect, useRef, useState, RefObject } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import SectionWrapper from "../layout/section_wrapper";
import { useGSAP } from "@gsap/react";
import gsap, { TimelineLite } from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceWrapper = styled.div`
  @media (min-width: ${theme.breakpoints.large}) {
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: ${theme.breakpoints.large}) {
    flex-direction: column;
    align-items: center;
    align-self: unset;
  }

  @media (max-width: ${theme.breakpoints.small}) {
    gap: 48px;
  }
  display: flex;
  flex-direction: row;
  gap: 5vw;
  padding: 20vh 0;
  z-index: 100;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`;
const P = styled.p`
  /* width: max-content; */
  font-family: ${theme.fontFamily.base};
  text-align: left;
  margin-block-start: 0.6em;
  margin-block-end: 0.6em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const Text1 = styled(P)`
  font-size: ${theme.fontSizes.xlarge};
  font-weight: 700;
  max-width: 480px;
`;

const Text2 = styled(P)`
  line-height: 40px;
  font-size: ${theme.fontSizes.base};
`;

const HighlightSpan = styled.span`
  background-color: ${theme.colors.purple_300};
  font-weight: 600;
  padding: 0 4px;
  border-radius: 2px;
`;

function getGridGap() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1440) {
    return 32;
  } else {
    return 8;
  }
}

// const gridGap = getGridGap();
const gridGap = 8;

const SkillsContainer = styled.div`
  @media (min-width: ${theme.breakpoints.xlarge}) {
    max-width: 560px;
    /* background-color: blue; */
  }
  @media (max-width: ${theme.breakpoints.large}) {
    max-width: 480px;
  }
  @media (max-width: ${theme.breakpoints.small}) {
    gap: 8px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(8, 1fr);
    /* background-color: blue; */
  }
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: ${gridGap}px;
  /* align-self: flex-start; */
  /* max-width: 480px; */
  max-width: 40vw;
  /* flex: 0.8; */
  /* background-color: red; */
  perspective: 1000px;
`;

const Skill = styled.div`
  /* @media (min-width: ${theme.breakpoints.xlarge}) {
    font-size: ${theme.fontSizes.xsmall};
  } */
  @media (max-width: ${theme.breakpoints.large}) {
    font-size: ${theme.fontSizes.xsmall};
    font-weight: 700;
  }
  min-width: 32px;
  max-width: 176px;
  flex: 1;
  aspect-ratio: 1;
  border-radius: 8px;
  background-color: ${theme.colors.neutral_600};
  filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.07))
    drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.13));
  font-size: ${theme.fontSizes.small};
  /* font-weight: 700; */
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
`;

const SkillImageContainer = styled(Skill)`
  padding: 16px;
`;

const SkillImage = styled.img`
  /* max-width: 70px; */
  min-width: 40px;
  aspect-ratio: 1;
  flex: 1;
`;

const randomizedArray: number[] = [];
let attempt = 0;
while (randomizedArray.length < 12 && attempt < 2000) {
  const randomNumber = Math.floor(Math.random() * 12);
  const timesTwo = randomNumber * 2;
  const plusOne = timesTwo + 1;
  !randomizedArray.includes(plusOne) && randomizedArray.push(plusOne);
  attempt++;
}

function getIsMobile(): boolean {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

const isMobile = getIsMobile();

type ExperienceProps = {
  impactSectionRef: RefObject<HTMLDivElement | null>;
};

const Experience: React.FC<ExperienceProps> = ({ impactSectionRef }) => {
  const experienceWrapperRef = useRef<HTMLDivElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const [experienceWrapperInView, setExperienceWrapperInView] = useState(false);
  const [inViewAmount, setInViewAmount] = useState(1);

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: updateValues,
  });

  function updateValues() {
    if (!skillsContainerRef.current) return;
    if (
      ScrollTrigger.isInViewport(skillsContainerRef.current, inViewAmount) &&
      !experienceWrapperInView
    ) {
      setExperienceWrapperInView(true);
    }
  }

  updateValues();

  useGSAP(() => {
    if (isMobile) setInViewAmount(0.4);
    let tl = gsap.timeline({});

    let startingPosition = 100;
    let yRotation = 20;
    if (skillsContainerRef.current?.children) {
      const skills = skillsContainerRef.current?.children;
      for (let i = 1; i < skills.length; i = i + 2) {
        // const skillWidth = (skills[i].getBoundingClientRect().width / 9) * 10;
        const skillWidth = skills[i].getBoundingClientRect().width;
        let conditional = i === 5 || i === 15;
        if (isMobile) conditional = i === 3 || i === 9 || i === 12 || i === 15;

        if (conditional) {
          startingPosition = skillWidth + gridGap;
          // } else if {
          // Need to add another conditional to position elements on a 3:8 grid, and hide the 25th element
          //   B said animation could be flashier. Maybe bounce easign and increase yRotation
        } else {
          startingPosition = -skillWidth - gridGap;
        }
        tl.set(skills[i], {
          x: startingPosition,
          zIndex: -100,
          //   scale: 0.9,
        });
      }
    }
    // tl.set(experienceWrapperRef.current, { scale: 1 });
    if (experienceWrapperInView && skillsContainerRef.current?.children) {
      const skills = skillsContainerRef.current?.children;

      for (let i = 0; i < randomizedArray.length; i++) {
        let conditional = randomizedArray[i] === 5 || randomizedArray[i] === 15;
        if (isMobile)
          conditional =
            randomizedArray[i] === 3 ||
            randomizedArray[i] === 9 ||
            randomizedArray[i] === 12 ||
            randomizedArray[i] === 15;
        if (conditional) {
          yRotation = 30;
        } else {
          yRotation = -30;
        }
        tl.to(
          skills[conditional ? randomizedArray[i] + 1 : randomizedArray[i] - 1],
          {
            rotateY: yRotation,
            duration: 0.2,
          }
        )
          .to(
            skills[randomizedArray[i]],
            {
              x: 0,
              ease: "elastic.out",
              duration: 0.5,
              scale: 1,
            }
            // ">-0.2"
          )
          .to(
            skills[
              conditional ? randomizedArray[i] + 1 : randomizedArray[i] - 1
            ],
            {
              rotateY: 0,
              duration: 0.2,
            },
            ">-0.2"
          );
      }
    }
    // let tl = scrollTrigger
    // flipboard down a new skill underneath each language
    //  animate in next two sentences
  }, [experienceWrapperInView]);
  return (
    <SectionWrapper>
      <ExperienceWrapper className="test" ref={experienceWrapperRef}>
        <TextContainer>
          <div>
            <Text2>
              Hiring is a pain.
              <br />
              Your pipeline is full of engineers.
              <br />
              And they all look mostly the same.{" "}
            </Text2>
          </div>
          <div>
            <Text2>
              That’s where I come in.
              <br />
              My background means I have all these{" "}
              <HighlightSpan>extra skills...</HighlightSpan>
            </Text2>
          </div>

          {window.innerWidth > 1024 ? (
            <Text1>Imagine how I could put them to use on your team.</Text1>
          ) : (
            ""
          )}
        </TextContainer>
        <SkillsContainer ref={skillsContainerRef}>
          <SkillImageContainer>
            <SkillImage src="/assets/images/skills/html.png" alt="" />
          </SkillImageContainer>
          <Skill>Interface design</Skill>
          <SkillImageContainer>
            <SkillImage src="/assets/images/skills/css.png" alt="" />
          </SkillImageContainer>
          <Skill>Consulting</Skill>
          <SkillImageContainer>
            <SkillImage src="/assets/images/skills/js.png" alt="" />
          </SkillImageContainer>
          <Skill>Mentorship</Skill>
          <SkillImageContainer>
            <SkillImage src="/assets/images/skills/ruby.png" alt="" />
          </SkillImageContainer>
          <Skill>Vision and Strategy</Skill>
          <SkillImageContainer>
            <SkillImage src="/assets/images/skills/python.png" alt="" />
          </SkillImageContainer>
          <Skill>user research</Skill>
          <SkillImageContainer>
            <SkillImage src="/assets/images/skills/typescript.png" alt="" />
          </SkillImageContainer>
          <Skill>facilitation</Skill>
          <SkillImageContainer>
            <SkillImage src="/assets/images/skills/react.png" alt="" />
          </SkillImageContainer>
          <Skill>cross-functional pairing</Skill>
          <SkillImageContainer>
            <SkillImage src="/assets/images/skills/rails.png" alt="" />
          </SkillImageContainer>
          <Skill>Interaction design</Skill>
          <SkillImageContainer>
            <SkillImage src="/assets/images/skills/mongodb.png" alt="" />
          </SkillImageContainer>
          <Skill>Visual design</Skill>
          <SkillImageContainer>
            <SkillImage src="/assets/images/skills/graphql.png" alt="" />
          </SkillImageContainer>
          <Skill>Service design</Skill>
          <SkillImageContainer>
            <SkillImage src="/assets/images/skills/git.png" alt="" />
          </SkillImageContainer>
          <Skill>Design systems</Skill>
          <SkillImageContainer>
            <SkillImage src="/assets/images/skills/wordpress.png" alt="" />
          </SkillImageContainer>
          <Skill>User-centered design</Skill>
          {isMobile ? (
            ""
          ) : (
            <SkillImageContainer>
              <SkillImage src="/assets/images/skills/figma.png" alt="" />
            </SkillImageContainer>
          )}
        </SkillsContainer>
        {window.innerWidth <= 1024 ? (
          <Text1>Imagine how I could put them to use on your team.</Text1>
        ) : (
          ""
        )}
      </ExperienceWrapper>
    </SectionWrapper>
  );
};

export default Experience;
