import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px 16px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.input_bg};
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.input_bg};
  min-height: 150px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: ${({ theme }) => theme.button_bg};
  color: ${({ theme }) => theme.button_text};
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.button_hover};
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0px 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
`;

const ContactPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contact Us</Title>

        {/* Contact Form Section */}
        <Section>
          <Title>Get in Touch</Title>
          <Form>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <TextArea placeholder="Your Message" required />
            <Button type="submit">Send Message</Button>
          </Form>
        </Section>

        {/* Contact Details Section */}
        <Section>
          <Title>Contact Details</Title>
          <ContactDetails>
            <DetailItem>
              <strong>Phone:</strong> +1 234 567 890
            </DetailItem>
            <DetailItem>
              <strong>Email:</strong> contact@fitnessapp.com
            </DetailItem>
            <DetailItem>
              <strong>Address:</strong> 123 Fitness Street, Workout City, 98765
            </DetailItem>
          </ContactDetails>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default ContactPage;
