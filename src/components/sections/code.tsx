import React from "react";
import { theme } from "../../styles/theme";
import styled from "styled-components";
import SectionWrapper from "../layout/section_wrapper";
import Link from "../primitives/link";

const ContentWrapper = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    padding-top: 144px;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 160px;
  gap: 80px;
  align-self: stretch;
`;

const Text1 = styled.h1`
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    font-size: ${theme.fontSizes.base};
  }
  font-size: ${theme.fontSizes.large};
  font-family: ${theme.fontFamily.code};
  color: #6a9956;
  text-align: left;
`;

const Text2 = styled.h2`
  font-size: ${theme.fontSizes.base};
  font-family: ${theme.fontFamily.code};
  text-align: left;
  margin-block-start: 0px;
  margin-block-end: 0px;
`;

const Text3 = styled.p`
  font-size: ${theme.fontSizes.small};
  font-family: ${theme.fontFamily.code};
  color: #cccccc;
  text-align: left;
  font-weight: 700;
  margin-block-start: 0px;
  margin-block-end: 0px;
  line-height: 140%;
`;

const CaseStudyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 80px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const CaseStudy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  max-width: 400px;
`;

const Thumbnail = styled.img`
  border-radius: 6px;
  aspect-ratio: auto;
  height: 120px;
`;

const Code: React.FC = () => {
  return (
    <SectionWrapper backgroundColor="#1f1f1f">
      <ContentWrapper>
        {window.innerWidth < 824 ? (
          <Text1>
            // But we’re here to talk
            <br />
            // engineering. Check out
            <br />
            // some of my code!
          </Text1>
        ) : (
          <Text1>
            // But we’re here to talk engineering.
            <br />
            // Check out some of my code!
          </Text1>
        )}

        <CaseStudyContainer>
          <CaseStudy>
            <Thumbnail src="/assets/images/code/dice_roller_thumbnail.png" />
            <Link
              $color="#569cd6"
              newWindow={true}
              href="https://github.com/garretdepass/deadlands-dice-roller"
            >
              <Text2>Dice Roller</Text2>
            </Link>
            <Text3>
              A minimal web app for tabletop roleplaying. It streamlines
              character and roll management so players can focus on the game.
            </Text3>
          </CaseStudy>
          <CaseStudy>
            <Thumbnail src="/assets/images/code/portfolio_thumbnail.png" />
            <Link
              $color="#569cd6"
              newWindow={true}
              href="https://github.com/garretdepass/front-end-portfolio"
            >
              <Text2>This website</Text2>
            </Link>
            <Text3>
              Want to see how I coded this website? The source code is available
              on Github.
            </Text3>
          </CaseStudy>
        </CaseStudyContainer>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default Code;
