import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import BasicPagination from "./components/BasicPagination";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Main />
      <BasicPagination/>
    </div>
  );
}

export default App;
