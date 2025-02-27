import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
