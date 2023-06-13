import { FileDownloadOff } from "@mui/icons-material";
import { createContext } from "react";
import axios from "axios";
export const UserContext = createContext();

import React,{useState,useEffect} from "react";

const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((data) => {
        setCards([...data.data.results]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);


const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={cards}>
      <div>{children}</div>
    </UserContext.Provider>
  );
};

export default UserProvider;
