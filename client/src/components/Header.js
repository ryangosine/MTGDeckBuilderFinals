import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import { CurrentUserContext } from "./CurrentUserContext";

const Header = () => {
  //   const { currentUser, status, setCurrentUser, setStatus } =
  //     useContext(CurrentUserContext);

  //   console.log("current User in Header", currentUser);

  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  console.log("user", user);
  console.log("isAuth", isAuthenticated);

  return (
    <HeaderWrapper>
      <Nav>
        <NavLink to="/" exact>
          <li>MTG Deck Builder</li>
        </NavLink>
        {/* {currentUser === "" ? (
            <NavLink to="/login" exact>
            <li>SIGN IN</li>
            </NavLink>
            ) : (
                <HelloUser>{`Hello,  ${currentUser} `}</HelloUser>
            )} */}
      </Nav>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  overflow: hidden;
  padding: 40px;
  display: flex;
  background-color: #5545ba;
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: row;

  a {
    text-decoration: none;
  }

  li {
    color: white;
    margin: 0 0.8rem;
    font-size: 1.6rem;
    list-style: none;
  }
`;

const HelloUser = styled.h2`
  color: white;
`;
export default Header;
