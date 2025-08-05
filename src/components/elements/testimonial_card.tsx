import React from "react";
import { theme } from "../../styles/theme";
import styled from "styled-components";
import Link from "../primitives/link";

const Card = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    max-width: 360px;
  }
  max-width: 440px;
  display: flex;
  gap: 24px;
  background-color: ${theme.colors.neutral_600};
  border-radius: 8px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 24px;
  margin: 48px auto;
`;

const TestimonialContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
`;

const Avatar = styled.img``;

const cardText = styled.p`
  text-align: left;
  color: #000;
  font-family: ${theme.fontFamily.base};
  margin-block-start: 0;
  margin-block-end: 0;
`;
const Name = styled(cardText)`
  font-size: ${theme.fontSizes.base};
  font-style: normal;
  font-weight: 700;
`;

const Title = styled(cardText)`
  font-size: ${theme.fontSizes.xsmall};
  font-style: normal;
  font-weight: 400;
`;

const Testimonial = styled(cardText)`
  font-family: ${theme.fontFamily.base};
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 400;
  line-height: 33px; /* 137.5% */
`;

type Props = {
  children: React.ReactNode;
  name: string;
  title: string;
};

const TestimonialCard: React.FC<Props> = ({ name, title, children }) => {
  return (
    <Card>
      <TestimonialContentContainer>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Testimonial>{children}</Testimonial>
        <Link
          href="https://www.linkedin.com/in/garretdepass/details/recommendations/"
          newWindow={true}
        >
          Read more
        </Link>
      </TestimonialContentContainer>
    </Card>
  );
};

export default TestimonialCard;
