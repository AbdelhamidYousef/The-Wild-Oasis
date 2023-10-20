import { PropTypes } from "prop-types";
import { useContext, useState } from "react";
import { createContext } from "react";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => setIsAuth(true);

  return (
    <appContext.Provider value={{ isAuth, login }}>
      {children}
    </appContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(appContext);

  if (!context)
    throw new Error("useAppContext must be used within a AppContextProvider");

  return context;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContextProvider, useAppContext };
