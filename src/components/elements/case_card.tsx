import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const Card = styled.div`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    border-radius: 24px;
    margin: 0 auto;
    max-width: 90vw;
  }
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 32px;
  filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.07))
    drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.13));
  background-color: ${theme.colors.neutral_600};
  overflow: hidden;
`;
const HeadingText = styled.p`
  font-size: ${theme.fontSizes.base};
  text-align: left;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const ComingSoonText = styled.p`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.purple_200};
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const LinkText = styled.a`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.purple_200};
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  text-decoration: none;
  text-align: left;
`;

const BodyText = styled.p`
  font-size: ${theme.fontSizes.small};
  margin-block-start: 0em;
  margin-block-end: 0em;
  text-align: left;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`;

const TextContainer = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  gap: 24px;
  padding: 24px;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TagContainer = styled.div`
  flex: 1;
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  border-radius: 8px;
  gap: 8px;
  row-gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  font-size: ${theme.fontSizes.xsmall};
  padding: 4px 4px;
  background-color: ${theme.colors.purple_500};
  color: #4608b0;
  border-radius: 2px;
`;

type props = {
  title: string;
  tags: string[];
  description: string;
  imageSrc: string;
  linkURL: string;
  linkText: string;
  comingSoon: boolean;
  openModal: () => void;
  newWindow: boolean;
};

const CaseCard: React.FC<props> = (props) => {
  const list = props.tags.map((prop) => {
    return <Tag>{prop}</Tag>;
  });
  return (
    <Card>
      <img src={`${process.env.PUBLIC_URL}${props.imageSrc}`} />
      <TextContainer>
        <HeadingContainer>
          <HeadingText>{props.title}</HeadingText>
          <TagContainer>{list}</TagContainer>
        </HeadingContainer>
        <BodyText>{props.description}</BodyText>
        {props.comingSoon ? (
          <ComingSoonText
            onClick={props.comingSoon ? props.openModal : () => {}}
          >
            {props.linkText}
          </ComingSoonText>
        ) : (
          <LinkText
            href={props.linkURL}
            target={props.newWindow ? "_blank" : "_self"}
          >
            {props.linkText}
          </LinkText>
        )}
      </TextContainer>
    </Card>
  );
};

export default CaseCard;
