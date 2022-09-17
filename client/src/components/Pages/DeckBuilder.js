import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { CardContext } from "../CardContext";
import Footer from "../Footer";
import Header from "../Header";
import { FiSearch } from "react-icons/fi";
import Dashboard from "./Dashboard";

const DeckBuilder = () => {
  const { cardDisplay, setCardDisplay, searchTerm, setSearchTerm } =
    useContext(CardContext);

  const [cardList, setCardList] = useState([]);
  let navigate = useNavigate();

  let handleSubmitClick = (ev) => {
    ev.preventDefault();

    fetch(`/api/get-card/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setCardDisplay(data);
      });
    console.log("cardDisplay", cardDisplay);

    let addCard = (ev) => {
      ev.preventDefault();

      let list = cardList;
      const newCard = document.getElementById("addInput");
      const form = document.getElementById("addCardForm");

      if (newCard.value != "") {
        list.push(newCard.value);
        setCardList({ list: list });
        newCard.classList.remove("is-danger");
        form.reset();
      } else {
        newCard.classList.add("is-danger");
      }
    };
    // addCard = addCard.bind(handleSubmitClick);
  };

  return (
    <PageWrapper>
      <Header />
      <Link to="../dashboard" element={<Dashboard />} />

      <FormWrapper>
        <form>
          <label htmlFor="card-search">
            <span style={{ marginRight: "10px" }}>
              Search For A Card By Name:
            </span>
          </label>
          <input
            type="text"
            id="card-search"
            value={searchTerm}
            placeholder="Enter Card Name"
            name="search"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit" onClick={(ev) => handleSubmitClick(ev)}>
            <FiSearch style={{ fontSize: "2rem" }} />
          </button>
        </form>

        <DeckDetails>
          <ul>
            {cardList.map((searchTerm) => (
              <li key={searchTerm}>{searchTerm}</li>
            ))}
            <CardImage src={cardDisplay.data.imageUrl} />
          </ul>
        </DeckDetails>
      </FormWrapper>

      <Footer />
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;
const FormWrapper = styled.div``;
const DeckDetails = styled.div`
  display: flex;
  margin: 10px;
`;
const CardImage = styled.img`
  width: 80%;
`;
export default DeckBuilder;
