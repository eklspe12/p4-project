import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);