import React from "react";
import Button from "./button";
import styled from "styled-components";

const BussButtonContainer = styled.div``;
const Wheel = styled.div`
  width: 24px;
  height: 12px;
  background-color: #535353;
  border-radius: 4px;
  position: relative;
  z-index: -1;
`;

const Wheel1 = styled(Wheel)`
  top: 42px;
  left: 140px;
`;
const Wheel2 = styled(Wheel)`
  top: 82px;
  left: 140px;
`;
const Wheel3 = styled(Wheel)`
  top: 70px;
  left: 20px;
`;
const Wheel4 = styled(Wheel)`
  top: 6px;
  left: 20px;
`;
const Door = styled.div``;

const DriverHead = styled.div``;
const DriverFoot = styled.div``;
const DriverArm = styled.div``;

type props = { text: string };
const BusButton = React.forwardRef<HTMLDivElement, props>((props, ref) => (
  <BussButtonContainer ref={ref}>
    <Wheel1 />
    <Wheel2 />
    <Wheel3 />
    <Wheel4 />
    <a href="#contact">
      <Button text={props.text}></Button>
    </a>
  </BussButtonContainer>
));

export default BusButton;
