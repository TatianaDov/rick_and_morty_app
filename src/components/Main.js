import { Button, Box } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import BasicPagination from "./BasicPagination";
import Cards from "./Cards";
import Filters from "./Filters";

function Main() {
  const { isError, filtredCards, filterCards, filterLikeCards, isSearching } =
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
    <>
      <Box
        sx={{
          padding: "0 20px",
          margin: "20px auto",
          maxWidth: "956px",
          display: "flex",
          justifyContent: "space-between",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        }}
      >
        {!cardLoad ? (
          <Button
            onClick={handleFilterCardsLike}
            sx={{
              color: "black",
              alignSelf: "center",
              margin: "0",
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
        <Filters />
      </Box>
      {isSearching ? (
        <CircularProgress sx={{ marginTop: "100px" }} />
      ) : (
        <>
          <Box
            sx={{
              padding: "0 20px ",
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              maxWidth: "956px",
              gap: "20px",
              margin: "30px auto 50px",
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
          {isError ? (
            "По вашему запросу ни чего не найдено"
          ) : (
            <BasicPagination />
          )}
        </>
      )}
    </>
  );
}

export default Main;
