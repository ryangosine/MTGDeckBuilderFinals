import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EntryPage, PageHeader } from "./style";
import EntryCard from "../EntryCard/EntryCard";
import InputGroup from "../InputGroup/InputGroup";
import Input from "../Input";
import Button from "../Button";
import { CurrentUserContext } from "../CurrentUserContext";

const Register = ({ currentUser, setCurrentUser }) => {
  const [givenName, setGivenName] = useState("");
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [email, setEmail] = useState("");

  let navigate = useNavigate();
  const submit = (ev) => {
    console.log("entered submit func");

    ev.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        givenName: givenName,
        userName: userName,
        passWord: passWord,
        email: email,
      }),
    };

    fetch("/api/add-user", requestOptions)
      .then((res) => {
        res.json();
      })
      .then((data) => {
        setCurrentUser(data);
        // navigate("dashboard");
      });
  };

  return (
    <EntryPage>
      <PageHeader to="/">Back To Home</PageHeader>
      <EntryCard>
        <h2>Enter The Multiverse</h2>
        {/* onSubmit={(e) => e.preventDefault()} */}
        <form>
          <InputGroup>
            <label htmlFor="signup-name">Full Name</label>
            <Input
              type="text"
              placeholder="Jace Beleran"
              id="signup-name"
              onChange={(ev) => setGivenName(ev.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="user-name">User Name</label>
            <Input
              type="text"
              placeholder="da_mind_sculptor"
              id="user-name"
              onChange={(ev) => setUserName(ev.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="signup-email">Email Address</label>
            <Input
              type="text"
              placeholder="Jace@iwouldliketorespond.com"
              id="signup-email"
              onChange={(ev) => setEmail(ev.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="signup-password">Password</label>
            <Input
              type="text"
              placeholder="bR@iNsT0rM!"
              id="signup-password"
              onChange={(ev) => setPassWord(ev.target.value)}
              required
            />
          </InputGroup>

          <Button type="submit" onClick={(ev) => submit(ev)} full>
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
