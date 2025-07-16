import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const Wrapper = styled.section`
  @media (min-width: 640px) {
    padding: 0 ${theme.spacing.wrapperSidePadding};
  }
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
  max-width: ${theme.spacing.maxWidth};
  margin: 0 auto;
`;

type props = { children: React.ReactNode };

const SectionWrapper: React.FC<props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default SectionWrapper;
