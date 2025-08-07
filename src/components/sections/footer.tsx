import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import Link from "../primitives/link";

const Wrapper = styled.footer`
  padding: 72px 32px;
  background: ${theme.colors.purple_0};
`;

const ContentContainer = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 64px;
  }
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  margin: 0 auto;
  align-items: center;
`;

const ColumnLeft = styled.div`
  font-size: 24px;
  text-align: left;
  flex: 1;
`;

const ColumnRight = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    flex-direction: row;
    justify-content: flex-start;
  }
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: center;
  gap: 24px;
  align-self: stretch;
`;

const H1 = styled.h1`
  font-family: ${theme.fontFamily.base};
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: 500;
`;
const Name = styled(H1)`
  color: ${theme.colors.purple_400};
`;

const Title = styled(H1)`
  color: ${theme.colors.purple_300};
`;

const Email = styled.p`
  font-family: ${theme.fontFamily.base};
  color: ${theme.colors.neutral_600};
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
`;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <ColumnLeft>
          <Name>Garret DePass</Name>
          <Title>Design Engineer</Title>
          <Email>
            <Link
              href="mailto:garretdepass@gmail.com"
              newWindow={true}
              $color={theme.colors.neutral_600}
            >
              garretdepass@gmail.com
            </Link>
          </Email>
        </ColumnLeft>
        <ColumnRight>
          <Link
            href="public/garretDePassResume.pdf"
            newWindow={true}
            $color={theme.colors.neutral_600}
          >
            Resume
          </Link>
          <Link
            href="https://github.com/garretdepass"
            newWindow={true}
            $color={theme.colors.neutral_600}
          >
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/garretdepass/"
            newWindow={true}
            $color={theme.colors.neutral_600}
          >
            LinkedIn
          </Link>
        </ColumnRight>
      </ContentContainer>
    </Wrapper>
  );
};

export default Footer;
