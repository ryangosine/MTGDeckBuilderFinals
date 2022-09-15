import React from "react";
import { Link } from "react-router-dom";
import { EntryPage, PageHeader } from "./style";
import EntryCard from "../EntryCard/EntryCard";
import InputGroup from "../InputGroup/InputGroup";
import Input from "../Input";
import Button from "../Button";

const Register = () => {
  return (
    <EntryPage>
      <PageHeader to="/">Back To Home</PageHeader>
      <EntryCard>
        <h2>Enter The Multiverse</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="signup-name">Full Name</label>
            <Input type="text" placeholder="Jace Beleran" id="signup-name" />
          </InputGroup>

          <InputGroup>
            <label htmlFor="signup-email">Email Address</label>
            <Input
              type="text"
              placeholder="Jace@iwouldliketorespond.com"
              id="signup-email"
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="signup-password">Password</label>
            <Input type="text" placeholder="bR@iNsT0rM!" id="signup-password" />
          </InputGroup>
          <Button type="submit" full>
            Sign Up
          </Button>
        </form>
        <span>
          Already Planeswalking?
          <Link to="login">Log In</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
};

export default Register;
