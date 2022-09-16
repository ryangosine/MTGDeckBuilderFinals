import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import { CardContext } from "../CardContext";

const CardFound = () => {
  let params = useParams();

  const { cardDisplay, setCardDisplay, searchTerm, setSearchTerm } =
    useContext(CardContext);
  /**
   *
   *  TO DO
   * Links from the search button on the main page
   * 1.) Display image of card found
   * 2.) display text and information gathered from the API
   *
   *
   *
   */
  console.log("cardDisplay", cardDisplay);
  return (
    <PageWrapper>
      <Header />

      <CardImage src={cardDisplay.data.imageUrl} />

      <Footer />
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;
const CardImage = styled.img``;

export default CardFound;
