import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Component/App";
import myStore from "./Store/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={myStore}>
      <App />
    </Provider>
  </>
);
