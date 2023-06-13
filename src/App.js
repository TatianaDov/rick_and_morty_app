import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  
  return (
    <div className="App">
      <Typography variant="h4">Rick and Morty Characters</Typography>
      {cards.map((card) => (
        <Cards key={card.id} card={card} />
      ))}
    </div>
  );
}

export default App;