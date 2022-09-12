import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import DeckBuilder from "./components/DeckBuilder";

const App = () => {
  return (
    <MainWrapper>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="deckbuilder/*" element={<DeckBuilder />} />
        </Routes>
      </BrowserRouter>
    </MainWrapper>
  );
};

const MainWrapper = styled.div``;
export default App;
