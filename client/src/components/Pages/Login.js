import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <LoginWrapper>
      <h1>Login!</h1>
      <LinkOne>
        Don't have an account?
        <Link to="register">Register</Link>
      </LinkOne>
      <LinkTwo>
        <Link to="/">Go Back</Link>
      </LinkTwo>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LinkOne = styled.ul``;
const LinkTwo = styled.ul``;
export default Login;
