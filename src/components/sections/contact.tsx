import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { theme } from "../../styles/theme";

const ContactWrapper = styled.div`
  padding: 160px 0;
  background: ${theme.colors.neutral_600};
  overflow: hidden;
`;

const ContactContainer = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.large}) {
    /* flex-direction: column; */
    display: block;
  }
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.large}) {
    margin: 0 auto;
    max-width: 440px;
  }
  max-width: 350px;
`;

const BGCircle = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.large}) {
    position: relative;
    left: -48px;
  }
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    position: relative;
    left: -48px;
  }
  width: 255px;
  height: 255px;
  border-radius: 100%;
  background-color: ${theme.colors.purple_500};
`;

const Title = styled.h1`
  @media only screen and (max-width: ${theme.breakpoints.large}) {
    top: -224px;
    left: 40px;
  }
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    top: -216px;
    left: 0px;
  }
  color: ${theme.colors.neutral_0};
  text-align: center;
  font-family: Inter;
  font-size: ${theme.fontSizes.large};
  font-weight: 700;
  margin-bottom: 40px;
  text-align: left;
  height: 0px;
  position: relative;
  top: -240px;
  left: 88px;
  line-height: 140%;
`;

const Form = styled.form`
  @media only screen and (max-width: ${theme.breakpoints.large}) {
    margin: 0 auto;
  }
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  max-width: 600px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: ${theme.colors.neutral_0};
  font-family: Inter;
  font-size: ${theme.fontSizes.small};
  font-weight: 700;
  text-align: left;
`;

const Input = styled.input`
  padding: 16px;
  border: 2px solid ${theme.colors.purple_400};
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: ${theme.colors.neutral_0};
  font-family: Inter;
  font-size: ${theme.fontSizes.base};

  &::placeholder {
    color: ${theme.colors.neutral_400};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.purple_300};
    background: rgba(255, 255, 255, 0.15);
  }
`;

const TextArea = styled.textarea`
  padding: 16px;
  border: 2px solid ${theme.colors.purple_400};
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: ${theme.colors.neutral_0};
  font-family: Inter;
  font-size: ${theme.fontSizes.base};
  resize: vertical;
  min-height: 120px;

  &::placeholder {
    color: ${theme.colors.neutral_400};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.purple_300};
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SubmitButton = styled.button`
  padding: 16px 32px;
  background: ${theme.colors.purple_200};
  border: 2px solid ${theme.colors.purple_200};
  border-radius: 8px;
  color: #fff;
  font-family: Inter;
  font-size: ${theme.fontSizes.base};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.purple_300};
    border-color: ${theme.colors.purple_300};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Message = styled.div<{ type: "success" | "error" }>`
  padding: 16px;
  border-radius: 8px;
  font-family: Inter;
  font-size: ${theme.fontSizes.base};
  text-align: center;
  background: ${(props) =>
    props.type === "success"
      ? theme.colors.purple_500
      : "rgba(239, 68, 68, 0.2)"};
  color: ${(props) =>
    props.type === "success" ? theme.colors.purple_200 : "#ef4444"};
  border: 2px solid
    ${(props) =>
      props.type === "success"
        ? theme.colors.purple_400
        : "rgba(239, 68, 68, 0.3)"};
`;

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) return false;
    if (!formData.email.trim()) return false;
    if (!formData.message.trim()) return false;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return false;

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    try {
      await emailjs.send(
        "service_zx4cn89",
        "template_6hzhess",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "6D4fShoKKpJV81CY5"
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactWrapper>
      <ContactContainer>
        <TitleContainer>
          <BGCircle />
          <Title>
            So rude of me. We’ve been talking all this time and I didn’t even
            ask your name...
          </Title>
        </TitleContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Let's connect"}
          </SubmitButton>

          {status === "success" && (
            <Message type="success">
              Thanks for reaching out! I'll get back to you soon.
            </Message>
          )}

          {status === "error" && (
            <Message type="error">
              Something went wrong. Please try again or email me directly.
            </Message>
          )}
        </Form>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
