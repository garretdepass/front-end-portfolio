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
  height: 78px;
`;

const Period = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 100%;
  background-color: #e53673;
  display: inline-block;
  margin-left: 1px;
  margin-right: 1px;
`;

const Expander = styled(Period)`
  transform: translateX(-8px);
`;

const MyImpactPanel = styled.div`
  height: 110vh;
  width: max-content;
  /* background-color: ${theme.colors.pink_300}; */
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: center;
  margin-top: -54vh;
  align-items: center;
  gap: 256px;
`;

const ImpactDisplayText = styled.p`
  font-size: ${theme.fontSizes.display_large};
  font-weight: 700;
  color: ${theme.colors.neutral_600};
  text-transform: uppercase;
`;

const ImpactDetailGroup = styled.div`
  width: 80vw;
  text-align: left;
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
    text-align: left;
  }
  width: fit-content;
  font-family: ${theme.fontFamily.base};
  font-size: ${theme.fontSizes.small};
  font-weight: 700;
  color: ${theme.colors.neutral_600};
  margin-bottom: 24px;
`;

const ImpactSpan = styled.span`
  background-color: ${theme.colors.neutral_600};
  color: ${theme.colors.pink_300};
  padding: 0px 8px;
  border-radius: 2px;
`;

function getIsMobile(): boolean {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

const isMobile = getIsMobile();

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
    gsap.set(myImpactPanelRef.current, {
      xPercent: 100,
    });

    // pin section
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: periodRef.current,
        start: "center center",
        end: isMobile
          ? `+=${1.7 * impactPanelBounding.width}`
          : `+=${1.2 * impactPanelBounding.width}`,
        pin: sectionRef.current,
        pinSpacing: "margin",
      },
    });

    // expand period
    gsap.to(expanderRef.current, {
      scrollTrigger: {
        trigger: periodRef.current,
        start: "top 20%",
        end: "+=800",
        scrub: 3,
      },
      scale: getPeriodScaleFactor(),
      ease: "power2.out",
    });

    // scroll impact panel
    gsap.to(myImpactPanelRef.current, {
      scrollTrigger: {
        trigger: periodRef.current,
        start: "top 90%",
        end: "+=9200",
        scrub: 3,
      },
      xPercent: -110,
    });

    // shrink period
    gsap.fromTo(
      expanderRef.current,
      {
        // left empty to preserve "from" state and allow shrink animation to occur.
      },
      {
        scrollTrigger: {
          trigger: periodRef.current,
          start: isMobile ? "+=6900 10%" : "+=6300 10%",
          end: "+=800",
          scrub: 3,
        },
        scale: 1,
        ease: "power2.out",
      }
    );
  }, [impactPanelBounding]);

  return (
    <ImpactContent ref={sectionRef}>
      <Text>
        {scrollY < 4016
          ? "I also know that little moments of delight can make a big impact"
          : "And that's what you're looking for"}
        <span>
          <Period ref={periodRef} />
          <Expander ref={expanderRef} />
        </span>
        {scrollY > 4016 && " Right?"}
      </Text>
      <MyImpactPanel ref={myImpactPanelRef}>
        <ImpactDisplayText>And I'm all about impact:</ImpactDisplayText>
        <ImpactDetailGroup ref={impactDetailGroupRef}>
          <ImpactExampleLabel>In previous roles, I...</ImpactExampleLabel>
          <ImpactExampleText>
            Designed patient-to-provider communications platform that{" "}
            <ImpactSpan>saved a patient’s eye from cancer.</ImpactSpan>
          </ImpactExampleText>
          <ImpactExampleText>
            <ImpactSpan>Reduced development cycle time</ImpactSpan> by
            implementing self-serve design handoff processes.
          </ImpactExampleText>
          <ImpactExampleText>
            Added accessibility compliance to web app,{" "}
            <ImpactSpan>increasing adoption by 8%</ImpactSpan>
          </ImpactExampleText>
          <ImpactExampleText>
            Shipped a medical app that’s now{" "}
            <ImpactSpan>helping thousands</ImpactSpan> with fibromayalgia
          </ImpactExampleText>
          <ImpactExampleText>
            Shipped a business-critical EMR platform,{" "}
            <ImpactSpan>saving the company millions.</ImpactSpan>
          </ImpactExampleText>
          <ImpactExampleText>
            Reduced time to first cook (a critical metric for IoT startup){" "}
            <ImpactSpan>by 15%</ImpactSpan>
          </ImpactExampleText>
          <ImpactExampleText>
            <ImpactSpan>Increased revenue</ImpactSpan> on key ecommerce pages by
            20%
          </ImpactExampleText>
        </ImpactDetailGroup>
      </MyImpactPanel>
    </ImpactContent>
  );
};

export default Impact;
