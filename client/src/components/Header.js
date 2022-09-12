import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  console.log("user", user);
  console.log("isAuth", isAuthenticated);

  /**
   * to do.
   * syntax for making dashboard accessable to signed in users only. terenary
   *
   */

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
        <AuthButton>
          {isAuthenticated ? (
            <button onClick={() => logout()}>Logout</button>
          ) : (
            <button onClick={() => loginWithRedirect()}>Login</button>
          )}
        </AuthButton>

        <LinkToDashBoard>
          <nav>
            <Link to="dashboard">
              <h1>dashboard</h1>
            </Link>
          </nav>
        </LinkToDashBoard>
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

const AuthButton = styled.div`
  display: flex;
  margin-right: 50px;
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

  li {
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
