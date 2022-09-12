import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  /**
   *
   * TO DO
   * 1.) Connect to Api and fetch card information
   * 2.) Style Appropriately
   *
   */

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
      <button className="button" type="submit">
        Search
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 25rem;
  margin: auto;
  margin-top: 15rem;

  .button {
    color: black;
    background-color: purple;
  }
`;

export default SearchBar;
