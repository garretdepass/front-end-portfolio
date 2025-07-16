import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const ButtonInner = styled.button`
  border-radius: 8px;
  border: 0px solid transparent;
  background: ${theme.colors.purple_200};
  padding: 10px;
  color: ${theme.colors.neutral_600};
  font-family: ${theme.fontFamily.base};
  font-size: ${theme.fontSizes.base};
  font-weight: 700;
  line-height: 33px; /* 137.5% */
  /* visibility: hidden; */
`;

type props = { text: string };

const Button: React.FC<props> = ({ text }) => {
  return <ButtonInner>{text}</ButtonInner>;
};

export default Button;
