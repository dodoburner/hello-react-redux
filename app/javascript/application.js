// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
