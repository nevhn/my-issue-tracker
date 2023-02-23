import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Form,
  FullNameDiv,
  UsernameDiv,
  PasswordDiv,
  Label,
  Input,
  ButtonDiv,
  RegisterButton,
  LoginLink,
} from "./Register.style";
import config from "../../config";

const endpoint = config.API_ENDPOINT;

export const Register = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        // "http://localhost:8080/api/auth/register",
        `${endpoint}/auth/register`,
        {
          firstName,
          lastName,
          username,
          password,
        }
      );
      // console.log("register:", response.data);
      window.location.replace("/login");
    } catch (error) {
      alert("username already taken");
    }
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FullNameDiv>
          <Label>First Name</Label>
          <Input
            placeholder="John"
            required
            pattern="\S+.*"
            type="text"
            name=""
            id="firstname"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FullNameDiv>
        <FullNameDiv>
          <Label>Last Name</Label>
          <Input
            placeholder="Doe"
            required
            pattern="\S+.*"
            type="text"
            name=""
            id="lastname"
            onChange={(e) => setLastName(e.target.value)}
          />
        </FullNameDiv>
        <UsernameDiv>
          <Label>Username</Label>
          <Input
            required
            pattern="\S+"
            type="text"
            name=""
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </UsernameDiv>
        <PasswordDiv>
          <Label>Password</Label>
          <Input
            required
            type="password"
            name=""
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </PasswordDiv>
        <ButtonDiv>
          <RegisterButton type="submit">Register</RegisterButton>
          <Link to="/login">
            <LoginLink>Login</LoginLink>
          </Link>
        </ButtonDiv>
      </Form>
    </Container>
  );
};
