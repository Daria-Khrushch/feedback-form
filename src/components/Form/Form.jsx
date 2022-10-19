import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from 'redux/formSlice';
import {
  Title,
  NameInput,
  EmailInput,
  MessageInput,
  Button,
  Container,
} from './Form.styled';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      sendMessage({
        name: name,
        email: email,
        message: message,
      })
    );

    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <Container onSubmit={e => handleSubmit(e)}>
      <Title>Reach out to us!</Title>
      <NameInput
        type="text"
        placeholder="Your name*"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <EmailInput
        type="text"
        placeholder="Your e-mail*"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <MessageInput
        type="text"
        placeholder="Your message*"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <Button>Send message</Button>
    </Container>
  );
};

export default Form;
