import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Form,
  UsernameLabel,
  UsernameInput,
  PasswordLabel,
  PasswordInput,
  SubmitButton,
  ButtonDiv,
  RegisterLink,
} from './Login.style';

export const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      'https://my-issue-tracker-v1.herokuapp.com/api/auth/login',
      {
        username,
        password,
      }
    );
    if (response.data.status === 'ok') {
      localStorage.setItem('token', response.data.data);
      alert('login successful');
      window.location.replace('/profile');
    } else alert('Invalid username password combination');
    console.log('login response', response.data);
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <UsernameLabel htmlFor=''>Username</UsernameLabel>
        <UsernameInput
          type='text'
          name='username'
          id='username'
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <PasswordLabel htmlFor=''>Password</PasswordLabel>
        <PasswordInput
          type='password'
          name='password'
          id='password'
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <ButtonDiv>
          <SubmitButton type='submit'>login</SubmitButton>
          <Link to='/register'>
            <RegisterLink>Register</RegisterLink>
          </Link>
        </ButtonDiv>
      </Form>
    </Container>
  );
};
