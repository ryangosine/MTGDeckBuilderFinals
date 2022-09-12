import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import DeckBuilder from "./DeckBuilder";
import Header from "./Header";

const Dashboard = () => {
  /**
   * 1. link to dashboard in header
   * 2. attach sideboard component
   * 3. make "cards"  for completed decks
   * 4. link to individual deckpage
   *
   *
   */

  return (
    <PageWrapper>
      <Header />
      <Nav>
        <Link to="deckbuilder">
          <h1>Build Deck Here</h1>
        </Link>
      </Nav>

      <Routes>
        <Route path="deckbuilder" element={<DeckBuilder />} />
      </Routes>
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;
const Nav = styled.ul`
  display: flex;
  flex-direction: row;

  a {
    text-decoration: none;
  }
`;

export default Dashboard;
