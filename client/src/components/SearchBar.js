import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ id }) => {
  /**
   *
   * TO DO
   * 1.) Connect to Api and fetch card information
   * 2.) Style Appropriately
   *
   */

  const [cardDisplay, setCardDisplay] = useState("");

  let navigate = useNavigate();

  const handleSubmitClick = (ev) => {
    ev.preventDefault();

    fetch(`/api/get-card/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCardDisplay(data);
        console.log("data", data);
        navigate("/cardfound");
      });
  };

  return (
    <Wrapper>
      <form action="/" method="get">
        <label htmlFor="card-search">
          <span style={{ marginRight: "10px" }}>Search For A Card:</span>
        </label>
        <input
          type="text"
          id="card-search"
          placeholder="Enter Card Name"
          name="search"
        />
      </form>
      <StyledButton onClick={handleSubmitClick}>Search</StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 25rem;
  margin: auto;
  margin-top: 15rem;
`;

const StyledButton = styled.button``;

export default SearchBar;
