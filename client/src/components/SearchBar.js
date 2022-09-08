import React from "react";
import styled from "styled-components";

const SearchBar = () => {
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
