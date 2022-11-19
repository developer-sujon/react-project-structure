//External Lib Import
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

//Internal Lib Import
import App from "./App";
import store from "./redux/store/store";
import "animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import "./locales/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
