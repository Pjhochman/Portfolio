import React, { useContext, useState } from "react";
import styled from "styled-components";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  // eslint-disable-next-line
  const container = styled.div`
    width: 50px;
    height: 50px;
    background: red;
  `;
  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
