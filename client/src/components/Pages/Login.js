import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EntryPage, PageHeader, PageHolder } from "./style";
import EntryCard from "../EntryCard/EntryCard";
import InputGroup from "../InputGroup/InputGroup";
import Input from "../Input";
import Button from "../Button";
import { CurrentUserContext } from "../CurrentUserContext";
import Dashboard from "./Dashboard";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    email: "",
    password: "",
  });

  const {
    currentUser,
    setCurrentUser,
    loggedIn,
    setLoggedIn,
    loggedOut,
    setLoggedOut,
  } = useContext(CurrentUserContext);
  let navigate = useNavigate();
  const body = { email: email, password: password };

  const handleUserInput = (ev) => {
    const { name, value } = ev.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const checkValidation = () => {
    let errors = validation;

    const emailConditions =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!inputValues.email.match(emailConditions)) {
      errors.email = "Please provide a valid email address";
    } else {
      errors.email = "";
    }

    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      errors.password = "Password must contain at least a number";
    } else {
      errors.password = "";
    }

    setValidation(errors);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch("/api/get-user/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
        window.localStorage.setItem("loggedIn", true);
        navigate("../dashboard");
      });
    // setUserName(ev.target.value);
  };

  return (
    <EntryPage>
      <PageHeader to="/">Back To Home</PageHeader>
      <EntryCard>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="login-email">Email Address</label>
            <Input
              type="email"
              placeholder="name@email.com"
              id="login-email"
              className="input-field"
              name="login-email"
              onChange={(ev) => handleUserInput(ev)}
            />
            {validation.email && <p>{validation.email}</p>}
          </InputGroup>

          <InputGroup>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className="input-field"
              onChange={(ev) => handleUserInput(ev)}
            />
            {validation.password && <p>{validation.password}</p>}
          </InputGroup>

          <Button type="submit" onClick={(ev) => handleSubmit(ev)} full>
            Log In
          </Button>
        </form>
        <span>
          Haven't ignited your spark?
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
