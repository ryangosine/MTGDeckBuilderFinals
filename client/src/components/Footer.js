import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  /**
   *
   * TO DO
   * write all the legal stuff so I dont get sued lol
   *
   */
  return (
    <FooterWrapper>
      <P>
        Portions of MTG DECK BUILDER are unofficial Fan Content permitted under
        the Wizards of the Coast Fan Content Policy. The literal and graphical
        information presented on this site about Magic: The Gathering, including
        card images, the mana symbols, and Oracle text, is copyright Wizards of
        the Coast, LLC, a subsidiary of Hasbro, Inc. MTG DECK BUILDER is not
        produced by, endorsed by, supported by, or affiliated with Wizards of
        the Coast. So don't sue me, bro.
      </P>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 20px;
  display: flex;
  background-color: #5545ba;

  border-top: 1px solid #e7e7e7;
  text-align: center;

  position: fixed;
  left: 0;
  bottom: 0;
  height: 80px;
  width: 100%;
`;

const P = styled.p`
  font-size: 0.7rem;
  padding-bottom: 20px;
`;

export default Footer;
