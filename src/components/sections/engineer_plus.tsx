import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import CaseCard from "../elements/case_card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const EngineerPlusWrapper = styled.section`
  padding-top: 20vh;
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
  max-width: 500px;
`;

const ColorSpan = styled.span`
  background-color: ${theme.colors.purple_300};
  padding: 0 4px;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhotoDescriptionContainer = styled.div`
  display: flex;
  max-width: 700px;
  align-items: center;
`;

const MyPhoto = styled.img`
  height: 256px;
  aspect-ratio: 1;
  border-radius: 16px;
`;

const Eybrows = styled.img`
  height: 20px;
  position: relative;
  top: -25px;
  left: -187px;
`;

const CurvesContainer = styled.div`
  /* height: 0px; */
  align-self: stretch;
  height: 0px;
  z-index: -100;
  position: relative;
  top: -1627px;
  /* display: flex;
  align-items: flex-end; */
  overflow-y: visible;
`;
const Curve0 = styled.svg`
  width: ${window.innerWidth};
  height: 1427;
  fill: "none";
`;
const Curve1 = styled.svg`
  width: ${window.innerWidth};
  height: 1427;
  fill: "none";
  position: relative;
  top: -2100px;
`;
const Curve2 = styled.svg`
  width: ${window.innerWidth};
  height: 1427;
  fill: "none";
  position: relative;
  top: -4500px;
`;

const EngineerPlus: React.FC = () => {
  const eyebrows = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    gsap.to("#curve_0_start", {
      duration: 19,
      morphSVG: "#curve_0_end",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to("#curve_1_start", {
      duration: 16,
      morphSVG: "#curve_1_end",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to("#curve_2_start", {
      duration: 12,
      morphSVG: "#curve_2_end",
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
    <EngineerPlusWrapper>
      <SectionTitleContainer>
        <Text1>Think of me as an</Text1>
        <Text2>Engineer+</Text2>
      </SectionTitleContainer>
      <PhotoDescriptionContainer>
        <LeftText1>
          With more industry experience, cross-training, and empathy for other
          practices, an <span style={{ fontWeight: 700 }}>Engineer+</span> is
          exactly what your team needs to move fast when things are uncertain.
        </LeftText1>
        <MyPhoto src="/assets/images/engineer_plus/face_bg.png" />
        <Eybrows
          ref={eyebrows}
          src="/assets/images/engineer_plus/eyebrows.png"
        />
      </PhotoDescriptionContainer>
      <Text3>
        What will your <ColorSpan>next</ColorSpan> engineering hire do when
        things get tricky?
      </Text3>
      <CaseCard
        heading="Your team has defined the feature, but design is held up with a competing priority."
        traditionalEngineer="No design experience, so they may be fully blocked. They might ship something, but it probably won’t look consistent with the rest of the product."
        engineerPlus="Takes into account any user research that’s been done. Leverages the design system (even if it’s just in figma). Builds a feature that looks good and performs well."
      />
      <CaseCard
        heading="Velocity is extremely volatile, and the stakeholders are feeling antsy."
        traditionalEngineer="No PM experience, so they feel frustrated and don’t know why. They wonder why stakeholders keep hassling them, when they’re doing the best they can."
        engineerPlus="Seeing the warning signs, he has already proposed changes to the estimation process, and begun investigating other sources of toil. Together, he and the team run an experiment and update stakeholders."
      />
      <CaseCard
        heading="Design and engineering keep talking past each other. It’s slowing everything down."
        traditionalEngineer="No consulting experience, so they make assumptions about what design intended in the design file. They build the feature, mark it for review, and move onto the next task."
        engineerPlus="Has a deep understanding of the design process and tools. Has already had discussions with design about how handoff should work. Actively pairs with design and product to make sure misunderstandings are caught early."
      />

      <CurvesContainer>
        <Curve0 viewBox="0 0 1280 1427" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1280 645C1280 645 1054.35 247.233 904 252C699 258.5 581.317 381.017 408.5 358.5C144.5 324.102 -0.000445142 0.00251061 -0.000445142 0.00251061L-0.000455456 1699L1280 1699L1280 645Z"
            fill="url(#curve_0_fill)"
            id="curve_0_start"
          />
          <path
            d="M1280 370C1280 370 1139.93 356.332 998 306.5C805.457 238.9 554.817 158.012 382 135.495C118 101.097 -0.00016142 -7.1931e-05 -0.00016142 -7.1931e-05L-0.000102397 1601L1280 1601L1280 370Z"
            fill="transparent"
            id="curve_0_end"
          />
          {/* <path
            d="M-0.000164752 129.501C111.5 175.003 201.638 0.497868 426.999 0.498783C714.5 0.499949 830.5 407.498 1035 407.499C1167.59 407.499 1223 309.003 1280 229.501L1280 1505L0.000102688 1505L-0.000164752 129.501Z"
            fill="url(#curve_1_fill)"
            id="curve_1_start"
          />
          <path
            d="M4.53178e-05 0.497521C4.53178e-05 0.497521 168.392 105.823 369.5 92.9961C573.151 80.0074 742.188 165.424 898 243.498C1124.5 356.992 1280 292.453 1280 292.453L1280 1411L0.000320372 1411L4.53178e-05 0.497521Z"
            fill="transparent"
            id="curve_1_end"
          />
          <path
            d="M0 197C91.5 221.5 136.5 0.5 279.5 0.5C511 0.5 440 117.5 827.5 17.5C1096.07 -51.8096 1280 379 1280 379V1170H0V197Z"
            fill="url(#curve_2_fill)"
            id="curve_2_start"
          />
          <path
            d="M0 0C0 0 52 73 197 110C434.192 170.525 461 411 818.5 307.5C1025.73 247.504 1280 417 1280 417V1218H0V0Z"
            fill="transparent"
            id="curve_2_end"
          /> */}

          <defs>
            <linearGradient
              id="curve_0_fill"
              x1="868.826"
              y1="47.6712"
              x2="681.78"
              y2="857.239"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#8468FF" />
              <stop offset="1" stop-color="#EFEAFF" />
            </linearGradient>
            {/* <linearGradient
              id="curve_1_fill"
              x1="512.052"
              y1="212.079"
              x2="325.006"
              y2="1021.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#785BF7" />
              <stop offset="1" stop-color="#6D249E" />
            </linearGradient>
            <linearGradient
              id="curve_2_fill"
              x1="637.595"
              y1="458"
              x2="640.5"
              y2="1820.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.145473" stop-color="#6F2DFC" />
              <stop offset="0.65558" stop-color="#620373" />
              <stop offset="1" stop-color="#1C0021" />
            </linearGradient> */}
          </defs>
        </Curve0>
        <Curve1 viewBox="0 0 1280 1427" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-0.000164752 129.501C111.5 175.003 201.638 0.497868 426.999 0.498783C714.5 0.499949 830.5 407.498 1035 407.499C1167.59 407.499 1223 309.003 1280 229.501L1280 1505L0.000102688 1505L-0.000164752 129.501Z"
            fill="url(#curve_1_fill)"
            id="curve_1_start"
          />
          <path
            d="M4.53178e-05 0.497521C4.53178e-05 0.497521 168.392 105.823 369.5 92.9961C573.151 80.0074 742.188 165.424 898 243.498C1124.5 356.992 1280 292.453 1280 292.453L1280 1411L0.000320372 1411L4.53178e-05 0.497521Z"
            fill="transparent"
            id="curve_1_end"
          />
          <defs>
            <linearGradient
              id="curve_1_fill"
              x1="512.052"
              y1="212.079"
              x2="325.006"
              y2="1021.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#785BF7" />
              <stop offset="1" stop-color="#6D249E" />
            </linearGradient>
          </defs>
        </Curve1>
        <Curve2 viewBox="0 0 1280 1427" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 197C91.5 221.5 136.5 0.5 279.5 0.5C511 0.5 440 117.5 827.5 17.5C1096.07 -51.8096 1280 379 1280 379V1170H0V197Z"
            fill="url(#curve_2_fill)"
            id="curve_2_start"
          />
          <path
            d="M0 0C0 0 52 73 197 110C434.192 170.525 461 411 818.5 307.5C1025.73 247.504 1280 417 1280 417V1218H0V0Z"
            fill="transparent"
            id="curve_2_end"
          />

          <defs>
            <linearGradient
              id="curve_2_fill"
              x1="637.595"
              y1="458"
              x2="640.5"
              y2="1820.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.145473" stop-color="#6F2DFC" />
              <stop offset="0.65558" stop-color="#620373" />
              <stop offset="1" stop-color="#1C0021" />
            </linearGradient>
          </defs>
        </Curve2>
      </CurvesContainer>
    </EngineerPlusWrapper>
  );
};

export default EngineerPlus;
