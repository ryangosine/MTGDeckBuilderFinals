import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CardFound = () => {
  const [cardDisplay, setCardDisplay] = useState("");
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

  useEffect(() => {
    fetch(`/api/get-card/:id${reservation.data._id}`)
      .then((res) => res.json())
      .then((data) => {
        setLatestCustomer(data.foundReservation);
        setLoaded(true);
      });
  }, []);

  return <div></div>;
};

export default CardFound;
