import { createContext, useState, useEffect } from 'react';

export const Context = createContext({
  currentLocation: null,
  setCurrentLocation: () => {},
});

const ContextState = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);
  const [favoritesArray, setFavoritesArray] = useState([]);
  const [filteredByBank, setFilteredByBank] = useState([]);
  const [frequentBank, setFrequentBank] = useState('');
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const banksFromLocal = localStorage?.getItem('fav');
    if (banksFromLocal && banksFromLocal.length) {
      setFavoritesArray(JSON.parse(banksFromLocal));
    } else {
      localStorage.setItem('fav', JSON.stringify([]));
    }
  }, []);

  const removeFavorite = (id) => {
    const filteredIdArray = favoritesArray.filter((fav) => fav !== id);
    setFavoritesArray(filteredIdArray);
    localStorage.setItem('fav', JSON.stringify(filteredIdArray));
  };

  const addFavorite = (id) => {
    const addedFavArray = [...favoritesArray, id];
    setFavoritesArray(addedFavArray);
    localStorage.setItem('fav', JSON.stringify(addedFavArray));
    setIsModal(true)
  };

  return (
    <Context.Provider
      value={{
        currentLocation,
        setCurrentLocation,
        isFiltered,
        setIsFiltered,
        frequentBank,
        setFrequentBank,
        filteredByBank,
        setFilteredByBank,
        addFavorite,
        removeFavorite,
        favoritesArray,
        isModal,
        setIsModal
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextState;
