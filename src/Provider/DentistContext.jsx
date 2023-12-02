import { createContext, useReducer, useContext } from "react";

const DentistContext = createContext();

const initialState = {
  dentists: [],  
  favoriteDentists: [], 
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };     
    case "ADD_TO_FAVORITES":
        const newFavoriteDentists = [...state.favoriteDentists, action.payload];
        localStorage.setItem("favoriteDentists", JSON.stringify(newFavoriteDentists));
        return { ...state, favoriteDentists: newFavoriteDentists };
    case "REMOVE_FROM_FAVORITES":
        const updatedFavorites = state.favoriteDentists.filter(
          (dentist) => dentist.id !== action.payload
        );
        localStorage.setItem("favoriteDentists", JSON.stringify(updatedFavorites));
        return { ...state, favoriteDentists: updatedFavorites };
    default:
        return state; 
  }
};

export const DentistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,    
  });
  
  return (
    <DentistContext.Provider value={{ state, dispatch }}>
      {children}
    </DentistContext.Provider>
  );
};

export const useDentistContext = () => {
  return useContext(DentistContext);
};
