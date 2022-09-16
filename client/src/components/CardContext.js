import React, { createContext } from "react";
import { useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardDisplay, setCardDisplay] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CardContext.Provider
      value={{
        cardDisplay,
        setCardDisplay,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
