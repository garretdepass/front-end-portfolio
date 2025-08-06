import React from "react";
import { theme } from "../../styles/theme";
import styled from "styled-components";
import TestimonialCard from "../elements/testimonial_card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

const TestimonialSectionWrapper = styled.div`
  padding: 160px 0;
  background: linear-gradient(252deg, #764ad9 38.07%, #602bd7 77.78%);
  overflow: hidden;
`;

const Text1 = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: ${theme.fontSizes.large};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CircleLeft = styled.div`
  width: 594.376px;
  height: 594.376px;
  transform: rotate(149deg);
  flex-shrink: 0;
  border-radius: 594.376px;
  background: radial-gradient(
    96.42% 240.96% at 5.66% -22.26%,
    #784be0 34.75%,
    #602bd7 84.46%
  );
  position: relative;
  top: -725px;
  left: 120px;
`;

const CircleRight = styled.div`
  width: 833px;
  height: 833px;
  transform: rotate(310deg);
  flex-shrink: 0;
  border-radius: 833px;
  background: radial-gradient(
    281.53% 115.34% at 108.22% 44.48%,
    #7549d9 21.73%,
    #632fd9 87.48%
  );
  position: relative;
  top: -1233px;
  right: -50vw;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 30000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 24,
  },
};

interface TestimonialsProps {
  deviceType?: string;
}

function getIsMobile(): boolean {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

const isMobile = getIsMobile();

const Testimonials: React.FC<TestimonialsProps> = ({ deviceType }) => {
  return (
    <TestimonialSectionWrapper>
      <div style={{ zIndex: 2, position: "relative" }}>
        <Text1>Everyone I’ve worked with has good things to say...</Text1>
        <Carousel
          infiniteLoop={true}
          showIndicators={true}
          showStatus={false}
          centerMode={false}
          centerSlidePercentage={isMobile ? 100 : 50}
          showThumbs={false}
        >
          <TestimonialCard name="Chris de Jong" title="Product Leader">
            "Garret is a true multiplier. His contributions go far beyond his
            own exceptional work. He consistently brings out the best in
            everyone around him, raising the bar for the entire organization."
          </TestimonialCard>
          <TestimonialCard name="Kate Makrigiannis" title="Product Leader">
            "We had to present a set of very technical platform updates, and I
            was struggling to figure out how to tell the story. Garret helped
            translate it, and we ended up with something that actually made
            sense to the stakeholders. He’s so good at pulling signal from
            noise."
          </TestimonialCard>
          <TestimonialCard name="Jesse Youngmann" title="Staff Engineer">
            "He's a master at managing and incorporating feedback and had a keen
            eye towards learning the technical implications and trade-offs of
            designs. He put a lot of work into structuring designs and our
            design library to make it easier to convert and maintain them as
            code."
          </TestimonialCard>
          <TestimonialCard name="Devin Brown" title="Staff Engineer">
            "Garret stood out not just for how hard he worked, but for his sharp
            attention to detail and his ability to consistently push things
            forward. There’s no doubt in my mind: we couldn’t have done it
            without his experience, work ethic, and deep expertise."
          </TestimonialCard>
          <TestimonialCard
            name="Sebastian Wittenkamp"
            title="Engineering consultant"
          >
            "We were working with an outside consultant who was an architect -
            in this instance, Garret collaborated with this person to create
            clarity around their vision for the architecture which helped bridge
            gaps of understanding between three different organizations!"
          </TestimonialCard>
        </Carousel>
      </div>
      <div style={{ height: "0px" }}>
        <CircleLeft />
        <CircleRight />
      </div>
    </TestimonialSectionWrapper>
  );
};

export default Testimonials;
