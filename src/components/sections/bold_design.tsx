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

const FallbackText = styled.h1`
  @media (max-width: 1780px) {
    font-size: 20vw;
    line-height: 18vw;
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

const BoldDesign: React.FC = () => {
  const [canUseClipText, setCanUseClipText] = useState<boolean>(true);
  useEffect(() => {
    setCanUseClipText(!isFirefox());
  }, []);
  return (
    <SectionWrapper>
      <BoldWrapper>
        {canUseClipText ? (
          <ClipText>I love bold design</ClipText>
        ) : (
          <FallbackText>I love bold design</FallbackText>
        )}
        {/* <div style={{ backgroundColor: "red" }}>
        </div> */}
      </BoldWrapper>
    </SectionWrapper>
  );
};
export default BoldDesign;
