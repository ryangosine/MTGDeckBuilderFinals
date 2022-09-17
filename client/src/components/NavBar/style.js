import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 70px;
  padding: 0 30px;
  color: #ffffff;
  background-color: #202023;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0, 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const NavLink = styled(Link)`
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
