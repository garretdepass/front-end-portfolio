import React, { RefObject } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const Wrapper = styled.section`
  @media only screen and (max-width: ${theme.breakpoints.xlarge}) {
    padding: 0 80px;
  }
  @media (max-width: ${theme.breakpoints.small}) {
    padding: 0 24px;
  }
  padding: 0 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  justify-content: center;
  max-width: ${theme.spacing.maxWidth};
  margin: 0 auto;
`;

// type props = { children: React.ReactNode };

// const SectionWrapper = React.forwardRef<HTMLDivElement, props>((props, ref) => (
//   <Wrapper>{props.children}</Wrapper>
// ));

type Props = {
  children?: React.ReactNode;
  wrapperRef?: RefObject<HTMLDivElement | null>;
};

const SectionWrapper: React.FC<Props> = ({ children, wrapperRef }) => {
  return <Wrapper ref={wrapperRef}>{children}</Wrapper>;
};

export default SectionWrapper;
