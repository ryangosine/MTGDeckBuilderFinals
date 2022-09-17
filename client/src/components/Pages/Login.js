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
  const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  const {
    currentUser,
    setCurrentUser,
    loggedIn,
    setLoggedIn,
    loggedOut,
    setLoggedOut,
  } = useContext(CurrentUserContext);

  let navigate = useNavigate();

  // const [userName, setUserName] = useState(() => {
  //   const saved = localStorage.getItem("userName");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });

  // useEffect(() => {}, []);

  const body = { email: email, password: passWord };

  const handleSubmit = (ev) => {
    console.log("email", email);
    console.log("password", passWord);
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
        setUserData(data);
        setLoggedIn(true);
        console.log("data in login component", data);
        navigate("../dashboard");
      });
    // setUserName(ev.target.value);
  };

  const foundUserData = () => {
    if (currentUser !== undefined) {
      const loggedInUser = currentUser.find((user) => {
        // return user.userName === userName;
      });
      console.log("logged In User", loggedInUser);
      setCurrentUser(loggedInUser);
    } else {
      return "undefined";
    }
  };

  return (
    <EntryPage>
      <PageHeader to="/">Back To Home</PageHeader>
      <EntryCard>
        <h2>Log In</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="login-email">Email Address</label>
            <Input
              type="text"
              placeholder="name@email.com"
              id="login-email"
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              placeholder="Password"
              id="password"
              onChange={(ev) => setPassWord(ev.target.value)}
            />
          </InputGroup>

          <Button type="submit" onClick={(ev) => handleSubmit(ev)} full>
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
