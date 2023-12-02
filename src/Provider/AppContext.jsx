import { createContext, useReducer, useContext } from "react";

const ThemeContext = createContext();

const initialState = {  
  theme: "dark",   
};

const appReducer = (state, action) => {
  switch (action.type) {    
    case "TOGGLE_THEME":
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return { ...state, theme: newTheme };
    default:
      return state;    
  }
};

export const AppProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    theme: storedTheme,
  });
  
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(ThemeContext);
};
