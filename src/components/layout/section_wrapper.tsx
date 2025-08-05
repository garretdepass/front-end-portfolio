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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MaxWidth = styled.div`
  padding: 0 160px;
  flex-direction: column;
  width: 100%;
  max-width: ${theme.spacing.maxWidth};
  display: flex;
  flex-direction: column;
`;

type Props = {
  children?: React.ReactNode;
  wrapperRef?: RefObject<HTMLDivElement | null>;
  backgroundColor?: string;
};

const SectionWrapper: React.FC<Props> = ({
  children,
  wrapperRef,
  backgroundColor,
}) => {
  return (
    <Wrapper style={{ backgroundColor: backgroundColor }} ref={wrapperRef}>
      <MaxWidth>{children}</MaxWidth>
    </Wrapper>
  );
};

export default SectionWrapper;
