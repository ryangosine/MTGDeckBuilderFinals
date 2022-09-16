import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EntryPage, PageHeader, PageHolder } from "./style";
import EntryCard from "../EntryCard/EntryCard";
import InputGroup from "../InputGroup/InputGroup";
import Input from "../Input";
import Button from "../Button";

const Login = () => {
  return (
    <EntryPage>
      <PageHeader to="/">Back To Home</PageHeader>
      <EntryCard>
        <h2>Log In</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="login-email">Email Address</label>
            <Input type="text" placeholder="name@email.com" id="login-email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">Password</label>
            <Input type="password" placeholder="Password" id="password" />
          </InputGroup>
          <Button type="submit" full>
            Log In
          </Button>
        </form>
        <span>
          Haven't ignighted your spark?
          <Link to="signup">Sign Up</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
};

// const LoginWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const LinkOne = styled.ul``;
// const LinkTwo = styled.ul``;
export default Login;
