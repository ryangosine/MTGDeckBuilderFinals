<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
>>>>>>> 059bb08f67a9491ce5cdadf0a201fb926293deb2

export default App;
