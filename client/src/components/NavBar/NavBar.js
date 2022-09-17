import React, { useContext } from "react";
import { StyledNavBar, NavLink } from "./style";
import LogOutButton from "../LogoutButton";
import { CurrentUserContext } from "../CurrentUserContext";

const NavBar = ({ children }) => {
  const {
    currentUser,
    setCurrentUser,
    loggedIn,
    setLoggedIn,
    loggedOut,
    setLoggedOut,
  } = useContext(CurrentUserContext);
  return (
    <StyledNavBar>
      {loggedIn === false ? (
        <>
          <NavLink to="login">Log in</NavLink>
          <NavLink to="register">Register</NavLink>
        </>
      ) : (
        ""
      )}

      {loggedIn === true ? (
        <>
          <LogOutButton />
          <NavLink to="dashboard">Dashboard</NavLink>
        </>
      ) : (
        ""
      )}
    </StyledNavBar>
  );
};
export default NavBar;
