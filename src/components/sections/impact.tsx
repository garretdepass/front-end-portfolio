import React, { useEffect, useRef, useState, RefObject } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import SectionWrapper from "../layout/section_wrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImpactContent = styled.div`
  height: 50vh;
  padding-top: 30vh;
  width: 100%;
`;
const Text = styled.h1`
  font-size: ${theme.fontSizes.large};
  align-items: baseline;
  /* display: flex;
  flex-direction: row; */
  gap: 3px;
`;

const Period = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 100%;
  background-color: #e53673;
  display: inline-block;
  margin-left: 1px;
  margin-right: 3px;
`;

const MyImpactPanel = styled.div`
  height: 110vh;
  width: max-content;
  background-color: #e53673;
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: center;
  margin-top: -53vh;
  align-items: center;
  gap: 256px;
`;

const ImpactDisplayText = styled.p`
  font-size: ${theme.fontSizes.display_large};
  font-weight: 700;
  color: ${theme.colors.neutral_600};
  text-transform: uppercase;
`;

const ImpactExampleText = styled.p`
  @media (max-width: ${theme.breakpoints.small}) {
    font-size: ${theme.fontSizes.small};
    max-width: 90vw;
    text-align: left;
  }
  font-family: ${theme.fontFamily.base};
  font-size: ${theme.fontSizes.large};
  font-weight: 700;
  color: ${theme.colors.neutral_600};
`;

const ImpactExampleLabel = styled.p`
  @media (max-width: ${theme.breakpoints.small}) {
    max-width: 80vw;
    text-align: left;
  }
  font-family: ${theme.fontFamily.base};
  font-size: ${theme.fontSizes.xsmall};
  font-weight: 700;
  color: ${theme.colors.neutral_600};
  margin-bottom: 24px;
`;

type ImpactProps = {
  impactSectionRef: RefObject<HTMLDivElement | null>;
};

const Impact: React.FC<ImpactProps> = ({ impactSectionRef }) => {
  // const sectionRef = useRef<HTMLDivElement>(null);
  const periodRef = useRef<HTMLDivElement>(null);
  const expanderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const myImpactPanelRef = useRef<HTMLDivElement>(null);
  const impactDetailGroupRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [impactPanelBounding, setImpactPanelBounding] = useState({
    width: 0,
    height: 0,
    y: 0,
  });

  useEffect(() => {
    if (myImpactPanelRef.current) {
      const rect = myImpactPanelRef.current.getBoundingClientRect();
      setImpactPanelBounding({
        width: rect.width,
        height: rect.height,
        y: rect.y,
      });
    }

    document.addEventListener("scroll", () => setScrollY(window.scrollY));
  }, []);
  function getPeriodScaleFactor(): number {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return width > height ? (width / 6) * 2 : (height / 6) * 1.5;
  }

  useGSAP(() => {
    gsap.to(periodRef.current, {
      scrollTrigger: {
        trigger: periodRef.current,
        start: "center center",
        end: `+=${1.2 * impactPanelBounding.width}`,
        pin: sectionRef.current,
        pinSpacing: "margin",
        // markers: true,
      },
    });
    gsap.to(periodRef.current, {
      scrollTrigger: {
        trigger: periodRef.current,
        start: "top 20%",
        end: "+=600",
        scrub: 3,
      },
      scale: getPeriodScaleFactor(),
      ease: "power2.out",
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: periodRef.current,
        start: "bottom top",
        end: `+=${impactPanelBounding.width}`,
        scrub: 1,
      },
    });
    tl.fromTo(
      myImpactPanelRef.current,
      { xPercent: 100, duration: 8 },
      {
        xPercent: -110,
      }
    ).to(periodRef.current, {
      scale: 1,
    });
  }, [impactPanelBounding]);
  return (
    // <SectionWrapper wrapperRef={impactSectionRef}>
    // {/* <SectionWrapper ref={wrapperRef}> */}
    <ImpactContent ref={sectionRef}>
      <Text>
        {scrollY < 4016
          ? "I also know that little moments of delight can make a big impact"
          : "And that's what you're looking for"}
        <span>
          <Period ref={periodRef} />
        </span>
        {scrollY > 4016 && " Right?"}
      </Text>
      <MyImpactPanel ref={myImpactPanelRef}>
        <ImpactDisplayText>And I'm all about impact:</ImpactDisplayText>
        <div ref={impactDetailGroupRef}>
          <ImpactExampleLabel>In previous roles, I...</ImpactExampleLabel>
          <ImpactExampleText>
            Designed patient-to-provider communications platform that saved a
            patient’s eye from cancer.
          </ImpactExampleText>
          <ImpactExampleText>
            Reduced development cycle time by implementing self-serve design
            handoff processes.
          </ImpactExampleText>
          <ImpactExampleText>
            Added accessibility compliance to web app, increasing adoption by 8%
          </ImpactExampleText>
          <ImpactExampleText>
            Shipped a medical app that’s now helping thousands with
            fibromayalgia
          </ImpactExampleText>
          <ImpactExampleText>
            Shipped a business-critical EMR platform, saving the company
            millions.
          </ImpactExampleText>
          <ImpactExampleText>
            Reduced time to first cook (a critical metric for IoT startup) by
            15%
          </ImpactExampleText>
          <ImpactExampleText>
            Increased revenue on key ecommerce pages by 20%
          </ImpactExampleText>
        </div>
      </MyImpactPanel>
    </ImpactContent>
    // </SectionWrapper>
  );
};

export default Impact;
