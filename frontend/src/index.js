import React from "react";
import ReactDOM from "react-dom";

import { UserContextProvider } from "./components/UserContext";

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
