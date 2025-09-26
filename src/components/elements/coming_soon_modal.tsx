import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import Link from "../primitives/link";

const Modal = styled.dialog`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    max-width: 90vw;
  }
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

const CloseButton = styled.button`
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
  color: #7c7c7c;
  border-radius: 100%;

  &:hover {
    color: ${theme.colors.neutral_0};
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
  gap: 32px;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  font-size: ${theme.fontSizes.large};
  font-weight: 700;
`;

const Description = styled.p`
  color: var(--neutral-0, #000);
  font-family: Inter;
  /* font-size: ${theme.fontSizes.base}; */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
  margin-block-start: 0%;
  margin-block-end: 0;
  text-align: left;
`;

const LinkText = styled.p`
  font-size: ${theme.fontSizes.small};
  font-weight: 700;
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal: React.FC<Props> = ({ isOpen, onClose }) => {
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
      <ModalContent>
        <Heading>Coming soon</Heading>
        <Description>
          I'm updating my portfolio, and this case study is being revamped to
          match my current branding. If you'd like to set up a time to talk over
          my work, I'd be delighted to hop on a call!
        </Description>
        <Link
          href={"#contact"}
          $color={theme.colors.purple_200}
          onClick={onClose}
        >
          <LinkText>Reach out</LinkText>
        </Link>
      </ModalContent>
      <CloseButton onClick={onClose}>×</CloseButton>
    </Modal>
  );
};

export default ComingSoonModal;
