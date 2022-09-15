import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  return (
    <RegisterWrapper>
      <h1>Enter the Multiverse</h1>
      <span>
        Already have an Account?
        <Link to="login">Log In</Link>
      </span>
      <br />
      <span>
        <Link to="/">Go Back</Link>
      </span>
    </RegisterWrapper>
  );
};

const RegisterWrapper = styled.div``;

export default Register;
