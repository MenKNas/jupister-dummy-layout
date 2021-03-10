import * as React from "react";
import useDarkMode from "../hooks/useDarkMode";

const ThemeContext = React.createContext("light");

export function ThemeProvider({ children }) {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <ThemeContext.Provider value={{ colorTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
