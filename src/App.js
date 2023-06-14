import React, { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";
import { Typography, Button, Box } from "@mui/material";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const { filtredCards, filterCards, filterLikeCards } =
    useContext(UserContext);
  const [cardLoad, setCardLoad] = useState(false);

  function handleFilterCardsLike() {
    filterCards();
    setCardLoad(true);
  }

  function handleFilterCardsAll() {
    setCardLoad(false);
    filterLikeCards();
  }

  return (
    <div className="App">
      <Typography
        variant="h4"
        sx={{
          padding: "40px 0 30px",
          fontWeight: "900",
          borderBottom: "1px solid gray",
        }}
      >
        Rick and Morty Characters
      </Typography>
      <div className="wrap">
        {!cardLoad ? (
          <Button
            onClick={handleFilterCardsLike}
            sx={{
              color: "black",
              alignSelf: "flex-start",
              marginTop: "10px",
              border: "1px solid black",
              borderRadius: "30px",
              padding: "7px 20px",
              fontWeight: "900",
            }}
          >
            All Cards
          </Button>
        ) : (
          <Button
            onClick={handleFilterCardsAll}
            sx={{
              backgroundColor: "black",
              alignSelf: "flex-start",
              marginTop: "10px",
              borderRadius: "30px",
              padding: "7px 13px",
              fontWeight: "900",
              color: "white",
            }}
          >
            Liked Cards
          </Button>
        )}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4,200px)",
            gap: "20px",
            margin: "10px 0 50px",
          }}
        >
          {filtredCards.map((card) => (
            <Cards key={card.id} card={card} />
          ))}
        </Box>
      </div>
    </div>
  );
}

export default App;
