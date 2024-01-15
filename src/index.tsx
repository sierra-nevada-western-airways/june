import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") ?? new Element(),
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
