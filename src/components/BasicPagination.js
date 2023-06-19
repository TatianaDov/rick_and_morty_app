import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function BasicPagination() {
  const { pages, page, handleChange } = useContext(UserContext);

  return (
    <Stack sx={{ display: "flex", alignItems: "center", marginBottom: "50px" }}>
      <Pagination
        count={pages.pages}
        page={page}
        onChange={handleChange}
        color="secondary"
        size="large"
      />
    </Stack>
  );
}

export default BasicPagination;
