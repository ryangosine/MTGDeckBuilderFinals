import React from "react";
import { FiLoader, FiSettings } from "react-icons/fi";
import styled, { keyframes } from "styled-components";

const spinLoader = keyframes`from {
  transform:rotate(0deg)}

  to {
    transform: rotate(360deg);
  }`;

const SpinnerIcon = () => {
  return (
    <Spinner>
      <FiLoader />
    </Spinner>
  );
};

const Spinner = styled(FiSettings)`
  animation: ${spinLoader} 2s infinite linear;
  font-size: 50px;
  display: flex;
  justify-content: center;
`;

export default SpinnerIcon;
