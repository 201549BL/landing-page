import React from "react";

import styled from "styled-components";
import ContactForm from "../contact-form";

const StyledContact = styled.section`
  max-width: 100%;

  display: flex;
  justify-content: center;

  font-size: 5rem;

  p {
    padding: 1rem 2rem;

    @media (max-width: 700px) {
      padding: 1rem 1rem;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 700px;

  font-size: 1rem;
`;

const Title = styled.h1`
  padding-left: 2rem;
`;

const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <Title>Stay in touch</Title>
        <ContactForm />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus officia cupiditate inventore illo ab rerum voluptate
          vero culpa veritatis qui.
        </p>
      </Container>
    </StyledContact>
  );
};

export default Contact;
