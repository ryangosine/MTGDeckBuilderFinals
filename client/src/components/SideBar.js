import React from "react";
import styled from "styled-components";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import DeckBuilder from "./Pages/DeckBuilder";
import Profile from "./Pages/Profile";

const SideBar = () => {
  let navigate = useNavigate();
  return (
    <Wrapper>
      <LinkToDeckBuilder>
        <nav>
          <Link to="../deckbuilder">
            {" "}
            {/**REMEMBER TO COME BACK TO THIS TO FIX MY ROUTES */}
            <h1>DeckBuilder</h1>
          </Link>
        </nav>
      </LinkToDeckBuilder>

      <LinkToProfile>
        <nav>
          <Link to="../profile">
            <h1>Profile</h1>
          </Link>
        </nav>
      </LinkToProfile>

      <Routes>
        <Route path="deckbuilder" element={<DeckBuilder />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
  text-decoration: none;
  flex: 0.3;
  padding-top: 50px;
  padding-left: 20px;
  border-right: 1px solid black;

  height: 100vw;
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
  }

  li {
    color: black;
    margin: 0 0.8rem;
    font-size: 1.6rem;
    position: relative;
    list-style: none;
  }
`;

const LinkToProfile = styled.ul`
  display: flex;

  margin: 20px;
`;

const LinkToDeckBuilder = styled.ul`
  display: flex;
  margin: 20px;
`;

export default SideBar;

// {
/* <Nav>
  <NavLink to="/" activeClassName="current" exact>
    <li>Home</li>
    <FiHome
      size={"50px"}
      style={{
        verticalAlign: "middle",
        padding: "0 10px",
        position: "relative",
        right: "45px",
        bottom: "55px",
        margin: "10px",
      }}
    />
  </NavLink>

  <NavLink to="/profile/treasurymog" activeClassName="current" exact>
    <li>Profile</li>
    <FiUser
      size={"50px"}
      style={{
        verticalAlign: "middle",
        padding: "0 10px",
        position: "relative",
        right: "45px",
        bottom: "55px",
        margin: "10px",
      }}
    />
  </NavLink>

  <NavLink to="/notifications" activeClassName="current">
    <li>Notifications</li>
    <FiBell
      size={"50px"}
      style={{
        verticalAlign: "middle",
        padding: "0 10px",
        position: "relative",
        right: "45px",
        bottom: "55px",
        margin: "10px",
      }}
    />
  </NavLink>

  <NavLink to="/bookmarks">
    <li>Bookmarks</li>
    <FiBookmark
      size={"50px"}
      style={{
        verticalAlign: "middle",
        padding: "0 10px",
        position: "relative",
        right: "45px",
        bottom: "55px",
        margin: "10px",
      }}
    />
  </NavLink>
</Nav>
</Wrapper>
); */
// }
