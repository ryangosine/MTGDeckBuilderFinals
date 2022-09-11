import React from "react";
import styled from "styled-components";
import Header from "./Header";
import SearchBar from "./SearchBar";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Header />
      <SearchBar />
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div``;

export default HomePage;
