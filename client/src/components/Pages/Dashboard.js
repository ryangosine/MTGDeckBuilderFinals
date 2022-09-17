import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import DeckBuilder from "./DeckBuilder";
import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../SideBar";

const Dashboard = () => {
  return (
    <PageWrapper>
      <Header />
      <Title>Your Decks</Title>
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

const Title = styled.h1`
  position: absolute;
  right: 30px;
  width: 300px;
  padding: 10px;
  font-size: 2rem;
`;

export default Dashboard;
