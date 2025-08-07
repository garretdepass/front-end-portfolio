import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const Card = styled.div`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    padding: 24px;
    border-radius: 24px;
  }
  max-width: 656px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 24px;
  justify-content: center;
  border-radius: 32px;
  filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.07))
    drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.13));
  background-color: ${theme.colors.neutral_600};
`;
const HeadingText = styled.p`
  font-size: ${theme.fontSizes.base};
  text-align: left;
  margin-block-start: 0;
  margin-block-end: 0;
`;
const LabelText = styled.p`
  font-size: ${theme.fontSizes.small};
  font-weight: 700;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const BodyText = styled.p`
  font-size: ${theme.fontSizes.small};
  margin-block-start: 0em;
  margin-block-end: 0em;
  text-align: left;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Divider = styled.div`
  height: 2px;
  background-color: ${theme.colors.purple_400};
`;
const ExamplesContainer = styled.div`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    flex-direction: column;
  }
  display: flex;
  gap: 24px;
`;
const EngineerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 8px;
  gap: 16px;
`;
const EngineerPlusContainer = styled(EngineerContainer)`
  /* background-color: ${theme.colors.purple_500}; */
  /* padding: 16px; */
`;

const Skill = styled.div`
  padding: 3px 5px;
  background-color: ${theme.colors.purple_500};
  color: #4608b0;
  border-radius: 2px;
`;

type props = {
  heading: string;
  traditionalEngineer: string[];
  engineerPlus: string;
};

const CaseCard: React.FC<props> = (props) => {
  const list = props.traditionalEngineer.map((prop) => {
    return <Skill>{prop}</Skill>;
  });
  return (
    <Card>
      <HeadingText>{props.heading}</HeadingText>
      <Divider />
      <ExamplesContainer>
        <EngineerContainer>
          <LabelText>My relevant skills</LabelText>
          <BodyText>{list}</BodyText>
        </EngineerContainer>
        <EngineerPlusContainer>
          <LabelText>My approach</LabelText>
          <BodyText>{props.engineerPlus}</BodyText>
        </EngineerPlusContainer>
      </ExamplesContainer>
    </Card>
  );
};

export default CaseCard;
