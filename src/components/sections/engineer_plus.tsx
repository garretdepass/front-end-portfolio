import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import CaseCard from "../elements/case_card";
import ComingSoonModal from "../elements/coming_soon_modal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const EngineerPlusWrapper = styled.section``;

const ContentWrapper = styled.div`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    margin-top: 80px;
  }
  padding: 20vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10vh;
  text-align: center;
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
  @media screen and (max-width: ${theme.breakpoints.small}) {
    max-width: 344px;
  }
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
  padding: 0 ${theme.spacing.large};
`;

const PhotoDescriptionContainer = styled.div`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 64px;
  }
  display: flex;
  max-width: 1000px;
  align-items: center;
  padding: 0 ${theme.spacing.large};
`;

const MyPhoto = styled.img`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    height: 300px;
  }
  height: 256px;
  aspect-ratio: 1;
  border-radius: 16px;
`;

const Eybrows = styled.img`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    height: 24px;
    top: -215px;
    left: -24px;
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
  top: -200px;
`;
const CurvesContainer = styled.div`
  white-space: nowrap;
  align-self: stretch;
  z-index: -100;
  overflow-y: visible;
`;

const CardContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  max-width: 1000px;
  gap: 10vh;
  justify-content: center;
  align-self: stretch;
  margin: 0 auto;
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
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    top: 600px;
  }
  @media only screen and (min-width: ${theme.breakpoints.xlarge}) {
    left: -200vw;
  }
  left: -2880px;
  position: relative;
`;
const CurveMiddle = styled(CurveTemplate)`
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    top: 400px;
  }
  @media only screen and (min-width: ${theme.breakpoints.xlarge}) {
    left: -100vw;
  }
  left: -1440px;
  position: relative;
`;
const CurveBack = styled(CurveTemplate)`
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    position: relative;
    top: 200px;
  }
`;

const GradientBG = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    top: 600px;
  }
  position: relative;
  background-color: #5627c9;
  height: 2000px;
  z-index: -99;
  align-self: stretch;
  margin-top: -6px;
  display: block;
`;

const EngineerPlus: React.FC = () => {
  const engineerPlusSection = useRef<HTMLDivElement>(null);
  const eyebrows = useRef<HTMLImageElement>(null);
  const cardContainer = useRef<HTMLDivElement>(null);
  const backgroundElements = useRef<HTMLDivElement>(null);
  const curvesContainer = useRef<HTMLDivElement>(null);
  const bgGradient = useRef<HTMLSpanElement>(null);
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false);

  const handleComingSoonClick = () => {
    setIsComingSoonModalOpen(!isComingSoonModalOpen);
  };

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
    <EngineerPlusWrapper ref={engineerPlusSection}>
      <ContentWrapper>
        <SectionTitleContainer>
          <Text1>Yeah, I get it.</Text1>
          <Text2>I'm here to help</Text2>
        </SectionTitleContainer>
        <PhotoDescriptionContainer>
          <MyPhoto
            src={`${process.env.PUBLIC_URL}/assets/images/engineer_plus/face_bg.png`}
          />
          <Eybrows
            ref={eyebrows}
            src={`${process.env.PUBLIC_URL}/assets/images/engineer_plus/eyebrows.png`}
          />
          <LeftText1>
            I have a decade of experience building digital products across
            dozens of teams, companies, and industries. Need crunchy interaction
            design for complicated workflows? What about a polished landing page
            that speaks to deep user needs and converts like a dream? Mobile?
            Web? User research? Design systems? Design + code?
            <br />
            <br />
            I’ve got you covered.
          </LeftText1>
        </PhotoDescriptionContainer>
        <Text3>Take a look at some of my recent work.</Text3>
        <BackgroundElements ref={backgroundElements} id="backgroundElements">
          <CurvesContainer ref={curvesContainer} id="curvesContainer">
            <CurveBack
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
                  x1="0"
                  y1="0%"
                  x2="0"
                  y2="200%"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.045473" stop-color="#6F2DFC" />
                  <stop offset="0.35558" stop-color="#5627c9" />
                  {/* <stop offset="1" stop-color="#1C0021" /> */}
                </linearGradient>
              </defs>
            </CurveFront>
          </CurvesContainer>
          <GradientBG id="gradientBG">
            <span
              ref={bgGradient}
              style={{
                // controls the height of the gradient block below animated curves
                height: "2000px",
                display: "block",
              }}
            />
          </GradientBG>
        </BackgroundElements>
        <CardContainer ref={cardContainer}>
          <CaseCard
            title="Location and ID"
            imageSrc="assets/images/code/location_identity_thumbnail.png"
            tags={["Interaction design", "Responsive", "Web app"]}
            description="Added location and identity verification for an asynchronous, remote medical platform, protecting providers licences and elevating quality of care."
            linkText="View annotated Figma file"
            linkURL="https://www.figma.com/design/8T9NA832SUheeNi2ho0In3/Location-and-Identity---2025?node-id=19-21243&t=J7TZMQixb4WwJaZL-11"
            comingSoon={false}
            openModal={handleComingSoonClick}
            newWindow={true}
          />
          <CaseCard
            title="Patient self-routing"
            imageSrc="assets/images/code/patient_self_routing_thumbnail.png"
            tags={["Mobile", "Web app", "Service design"]}
            description="Updated medical app core chat experience to improve discoverability for patients and reduce the provider-side toil of manually routing messages."
            linkText="View case study"
            linkURL=""
            comingSoon={true}
            openModal={handleComingSoonClick}
            newWindow={false}
          />
          <CaseCard
            title="Item Findability"
            imageSrc="assets/images/code/item_findability_thumbnail.png"
            tags={["Mobile", "App modernization", "Service design"]}
            description="Modernized retail tech stack while building employee trust in data by increasing inventory tracking robustness."
            linkText="View case study"
            linkURL=""
            comingSoon={true}
            openModal={handleComingSoonClick}
            newWindow={false}
          />
          <CaseCard
            title="Tempo mobile app"
            imageSrc="assets/images/code/tempo_thumbnail.png"
            tags={["Visual design", "Mobile", "Research & Testing"]}
            description="Designed a digital therapeutic app currently treating fibromayalgia by prescription in large patient population"
            linkText="View case study"
            linkURL=""
            comingSoon={true}
            openModal={handleComingSoonClick}
            newWindow={false}
          />
        </CardContainer>
        {isComingSoonModalOpen && (
          <ComingSoonModal
            isOpen={isComingSoonModalOpen}
            onClose={handleComingSoonClick}
          />
        )}
      </ContentWrapper>
    </EngineerPlusWrapper>
  );
};

export default EngineerPlus;
