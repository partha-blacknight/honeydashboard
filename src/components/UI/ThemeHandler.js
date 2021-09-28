import React, { createContext, useReducer } from "react";

export const DarkModeContext = createContext();

const initialState = {
  darkMode: false
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DarkModeContext.Provider>
  )
}
