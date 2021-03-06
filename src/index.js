import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const Router =
  process.env.NODE_ENV === "development" ? HashRouter : BrowserRouter;

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
