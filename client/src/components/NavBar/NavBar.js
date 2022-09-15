import React from "react";
import { StyledNavBar, NavLink } from "./style";

const NavBar = ({ children }) => {
  return (
    <StyledNavBar>
      <NavLink to="login">Log in</NavLink>
      <NavLink to="register" fill>
        Register
      </NavLink>
    </StyledNavBar>
  );
};
export default NavBar;
