import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div id="page-wrap">
          <h1>burger boo </h1>
        </div>
      </div>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
