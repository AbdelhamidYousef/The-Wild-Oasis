import { useContext, useState, createContext, useEffect } from "react";
import { PropTypes } from "prop-types";

import { useLocalStorageState } from "../hooks/useLocalStorageState";

const darkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((isDark) => !isDark);

  const [isAuth, setIsAuth] = useState(false);
  const toggleAuth = () => setIsAuth((isAuth) => !isAuth);

  return (
    <darkModeContext.Provider
      value={{ isAuth, toggleAuth, isDarkMode, toggleDarkMode }}
    >
      {children}
    </darkModeContext.Provider>
  );
};

const useDarkModeContext = () => {
  const context = useContext(darkModeContext);

  if (!context)
    throw new Error("useAppContext must be used within a AppContextProvider");

  return context;
};

DarkModeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DarkModeContextProvider, useDarkModeContext };
