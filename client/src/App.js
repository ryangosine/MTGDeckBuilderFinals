import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import DeckBuilder from "./components/DeckBuilder";
import CardFound from "./components/CardFound";
import Profile from "./components/Profile";

const App = () => {
  return (
    <MainWrapper>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="deckbuilder/*" element={<DeckBuilder />} />
          <Route path="cardfound/*" element={<CardFound />} />
          <Route path="profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </MainWrapper>
  );
};

const MainWrapper = styled.div``;
export default App;
