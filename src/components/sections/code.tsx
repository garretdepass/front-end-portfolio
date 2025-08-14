import React, { useState } from "react";
import { theme } from "../../styles/theme";
import styled from "styled-components";
import SectionWrapper from "../layout/section_wrapper";
import ProjectModal from "../elements/project_modal";

const ContentWrapper = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    padding-top: 128px;
  }
  padding-top: 144px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 240px;
  gap: 80px;
  align-self: stretch;
`;

const Text1 = styled.h1`
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    font-size: ${theme.fontSizes.base};
  }
  font-size: ${theme.fontSizes.large};
  font-family: ${theme.fontFamily.code};
  color: #6a9956;
  text-align: left;
`;

const ProjectTitleContainer = styled.div`
  display: flex;
  align-content: baseline;
  color: #569cd6;
`;

const ProjectTitle = styled.h2`
  font-size: ${theme.fontSizes.base};
  font-family: ${theme.fontFamily.code};
  text-align: left;
  margin-block-start: 0px;
  margin-block-end: 0px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Arrow = styled.span`
  margin-top: 3px;
`;

const Text3 = styled.p`
  font-size: ${theme.fontSizes.small};
  font-family: ${theme.fontFamily.code};
  color: #cccccc;
  text-align: left;
  font-weight: 700;
  margin-block-start: 0px;
  margin-block-end: 0px;
  line-height: 140%;
`;

const CaseStudyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 80px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const CaseStudy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  max-width: 400px;
`;

const Thumbnail = styled.img`
  border-radius: 6px;
  aspect-ratio: auto;
  height: 120px;
`;

interface ProjectData {
  id: number;
  title: string;
  company: string;
  date: string;
  skills: string;
  description: string;
  modalDescription: string;
  thumbnailSrc: string;
  projectImageSrc: string;
  imageIsDark: boolean;
  links: Array<{ label: string; url: string }>;
}

const projectsData: ProjectData[] = [
  {
    id: 0,
    title: "Location and ID",
    company: "Sana Benefits",
    date: "2025",
    skills: "Full-stack product design, design/eng pairing, service design",
    description:
      "Patient location and identity verification for an asynchronous, remote medical platform.",
    modalDescription:
      "Sana Benefits is an insurance company with an integrated medical practice providing asynchronous, remote, primary care for thousands of patients. Because Sana providers hold licenses in multiple states, and Sana members could be anywhere in the US, we needed a way to verify patient identity and location.",
    thumbnailSrc: "/assets/images/code/location_identity_thumbnail.png",
    projectImageSrc: "/assets/images/code/location_identity_thumbnail.png",
    imageIsDark: false,
    links: [
      {
        label: "Annotated Figma file",
        url: "https://www.figma.com/design/8T9NA832SUheeNi2ho0In3/Location-and-Identity---2025?node-id=19-21243&t=J7TZMQixb4WwJaZL-11",
      },
    ],
  },
  {
    id: 1,
    title: "Dice Roller",
    company: "Passion Project",
    date: "2025",
    skills: "React, MongoDB, Vitest, Netlify",
    description:
      "A minimal web app for tabletop roleplaying. It streamlines character and roll management so players can focus on the game.",
    modalDescription:
      "My wife and I are part of a remote tabletop roleplaying group that plays an older system called Deadlands. Over the last year my wife collected a patchwork of tools to use while playing: Google Sheets to manage stats, dice rollers not designed for the complex mechanics of the game, calculator apps, and Discord to track things like experience points and Fate Chips. We wanted a more cohesive solution, so I to build something better for our group’s specific needs.",
    thumbnailSrc: "/assets/images/code/dice_roller_thumbnail.png",
    projectImageSrc: "/assets/images/code/dice_roller_thumbnail.png",
    imageIsDark: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/garretdepass/deadlands-dice-roller",
      },
      {
        label: "Live Demo",
        url: "https://dice-roller-deadlands.netlify.app/",
      },
    ],
  },
  {
    id: 2,
    title: "This Website",
    company: "Portfolio",
    date: "2025",
    skills: "React, Typescript, GSAP, responsive design",
    description: "A tool for the job hunt, and an example of my work.",
    modalDescription:
      "Design portfolios all start to feel similar after you've been looking at them for hours. This is a competitive job market, so I wanted to create something that stands out. No cookie-cutter templates, no boring case studies. My goal is to show what I'm capable of, while being transparent about my process and how the work looks under the hood.",
    thumbnailSrc: "/assets/images/code/portfolio_thumbnail.png",
    projectImageSrc: "/assets/images/code/portfolio_thumbnail.png",
    imageIsDark: false,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/garretdepass/deadlands-dice-roller",
      },
    ],
  },
  // ... more projects
];

const Code: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  const openModal = (project: ProjectData) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <SectionWrapper backgroundColor="#1f1f1f">
      <ContentWrapper>
        <Text1>
          // I'm happiest mixing code and design.
          <br />
          // Here's some of my past work.
        </Text1>

        <CaseStudyContainer>
          {projectsData.map((project) => (
            <CaseStudy key={project.id}>
              {/* <Thumbnail
                src={`${process.env.PUBLIC_URL}${project.thumbnailSrc}`}
                onClick={() => openModal(project)} // Only thumbnail is clickable
                style={{ cursor: "pointer" }}
              /> */}
              <ProjectTitleContainer>
                <ProjectTitle onClick={() => openModal(project)}>
                  {project.title}{" "}
                </ProjectTitle>
                <Arrow className="material-symbols-outlined">
                  arrow_outward
                </Arrow>
              </ProjectTitleContainer>
              {/* </Link> */}
              <Text3>{project.description}</Text3>
            </CaseStudy>
          ))}
        </CaseStudyContainer>

        {/* Single modal that shows different content */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={closeModal}
          />
        )}
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default Code;
