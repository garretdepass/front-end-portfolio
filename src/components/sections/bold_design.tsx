import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import SectionWrapper from "../layout/section_wrapper";

const BoldWrapper = styled.section`
  @media (min-width: 1800px) {
    margin: 40vh auto;
  }
  height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${theme.spacing.maxWidth};
  background-attachment: fixed;
  /* position: relative; */
  background-image: url("https://picsum.photos/1920/1080");
  margin: 30vw auto;
  background-size: cover;
  background-position: center;
`;

const Background = styled.div`
  background-image: url("https://picsum.photos/1920/1080");
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

const FallbackText = styled.h1`
  @media (max-width: ${theme.breakpoints.xlarge}) {
    font-size: 20vw;
    line-height: 18vw;
  }
  @media (max-width: ${theme.breakpoints.small}) {
    font-size: 23vw;
    line-height: 22vw;
  }
  font-size: ${theme.fontSizes.display_large};
  font-weight: 900;
  font-family: ${theme.fontFamily.base};
  text-transform: uppercase;
  text-align: left;
  line-height: 288px;
`;

const ClipText = styled(FallbackText)`
  -webkit-background-clip: text;
  background-clip: text;
  background-attachment: fixed;
  color: transparent;
  background-image: inherit;
  background-size: cover;
  background-position: center;
  margin: 0;
`;

function isFirefox(): boolean {
  return (
    typeof navigator !== "undefined" && /firefox/i.test(navigator.userAgent)
  );
}

function isMobile(): boolean {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

const BoldDesign: React.FC = () => {
  const [canUseClipText, setCanUseClipText] = useState<boolean>(true);
  useEffect(() => {
    if (isFirefox() || isMobile()) setCanUseClipText(false);
  }, []);
  return (
    <SectionWrapper>
      <BoldWrapper>
        {canUseClipText ? (
          <ClipText>I love bold design</ClipText>
        ) : (
          <FallbackText>I love bold design</FallbackText>
        )}
      </BoldWrapper>
    </SectionWrapper>
  );
};
export default BoldDesign;
