import React from "react";
import "./App.css";
import { ChicoryDropdown } from "./components";
import { useState } from "react";
import useFetchRetailers from "./utils/customhooks/useFetchRetailers";

function App() {
  return (
    <div className="App">
      <ChicoryDropdown/>;
    </div>
  );
}

export default App;
