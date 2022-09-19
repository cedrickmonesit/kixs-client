import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth0ProviderWithRedirectCallback from './Components/Auth0ProviderWithRedirectCallback';

const redirectURL = `${window.location.origin}/profile` // set redirect url must be one of the allowed callback urls in the Auth0 application settings. Redirects after logging in.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  /* React.Strictmode highjlights potential problems in the application will only run in development not in production. */
  <React.StrictMode>
  {/* using BrowserRouter instead of Hashroute best for regular looking urls */} 
  <BrowserRouter>
    <Auth0ProviderWithRedirectCallback /* returns us to our returnURL */
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri= {redirectURL}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
    >
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
    </Auth0ProviderWithRedirectCallback>
  </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();