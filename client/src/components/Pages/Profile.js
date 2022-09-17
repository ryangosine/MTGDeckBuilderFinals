import React, { useContext } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import { CurrentUserContext } from "../CurrentUserContext";

const Profile = () => {
  const {
    currentUser,
    setCurrentUser,
    loggedIn,
    setLoggedIn,
    loggedOut,
    setLoggedOut,
  } = useContext(CurrentUserContext);

  return (
    <ProfileWrapper>
      <Header />
      <DetailsWrapper>
        <Title>User</Title>
        <UserName>UserName: {currentUser.foundUser.userName}</UserName>
        <UserEmail>E-mail: {currentUser.foundUser.email}</UserEmail>
        <GivenName>Card Text: {currentUser.foundUser.givenName}</GivenName>
      </DetailsWrapper>
      <Footer />
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div``;
const DetailsWrapper = styled.div``;
const Title = styled.h1``;
const UserEmail = styled.h1``;
const GivenName = styled.h1``;
const UserName = styled.h1``;

export default Profile;
