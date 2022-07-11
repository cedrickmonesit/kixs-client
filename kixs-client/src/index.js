import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Members from "./Components/members";
import Profile from "./Components/profile";

import { Route, Routes } from "react-router-dom";

const redirectURL = `${window.location.origin}/profile` // set redirect url must be one of the allowed callback urls in the Auth0 application settings. Redirects after logging in.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  // using BrowserRouter instead of Hashroute best for regular looking urls
  <BrowserRouter>
    <Auth0Provider
      domain="dev-uuh22p8d.us.auth0.com"
      clientId="DbkPnc6u9JAzxruw9f1ehaKEyLj2Tg7J"
      redirectUri= {redirectURL}
      audience="https://dev-uuh22p8d.us.auth0.com/api/v2/"
    >
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/members" element={<Members />} exact />
      <Route path="/profile" element={<Profile />} exact />
    </Routes>
    </Auth0Provider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
