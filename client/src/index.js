import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  CurrentUserContext,
  CurrentUserProvider,
} from "./components/CurrentUserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-y3u3-jb1.us.auth0.com"
      clientId="HUvCJT73tR6aX3lyUyG0pld1ncpm4Cfl"
      redirectUri={window.location.origin}
    >
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
