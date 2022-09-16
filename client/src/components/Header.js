import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Login from "./Pages/Login";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  /**
   * TO DO
   * 1.) syntax for making dashboard accessable to signed in users only. terenary
   * 2.) when logged in, information is sent to a mongo Db (like in slingair)
   * 3.) style links appropriately
   *
   */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <HeaderWrapper>
      <ReturnToHome>
        <nav>
          <Link to="/">
            <li>MTG Deck Builder</li>
          </Link>
        </nav>
      </ReturnToHome>

      <HeaderLinks>
        <NavBar />
        {/* {isLoggedIn === true ? ( */}
        <LinkToDashBoard>
          <nav>
            <Link to="dashboard">
              <h1>Dashboard</h1>
            </Link>
          </nav>
        </LinkToDashBoard>
        {/* ) : (
          ""
        )} */}
      </HeaderLinks>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 40px;
  display: flex;
  background-color: #5545ba;
  border-bottom: 1px solid #e7e7e7;
`;

const HeaderLinks = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ReturnToHome = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

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

const LinkToDashBoard = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    text-decoration: none;
  }

  h1 {
    color: white;
    margin: 0 0.8rem;
    font-size: 1.6rem;
    list-style: none;
  }
`;

const LinkToLogin = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    text-decoration: none;
  }

  h1 {
    color: white;
    margin: 0 0.8rem;
    font-size: 1.6rem;
    list-style: none;
  }
`;

const LinkToRegister = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    text-decoration: none;
  }

  h1 {
    color: white;
    margin: 0 0.8rem;
    font-size: 1.6rem;
    list-style: none;
  }
`;

const Nav = styled.ul``;

const HelloUser = styled.h2`
  color: white;
`;
export default Header;

// import { CurrentUserContext } from "./CurrentUserContext";

//   const { currentUser, status, setCurrentUser, setStatus } =
//     useContext(CurrentUserContext);

//   console.log("current User in Header", currentUser);

{
  /* {currentUser === "" ? (
    <NavLink to="/login" exact>
    <li>SIGN IN</li>
    </NavLink>
    ) : (
        <HelloUser>{`Hello,  ${currentUser} `}</HelloUser>
    )} */
}
