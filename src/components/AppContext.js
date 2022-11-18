import { createContext, useContext, useState, useEffect } from 'react';
import '../App2.css';
import { client } from '../client';

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = () => {
      client
        .getEntries()
        .then((response) => {
          setFetchedData(response.items);
        })
        .catch(console.error);
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ fetchedData }}>
      {fetchedData && children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
