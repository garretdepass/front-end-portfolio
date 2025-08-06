import react from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import Link from "../primitives/link";

const Wrapper = styled.footer`
  padding: 72px 32px;
  background: ${theme.colors.purple_0};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  margin: 0 auto;
`;

const ColumnLeft = styled.div`
  font-size: 24px;
  text-align: left;
  flex: 1;
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const H1 = styled.h1`
  font-family: ${theme.fontFamily.base};
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: 700;
`;
const Name = styled(H1)`
  color: ${theme.colors.purple_400};
`;

const Title = styled(H1)`
  color: ${theme.colors.purple_300};
`;

const Email = styled.p`
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
          <Title>Engineer+</Title>
          <Email>
            <Link
              href="mailto@garretdepass@gmail.com"
              newWindow={false}
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
