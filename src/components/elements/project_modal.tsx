import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import Link from "../primitives/link";

const Modal = styled.dialog`
  &:open {
    opacity: 1;
    transform: translateY(0);
  }

  opacity: 0.4;
  transform: translateY(8px);
  padding: 0%;
  border-radius: 8px;
  background: #fff;
  border: 0px transparent;
  max-width: 640px;
  transition: opacity 0.15s ease-out, transform 0.15s ease-out,
    overlay 0.15s ease-out allow-discrete, display 0.15s ease-out allow-discrete;

  @starting-style {
    &:open {
      opacity: 0.4;
      transform: translateY(8px);
    }
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const CloseButton = styled.button<{ $buttonIsDark: boolean }>`
  height: 48px;
  width: 48px;
  position: absolute;
  right: 20px;
  top: 20px;
  padding-bottom: 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: ${(props) =>
    props.$buttonIsDark ? "#666" : theme.colors.neutral_400};
  border-radius: 100%;

  &:hover {
    color: ${(props) =>
      props.$buttonIsDark ? theme.colors.neutral_0 : theme.colors.neutral_600};
  }
`;

const ModalContent = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    padding: 24px;
  }
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
`;

const P = styled.p`
  margin-block-start: 0%;
  margin-block-end: 0;
  text-align: left;
`;

// const TopRow = styled.div`
//   display: flex;
//   width: 857px;
//   align-items: flex-end;
//   gap: 40px;
// `;

const ProjectImage = styled.img`
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 2/1;
  /* border-radius: 8px; */
`;

const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  /* flex-shrink: 0; */
  align-self: stretch;
`;

const TitleAndCompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const ProjectTitle = styled(P)`
  color: var(--neutral-0, #000);
  text-align: left;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CompanyAndDate = styled(P)`
  color: var(--neutral-0, #000);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 100% */
  opacity: 0.7;
`;

const LinkSection = styled.div`
  flex-direction: column;
  font-size: ${theme.fontSizes.small};
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--purple-500, #ebe7ff);
  background: rgba(235, 231, 255, 0.4);
`;

const Links = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    flex-direction: column;
    gap: 8px;
  }
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  font-weight: 600;
`;

const Skills = styled(P)`
  color: var(--neutral-0, #000);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 27px */
  align-self: stretch;
`;

const Description = styled(P)`
  color: var(--neutral-0, #000);
  font-family: Inter;
  /* font-size: ${theme.fontSizes.base}; */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
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

interface Props {
  project: ProjectData;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<Props> = ({ project, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  // Handle opening/closing based on props
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    if (isOpen && !modal.open) {
      modal.showModal();
      modal.scrollTo(0, 0);
    } else if (!isOpen && modal.open) {
      modal.close();
    }
  }, [isOpen]);

  // Handle ESC key and backdrop clicks
  useEffect(() => {
    const modal = modalRef.current;
    const modalDimensions = modalRef.current?.getBoundingClientRect();
    if (!modal) return;

    const handleClose = () => onClose();
    const handleBackdropClick = (e: MouseEvent) => {
      if (!modalDimensions) return;
      if (
        e.clientX < modalDimensions.left ||
        e.clientX > modalDimensions.right ||
        e.clientY < modalDimensions.top ||
        e.clientY > modalDimensions.bottom
      ) {
        onClose();
      }
    };

    modal.addEventListener("close", handleClose);
    modal.addEventListener("click", handleBackdropClick);

    return () => {
      modal.removeEventListener("close", handleClose);
      modal.removeEventListener("click", handleBackdropClick);
    };
  }, [onClose]);

  if (!isOpen) return null; // Don't render if not open

  return (
    <Modal ref={modalRef}>
      <ProjectImage
        src={`${process.env.PUBLIC_URL}${project.projectImageSrc}`}
      />
      <ModalContent>
        {/* <TopRow> */}
        <ProjectDetailsContainer>
          <TitleAndCompanyContainer>
            <CompanyAndDate>
              {project.company} - {project.date}
            </CompanyAndDate>
            <ProjectTitle>{project.title}</ProjectTitle>
          </TitleAndCompanyContainer>
          <Skills>{project.skills}</Skills>
        </ProjectDetailsContainer>
        {/* </TopRow> */}
        <Description>{project.modalDescription}</Description>
        <LinkSection>
          See the work:
          <Links>
            {project.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                $color={theme.colors.purple_200}
                newWindow={true}
              >
                {link.label}
              </Link>
            ))}
          </Links>
        </LinkSection>
      </ModalContent>
      <CloseButton $buttonIsDark={!project.imageIsDark} onClick={onClose}>
        ×
      </CloseButton>
    </Modal>
  );
};

export default ProjectModal;
