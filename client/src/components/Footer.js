import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {
  return <FooterWrapper></FooterWrapper>;
};

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 40px;
  display: flex;
  background-color: #5545ba;

  border-top: 1px solid #e7e7e7;
  text-align: center;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  width: 100%;
`;

export default Footer;
