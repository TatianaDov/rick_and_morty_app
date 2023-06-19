import { Box, TextField, InputLabel, Select, FormControl } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { status, gender } from "../common/index";

function Filters() {
  const theme = useTheme();
  const { values, handleFilter } = useContext(UserContext);

  return (
    <Box
      noValidate
      autoComplete="off"
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "80%",
        [theme.breakpoints.down("md")]: {
          width: "100%",
          marginTop: "10px",
        },
        "& .MuiTextField-root": { m: 1, width: "100%" },
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          "& .MuiTextField-root": { width: "100%" },
        },
      }}
    >
      <TextField
        id="name"
        variant="outlined"
        label="Name"
        onChange={(e) => handleFilter(e, "name")}
        value={values.name}
      />
      <FormControl fullWidth>
        <InputLabel id="status">Status</InputLabel>
        <Select
          onChange={(e) => handleFilter(e, "status")}
          value={values.status}
          labelId="status"
          id="status"
          label="Status"
        >
          {status.map((option) => (
            <MenuItem value={option.value} key={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          onChange={(e) => handleFilter(e, "gender")}
          value={values.gender}
          labelId="gender"
          id="gender"
          label="Gender"
        >
          {gender.map((option) => (
            <MenuItem value={option.value} key={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Filters;
