import React, { useState, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { UserContext } from "../contexts/UserContext";

function Cards({ card }) {
  const { toggleLike, handleRemoveCard, deleteLike } = useContext(UserContext);
  const [isLike, setIsLike] = useState(false);

  function handleLike(id) {
    setIsLike(true);
    toggleLike(id);
  }

  function handleDislike(id) {
    setIsLike(false);
    deleteLike(id);
  }
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        padding: "12px",
        boxShadow: "0px 0px 5px 2px rgba(34, 60, 80, 0.2)",
      }}
    >
      <Typography
        variant="h7"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          maxWidth: "150px",
          fontWeight: "900",
          alignSelf: "flex-start",
          margin: "5px 0 12px",
        }}
      >
        {card.name}
      </Typography>
      <CloseIcon
        onClick={() => handleRemoveCard(card.id)}
        sx={{ position: "absolute", right: "10px", cursor: "pointer" }}
      />
      <CardMedia component="img" image={card.image} />
      <CardContent
        sx={{
          display: "flex",
          padding: "0 !important",
          position: "relative",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography sx={{ margin: "10px 0 0" }}>
          Gender: {card.gender}
        </Typography>
        <Typography>Status: {card.status}</Typography>
        {isLike ? (
          <FavoriteIcon
            onClick={handleDislike}
            sx={{
              color: "red",
              position: "absolute",
              right: "0",
              top: "25px",
              cursor: "pointer",
            }}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={() => handleLike(card.id)}
            sx={{
              color: "red",
              position: "absolute",
              right: "0",
              top: "25px",
              cursor: "pointer",
            }}
          />
        )}
      </CardContent>
    </Card>
  );
}
export default Cards;
