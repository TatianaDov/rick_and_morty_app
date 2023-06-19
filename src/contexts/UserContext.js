import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { getData, getDataPage, getDataInfo } from "../api/AxiosApi";
import useDebounce from "../hooks/use-debounce";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [filtredCards, setFiltredCards] = useState([]);
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState({
    name: "",
    status: "",
    gender: "",
  });
  const debouncedSearchTerm = useDebounce(value, 1000);

  const handleChange = (event, page) => {
    setPage(page);
  };

  const handleFilter = (event, str) => {
    setValue({ ...value, [str]: event.target.value });
  };

  const handleRemoveCard = (id) => {
    const deleteCard = cards.filter((card) => card.id !== id);
    setFiltredCards(deleteCard);
    setCards(deleteCard);
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
    if (debouncedSearchTerm) {
      setIsSearching(true);
      getDataInfo(debouncedSearchTerm)
        .then((data) => {
          setIsSearching(false);
          setCards([...data.data.results]);
          setFiltredCards([...data.data.results]);
          setPages({ ...data.data.info });
        })
        .catch(function (error) {
          if (error) {
            setIsError(true)
            setIsSearching(false);
            setCards([]);
            setFiltredCards([]);
            console.log(error);
          }
        });
    } else {
      setCards([]);
      setFiltredCards([]);
      setPages({});
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    getDataPage(page)
      .then((data) => {
        setCards([...data.data.results]);
        setFiltredCards([...data.data.results]);
        setPages({ ...data.data.info });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [page]);

  useEffect(() => {
    getData()
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
        pages,
        handleChange,
        page,
        value,
        handleFilter,
        isSearching,
        isError
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
