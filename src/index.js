import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { Theme } from "@twilio-paste/core/theme";
import { store } from "./store/index";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Theme.Provider theme="default">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Theme.Provider>
  </Provider>
);
