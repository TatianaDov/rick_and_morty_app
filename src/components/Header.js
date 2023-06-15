import React from "react";
import { Typography } from "@mui/material";
function Header() {
  return (
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
  );
}
export default Header;
