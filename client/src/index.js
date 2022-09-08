<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
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
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
>>>>>>> 059bb08f67a9491ce5cdadf0a201fb926293deb2
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
