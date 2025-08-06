import React from "react";
import { theme } from "../../styles/theme";
import styled from "styled-components";

const A = styled.a<{ $color: string }>`
  text-decoration: none;
  color: ${(props) => props.$color || theme.colors.neutral_0};

  &:hover {
    text-decoration: underline;
  }
`;

type Props = {
  $color?: string;
  children: React.ReactNode;
  href: string;
  newWindow?: boolean;
};

/**
 * Renders a link component
 * @param children - any child element, most often text.
 * @param href - a url string for the link
 * @param newWindow - boolean determining whether or not to open the link in a new window
 * @param $color - the preferred color for the link text. Optional. Defaults to neutral_0 if not included
 * @returns JSX Link element
 */
const Link: React.FC<Props> = ({
  children,
  href,
  newWindow = false,
  $color,
}) => {
  return (
    <A
      href={href}
      target={newWindow ? "_blank" : "_self"}
      $color={$color ? $color : theme.colors.neutral_0}
    >
      {children}
    </A>
  );
};

export default Link;
