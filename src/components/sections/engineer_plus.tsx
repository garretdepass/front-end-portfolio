import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import CaseCard from "../elements/case_card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const EngineerPlusWrapper = styled.section``;

const ContentWrapper = styled.div`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    margin-top: 80px;
  }
  padding: 20vh ${theme.spacing.large};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10vh;
`;

const Text1 = styled.p`
  font-size: ${theme.fontSizes.base};
  margin-block-start: 0em;
  margin-block-end: 0em;
  line-height: 32px;
`;

const LeftText1 = styled(Text1)`
  text-align: left;
`;

const Text2 = styled.p`
  font-size: ${theme.fontSizes.display_small};
  font-weight: 700;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const Text3 = styled.p`
  font-size: ${theme.fontSizes.large};
  font-weight: 700;
  margin-block-start: 0em;
  margin-block-end: 0em;
  max-width: 400px;
`;

const ColorSpan = styled.span`
  background-color: ${theme.colors.purple_300};
  padding: 0 4px;
  border-radius: 2px;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhotoDescriptionContainer = styled.div`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    flex-direction: column-reverse;
    gap: 24px;
    margin-bottom: 64px;
  }
  display: flex;
  max-width: 700px;
  align-items: center;
`;

const MyPhoto = styled.img`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    height: 240px;
  }
  height: 256px;
  aspect-ratio: 1;
  border-radius: 16px;
`;

const Eybrows = styled.img`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    height: 12px;
    top: 95px;
    left: -14px;
  }
  height: 20px;
  position: relative;
  top: -25px;
  left: -187px;
`;

const BackgroundElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: stretch;
  position: relative;
  height: 0px;
`;
const CurvesContainer = styled.div`
  white-space: nowrap;
  align-self: stretch;
  z-index: -100;
  overflow-y: visible;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10vh;
`;

const CurveTemplate = styled.svg`
  @media only screen and (min-width: ${theme.breakpoints.xlarge}) {
    width: 100vw;
  }
  width: 1440px;
  fill: "none";
  margin-top: auto;
`;
const CurveFront = styled(CurveTemplate)`
  @media only screen and (min-width: ${theme.breakpoints.xlarge}) {
    left: -200vw;
  }
  left: -2880px;
  position: relative;
`;
const CurveMiddle = styled(CurveTemplate)`
  @media only screen and (min-width: ${theme.breakpoints.xlarge}) {
    left: -100vw;
  }
  left: -1440px;
  position: relative;
`;
const CurveBack = styled(CurveTemplate)``;
const GradientBG = styled.div`
  background: linear-gradient(180deg, #6917b4 10%, #1f1f1f 80%);
  /* height: 100vh; */
  z-index: -99;
  align-self: stretch;
  margin-top: -6px;
`;

const EngineerPlus: React.FC = () => {
  // const [currentWindowWidth, setCurrentWindowWidth] = useState(0);
  const [engineerPlusHeight, setEngineerPlusHeight] = useState(0);
  const engineerPlusSection = useRef<HTMLDivElement>(null);
  const eyebrows = useRef<HTMLImageElement>(null);
  const cardContainer = useRef<HTMLDivElement>(null);
  const backgroundElements = useRef<SVGSVGElement>(null);
  const [backgroundElementsHeight, setBackgroundElementsHeight] = useState(0);
  const [cardContainerPositioning, setCardContainerPositioning] = useState({
    height: 0,
    y: 0,
  });
  useEffect(() => {
    if (engineerPlusSection.current) {
      setEngineerPlusHeight(
        engineerPlusSection.current?.getBoundingClientRect().height
      );
    }
    if (cardContainer.current) {
      setCardContainerPositioning({
        height: cardContainer.current?.getBoundingClientRect().height,
        y: cardContainer.current?.getBoundingClientRect().y,
      });
    }

    if (backgroundElements.current) {
      setBackgroundElementsHeight(
        backgroundElements.current?.getBoundingClientRect().height
      );
    }
    window.addEventListener(
      "resize",
      function () {
        if (backgroundElements.current) {
          setBackgroundElementsHeight(
            backgroundElements.current?.getBoundingClientRect().height
          );
        }
      },
      true
    );
  }, []);

  // window.onresize = function () {
  //   if (backgroundElements.current) {
  //     setBackgroundElementsHeight(
  //       backgroundElements.current?.getBoundingClientRect().height
  //     );
  //     console.log(backgroundElements.current?.getBoundingClientRect().height);
  //   }
  // };

  useGSAP(() => {
    gsap.to("#curve_back_start", {
      duration: 15,
      morphSVG: "#curve_back_end",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to("#curve_middle_start", {
      duration: 13,
      morphSVG: "#curve_middle_end",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to("#curve_front_start", {
      duration: 9,
      morphSVG: "#curve_front_end",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
    });
    tl.to(eyebrows.current, {
      y: "-3px",
      duration: 0.1,
    })
      .to(eyebrows.current, {
        y: "0px",
        duration: 0.1,
      })
      .to(eyebrows.current, {
        y: "-3px",
        duration: 0.1,
      })
      .to(eyebrows.current, {
        y: "0px",
        duration: 0.1,
      });
  });
  return (
    // consider a rewrite:
    // scenario stays
    // replace traditional engineer with "relavent skills"
    // replace Engineer+ with "How I'd handle it"
    // May need to change Engineer+ branding. Might not be a bad thing
    // considering I could use this for Design Engineer roles too.
    // Would also need to change title in footer
    // Also, make my picture bigger on mobile.

    <EngineerPlusWrapper ref={engineerPlusSection}>
      <ContentWrapper>
        <SectionTitleContainer>
          <Text1>What you need is a</Text1>
          <Text2>Design Engineer</Text2>
        </SectionTitleContainer>
        <PhotoDescriptionContainer>
          <LeftText1>
            With a decade of industry experience, cross-training, and empathy
            for other practices, my skill set is exactly what your team needs to
            move fast when things are uncertain.
          </LeftText1>
          <MyPhoto
            src={`${process.env.PUBLIC_URL}/assets/images/engineer_plus/face_bg.png`}
          />
          <Eybrows
            ref={eyebrows}
            src={`${process.env.PUBLIC_URL}/assets/images/engineer_plus/eyebrows.png`}
          />
        </PhotoDescriptionContainer>
        <Text3>
          What will your <ColorSpan>next hire</ColorSpan> do when things get
          tricky?
        </Text3>
        <CardContainer ref={cardContainer}>
          <CaseCard
            heading="Your team has defined the feature, but product design is held up with a competing priority."
            traditionalEngineer={[
              "10 years in product design",
              "Experience as a PM",
              "User research experience",
            ]}
            engineerPlus="First, leverage any user research and design system guidelines to build a rough version of the feature quickly and share with design for critique. Next, integrate feedback and focus on shipping quickly. The end result would balance performance, visual consistancy, accessibility, and tight scope."
          />
          <CaseCard
            heading="Velocity is extremely volatile, and the stakeholders are feeling antsy."
            traditionalEngineer={[
              "Experience coaching engineering teams",
              "Worked as a VP-level stakeholder",
              "Managed a portfolio of teams",
            ]}
            engineerPlus="Seeing the warning signs, I've likely already proposed changes to the estimation process, and begun investigating other sources of toil. Together, the team and I run an experiment and measure velocity week over week. We involve stakeholders in active conversation and updates."
          />
          <CaseCard
            heading="Design and engineering keep talking past each other. It’s slowing everything down."
            traditionalEngineer={[
              "Extensive consulting experience",
              "Spent years coaching designers at all levels",
              "Developed novel process workflows on multiple teams",
            ]}
            engineerPlus="With a deep understanding of the design process and tools, I've already had 'hallway conversations' with design about how handoff should work. I actively pair with design and product to make sure misunderstandings are caught early, and the process improves over time."
          />
        </CardContainer>
      </ContentWrapper>
      <BackgroundElements style={{ top: `${-engineerPlusHeight * 0.7}px` }}>
        <CurvesContainer>
          <CurveBack
            ref={backgroundElements}
            viewBox="0 0 1280 811"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1280.01 370.004C1280.01 370.004 1149.93 403.332 1008 353.5C815.456 285.9 549.318 112.016 376.5 89.4987C112.5 55.1007 0.00123347 0.00331777 0.00123347 0.00331777L4.76679e-05 811.002L1280 811.003L1280.01 370.004Z"
              fill="url(#curve_back_fill)"
              id="curve_back_start"
            />
            <path
              d="M1280.01 370.004C1280.01 370.004 1139.94 356.336 998.005 306.504C805.461 238.904 554.821 158.016 382.003 135.498C118.002 101.1 0.00123347 0.00331777 0.00123347 0.00331777L6.44824e-06 811.003L1280 811.003L1280.01 370.004Z"
              fill="transparent"
              id="curve_back_end"
            />

            <defs>
              <linearGradient
                id="curve_back_fill"
                x1="868.826"
                y1="47.6712"
                x2="681.78"
                y2="857.239"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#8468FF" />
                <stop offset="1" stop-color="#EFEAFF" />
              </linearGradient>
            </defs>
          </CurveBack>
          <CurveMiddle
            viewBox="0 0 1280 621"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.00027114 0.495917C-0.00027114 0.495917 161.391 197.326 362.5 184.5C566.151 171.511 775.947 307.239 948 335C1199 375.5 1280 292.452 1280 292.452L1280 620.998L1.75944e-06 620.999L-0.00027114 0.495917Z"
              fill="url(#curve_middle_fill)"
              id="curve_middle_start"
            />
            <path
              d="M4.53178e-05 0.497521C4.53178e-05 0.497521 168.392 105.823 369.5 92.9961C573.151 80.0074 742.188 165.424 898 243.498C1124.5 356.992 1280 292.453 1280 292.453L1280 621L0.0003165 621L4.53178e-05 0.497521Z"
              fill="transparent"
              id="curve_middle_end"
            />
            <defs>
              <linearGradient
                id="curve_middle_fill"
                x1="512.052"
                y1="212.079"
                x2="325.006"
                y2="1021.65"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#785BF7" />
                <stop offset="1" stop-color="#8267fa" />
              </linearGradient>
            </defs>
          </CurveMiddle>
          <CurveFront
            viewBox={`0 0 1280 428`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 26.9033C0 26.9033 114.5 -22.2995 259.5 12.3747C496.692 69.0951 546 331.477 903.5 234.483C1110.73 178.258 1280 337.569 1280 337.569V428H0V26.9033Z"
              fill="url(#curve_front_fill)"
              id="curve_front_start"
            />
            <path
              d="M0 0C0 0 52 73 197 110C434.192 170.525 461 411 818.5 307.5C1025.73 247.504 1280 417 1280 417V428H0V0Z"
              fill="transparent"
              id="curve_front_end"
            />

            <defs>
              <linearGradient
                id="curve_front_fill"
                x1="637.595"
                y1="-100.545"
                x2="640.146"
                y2="1176.31"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.145473" stop-color="#6F2DFC" />
                <stop offset="0.65558" stop-color="#620373" />
                <stop offset="1" stop-color="#1C0021" />
              </linearGradient>
            </defs>
          </CurveFront>
        </CurvesContainer>
        <GradientBG
          // style={{
          //   height: `${
          //     window.innerWidth > 1440
          //       ? "30vw"
          //       : `${
          //           cardContainerPositioning.height - backgroundElementsHeight
          //         }px`
          //   }`,
          // }}
          style={{
            height: `${
              cardContainerPositioning.height - backgroundElementsHeight + 520
            }px`,
          }}
        >
          <span
            // style={{
            //   height: `${
            //     window.innerWidth > 1440
            //       ? "30vw"
            //       : `${
            //           cardContainerPositioning.height - backgroundElementsHeight
            //         }px`
            //   }`,
            //   display: "block",
            // }}
            style={{
              height: `${
                cardContainerPositioning.height - backgroundElementsHeight + 520
              }px`,
              display: "block",
              color: "red",
            }}
          ></span>
        </GradientBG>
      </BackgroundElements>
    </EngineerPlusWrapper>
  );
};

export default EngineerPlus;
