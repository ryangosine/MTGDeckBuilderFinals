import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import { CardContext } from "../CardContext";
// import SpinnerIcon from "../SpinnerIcon"

const CardFound = () => {
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  console.log("id", id);
  const { cardDisplay, setCardDisplay, searchTerm, setSearchTerm } =
    useContext(CardContext);

  console.log("cardDisplay", cardDisplay.data);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/get-card/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCardDisplay(data);
        setLoading(false);
        console.log("data", data);
        console.log("cardDisplay", cardDisplay);
      });
  }, []);

  if (loading) {
    return <>Loading</>;
  } else {
    return (
      <PageWrapper>
        <Header />
        <DetailsWrapper>
          <NameAndCardImage>
            <Name>{cardDisplay.data.name}</Name>
            <CardImage src={cardDisplay.data.imageUrl} />
          </NameAndCardImage>

          <CardDetails>
            <Title>Details</Title>
            <ConvertedManaCost>
              Mana Cost: {cardDisplay.data.manaCost}
            </ConvertedManaCost>
            <ManaCost>Converted Mana Cost: {cardDisplay.data.cmc}</ManaCost>
            <OracleText>Card Text: {cardDisplay.data.text}</OracleText>
            <Type>Types: {cardDisplay.data.types}</Type>
            <Rarity>Rarity: {cardDisplay.data.rarity}</Rarity>
            <Artist>Artist: {cardDisplay.data.artist}</Artist>
          </CardDetails>
        </DetailsWrapper>
        <Footer />
      </PageWrapper>
    );
  }
};

const PageWrapper = styled.div``;

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NameAndCardImage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const CardDetails = styled.li`
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  border-left: 1px solid black;
  padding: 40px;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;
const CardImage = styled.img``;
const ConvertedManaCost = styled.p`
  padding: 10px;
`;
const Name = styled.h1`
  padding: 20px;
  font-size: 2rem;
`;
const OracleText = styled.p`
  padding: 10px;
`;
const ManaCost = styled.p`
  padding: 10px;
`;
const Type = styled.p`
  padding: 10px;
`;
const Rarity = styled.p`
  padding: 10px;
`;

const Artist = styled.p`
  padding: 10px;
`;

export default CardFound;
