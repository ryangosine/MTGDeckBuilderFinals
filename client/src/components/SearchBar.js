import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import CardFound from "./Pages/CardFound";
import { CardContext } from "./CardContext";

const SearchBar = () => {
  /**
   *
   * TO DO
   * 1.) Connect to Api and fetch card information
   * 2.) Style Appropriately
   *
   */

  const { cardDisplay, setCardDisplay, searchTerm, setSearchTerm } =
    useContext(CardContext);

  let navigate = useNavigate();

  const handleSubmitClick = (ev) => {
    ev.preventDefault();

    fetch(`/api/get-card/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setCardDisplay(data);
        console.log("cardDisplay", cardDisplay);
        navigate("/cardfound");
      });
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
            <Link to="cardfound">Search</Link>
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
`;

// const button = styled(Link)``;

export default SearchBar;
