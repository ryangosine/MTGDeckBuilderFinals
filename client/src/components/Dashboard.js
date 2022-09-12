import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import DeckBuilder from "./DeckBuilder";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const Dashboard = () => {
  /**
   * TO DO
   * 1.) when creating a deck, it appears as a card (similar to the ecosystem project)
   * that links to the deck page
   *
   * 2.) Style links appropriately
   *
   *
   */

  return (
    <PageWrapper>
      <Header />
      <h1>Your Decks</h1>
      <SideBar />
      <Footer />
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
