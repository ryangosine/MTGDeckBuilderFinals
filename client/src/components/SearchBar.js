import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import CardFound from "./Pages/CardFound";
import { CardContext } from "./CardContext";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const { cardDisplay, setCardDisplay, searchTerm, setSearchTerm } =
    useContext(CardContext);

  let navigate = useNavigate();

  const handleSubmitClick = (ev) => {
    ev.preventDefault();

    fetch(`/api/get-card/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setCardDisplay(data);
        navigate("cardfound");
      });
    console.log("cardDisplay", cardDisplay);
  };

  return (
    <Wrapper>
      <form>
        <label htmlFor="card-search">
          <span style={{ marginRight: "10px" }}>Search For A Card:</span>
        </label>
        <input
          type="text"
          id="card-search"
          value={searchTerm}
          placeholder="Enter Card Name"
          name="search"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </form>

      <div>
        <nav>
          <button type="submit" onClick={(ev) => handleSubmitClick(ev)}>
            <Link to="cardfound">
              <FiSearch style={{ fontSize: "2rem" }} />
            </Link>
          </button>
        </nav>
      </div>

      <Routes>
        <Route path="cardfound" element={<CardFound />}></Route>
      </Routes>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 25rem;
  margin: auto;
  margin-top: 15rem;

  button {
    padding: 13px;
  }
`;

// const button = styled(Link)``;

export default SearchBar;
