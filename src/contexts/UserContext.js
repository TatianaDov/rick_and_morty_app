import React, { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [filtredCards, setFiltredCards] = useState([]);

  const handleRemoveCard = (id) => {
    const deleteCard = cards.filter((card) => card.id !== id);
    setFiltredCards(deleteCard);
  };

  const filterCards = () => {
    setFiltredCards(() => cards.filter((i) => i.liked));
  };

  const toggleLike = (id) => {
    const card = cards.map((i) => {
      if (i.id === id) {
        return { ...i, liked: true };
      }
      return i;
    });
    setCards(card);
  };

  const deleteLike = (id) => {
    const card = cards.map((i) => {
      if (i.id === id) {
        return { ...i, liked: false };
      }
      return i;
    });
    setCards(card);
  };
  
  const filterLikeCards = () => {
    setFiltredCards(cards);
  };

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((data) => {
        setCards([...data.data.results]);
        setFiltredCards([...data.data.results]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <UserContext.Provider
      value={{
        filterLikeCards,
        filtredCards,
        deleteLike,
        handleRemoveCard,
        filterCards,
        toggleLike,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
