import React from 'react';
import {
  Title,
  NameInput,
  EmailInput,
  MessageInput,
  Button,
  Container,
} from './Form.styled';

const Form = () => {
  return (
    <Container>
      <Title>Reach out to us!</Title>
      <NameInput type="text" placeholder="Your name*" />
      <EmailInput type="text" placeholder="Your e-mail*" />
      <MessageInput type="text" placeholder="Your message*" />
      <Button>Send message</Button>
    </Container>
  );
};

export default Form;
