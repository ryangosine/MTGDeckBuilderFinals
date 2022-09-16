import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  CurrentUserContext,
  CurrentUserProvider,
} from "./components/CurrentUserContext";
import { CardProvider } from "./components/CardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <CardProvider>
        <App />
      </CardProvider>
    </CurrentUserProvider>
  </React.StrictMode>
);
