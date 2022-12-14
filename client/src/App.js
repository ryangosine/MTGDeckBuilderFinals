import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Dashboard from "./components/Pages/Dashboard";
import DeckBuilder from "./components/Pages/DeckBuilder";
import CardFound from "./components/Pages/CardFound";
import Profile from "./components/Pages/Profile";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import HomePage from "./components/Pages/HomePage";

const App = () => {
  return (
    <MainWrapper>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="dashboard" element={<Link to="../dashboard" />} />
          </Route>
          <Route path="deckbuilder/*" element={<DeckBuilder />} />
          <Route path="cardfound/:id" element={<CardFound />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login/" element={<Login />} />
          <Route path="register/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </MainWrapper>
  );
};

const MainWrapper = styled.div``;
export default App;
