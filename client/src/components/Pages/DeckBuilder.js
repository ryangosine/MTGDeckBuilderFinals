import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { CardContext } from "../CardContext";
import Footer from "../Footer";
import Header from "../Header";
import { FiSearch } from "react-icons/fi";
import Dashboard from "./Dashboard";
import { CurrentUserContext } from "../CurrentUserContext";
const DeckBuilder = () => {
  const { cardDisplay, setCardDisplay, searchTerm, setSearchTerm } =
    useContext(CardContext);

  const { currentUser } = useContext(CurrentUserContext);

  const [loading, setLoading] = useState(false);
  const [cardList, setCardList] = useState([]);

  let navigate = useNavigate();

  let handleSubmitClick = async (ev) => {
    ev.preventDefault();

    setLoading(true);
    const res = await fetch(`/api/get-card/${searchTerm}`);
    const json = await res.json();
    const { data } = json;
    setCardDisplay(data);
    setLoading(false);

    const newCardList = [...cardList, data];
    console.log("newCardList", newCardList);
    if (data != "") {
      setCardList(newCardList);
    }

    console.log("data", data);
  };

  const removeCard = (ev, index) => {
    setLoading(true);
    console.log("index", index);
    ev.preventDefault();
    let newCardList = [...cardList];

    newCardList.splice(index, 1);
    setCardList(newCardList);
    setLoading(false);
  };

  if (loading) {
    <>loading</>;
  }

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
            {cardList.map((card, index) => {
              return (
                <CardButton>
                  {/* <li key={card.name}>{card.name}</li> */}
                  <CardImage src={card.imageUrl} />
                  <button onClick={(ev) => removeCard(ev, index)}>
                    Remove Card
                  </button>
                </CardButton>
              );
            })}
          </ul>
        </DeckDetails>
      </FormWrapper>

      <Footer />
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;
const FormWrapper = styled.div`
  width: 100vh;
`;
const DeckDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const CardImage = styled.img`
  width: 15%;
  height: auto;
`;

const CardButton = styled.div`
  display: flex;
  flex-direction: row;
`;
export default DeckBuilder;
