import React, { useEffect, useRef, useState, RefObject } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import SectionWrapper from "../layout/section_wrapper";

const Container = styled.section`
  text-align: left;
  padding: 104px 0;
`;

const Heading = styled.p`
  font-size: ${theme.fontSizes.base};
  text-align: center;
  padding: 0 24px;
  margin: 0 auto;
  width: fit-content;
`;

const Highlight = styled.span`
  background-color: ${theme.colors.purple_300};
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 2px;
  font-weight: 700;
`;

const BodyText = styled.p`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    font-size: 7.45vw;
    font-weight: 800;
    line-height: 72%; /* 39.6px */
    text-transform: uppercase;
    width: 150%;
    position: relative;
    left: -2%;
    margin-top: 40vh;
  }

  font-size: 4.45vw;
  font-weight: 800;
  line-height: 72%; /* 39.6px */
  text-transform: uppercase;
  width: 115%;
  position: relative;
  left: -2%;
  margin-top: 40vh;

  &::before {
    @media screen and (max-width: ${theme.breakpoints.small}) {
      height: 50%;
      width: 140vw;
      left: -15vw;
      top: 25%;
    }
    content: "";
    position: absolute;
    margin: 0 auto;
    top: 30%;
    left: -10vw;
    width: 120vw;
    height: 40%;
    transform: rotate(12.881deg);
    background-color: ${theme.colors.purple_400};
    z-index: -100;
  }
`;

const BodySpacer = styled.span`
  padding: 0 1vw;
`;

const Hiring = () => {
  return (
    <Container>
      <Heading>
        But let’s talk about <Highlight>you</Highlight> for a second. How’s
        hiring going?
      </Heading>
      <BodyText>
        <BodySpacer />
        Hiring is hard, especially right now. our pipeline is full of
        candidates. How many of these are AI?! How do we choose the right one?
        Can they handle our most complicated problems? How do they work with
        engineers and Product Managers? Can they ship quickly without
        hand-holding? Do they offer a unique perspective? Will they do enough
        research? Will they do too much Research? How is their taste level? We
        have to fill this spot soon. Have they worked on something like our
        product before? Will they be able to get up to speed quickly? What about
        our design system — it’s in rough shape and we should probably update
        our button styling. Oh, what about accessibility? Can they make sure
        everything is WCAG AA or better? We don’t really have a global view of
        all of our workflows. Will that be a problem for them?
      </BodyText>
    </Container>
  );
};

export default Hiring;
