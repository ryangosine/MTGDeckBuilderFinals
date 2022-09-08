import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import useLocalStorage from "../Hooks/useLocalStorageHook";
import Header from "./components/Header";
// import Footer from "./Footer";
import GlobalStyles from "./components/GlobalStyles";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <SearchBar />
      {/* <Header /> */}
      {/* <Main> */}
      <Routes>
        <Route exact path="/">
          {/* <Home /> */}
        </Route>
        <Route exact path="/dashboard">
          {/* <Dashboard /> */}
        </Route>
        <Route path="/deckbuilder">{/* <DeckBuilder /> */}</Route>
      </Routes>
      {/* <Footer /> */}
      {/* </Main> */}
    </BrowserRouter>
  );
};

export default App;
