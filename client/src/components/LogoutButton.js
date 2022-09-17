import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";

const LogOutButton = () => {
  const {
    currentUser,
    setCurrentUser,
    loggedIn,
    setLoggedIn,
    loggedOut,
    setLoggedOut,
  } = useContext(CurrentUserContext);

  let navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <div>
      <StyledButton id="logout-button" onClick={(ev) => handleLogout(ev)}>
        Log Out
      </StyledButton>
    </div>
  );
};

const StyledButton = styled.button`
  width: ${(props) => (props.full ? "100%" : null)};
  min-width: 64px;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: all 0.2s;
  color: #ffffff;
  background-color: #2f8bfd;
  &:hover {
    background-color: #0072ff;
  }
`;

export default LogOutButton;
