import react from "react";
import styled from "styled-components";
import { AnyComponent } from "styled-components/dist/types";

const Wrapper = styled.footer`
  padding: 72px 32px;
  background: #f5f5f5;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  margin: 0 auto;
`;

const ColumnLeft = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  flex: 1;
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <ColumnLeft>
          <div>Garret DePass</div>
          <div>Engineer+</div>
        </ColumnLeft>
        <ColumnRight>
          <a href="" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <a
            href="https://github.com/garretdepass"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/garretdepass/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </ColumnRight>
      </ContentContainer>
    </Wrapper>
  );
};

export default Footer;
