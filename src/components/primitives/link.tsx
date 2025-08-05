import React from "react";
import { theme } from "../../styles/theme";
import styled from "styled-components";

const A = styled.a<{ $underlineColor?: string }>`
  text-decoration: none;

  &:hover {
    text-decoration: underline
      ${(props) => props.$underlineColor || theme.colors.neutral_0};
  }
`;

type Props = {
  $underlineColor?: string;
  children: React.ReactNode;
  href: string;
  newWindow?: boolean;
};

const Link: React.FC<Props> = ({
  children,
  href,
  newWindow = false,
  $underlineColor,
}) => {
  return (
    <A
      href={href}
      target={newWindow ? "_blank" : "_self"}
      $underlineColor={$underlineColor}
    >
      {children}
    </A>
  );
};

export default Link;
