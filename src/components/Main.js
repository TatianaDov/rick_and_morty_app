import { Button, Box } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useTheme } from "@mui/material/styles";
import Cards from "./Cards";

function Main() {
  const { filtredCards, filterCards, filterLikeCards } =
    useContext(UserContext);
  const [cardLoad, setCardLoad] = useState(false);
  const theme = useTheme();

  function handleFilterCardsLike() {
    filterCards();
    setCardLoad(true);
  }

  function handleFilterCardsAll() {
    setCardLoad(false);
    filterLikeCards();
  }

  return (
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
          gridTemplateColumns: "repeat(4,1fr)",
          maxWidth: "fit-content",
          gap: "20px",
          margin: "10px 0 50px",
          [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(2,1fr)",
          },
          [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(1,1fr)",
          },
        }}
      >
        {filtredCards.map((card) => (
          <Cards key={card.id} card={card} />
        ))}
      </Box>
    </div>
  );
}

export default Main;
