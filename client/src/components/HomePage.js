import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "./SearchBar";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Header />
      <SearchBar />
      <Footer />
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div``;

export default HomePage;
