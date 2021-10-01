import React, { useContext, useEffect } from "react";
import { darkTheme, lightTheme } from "./components/UI/Theme";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DarkModeContext } from "./components/UI/ThemeHandler";
import IndexPage from './screens/Dashboard/index';
import './App.css';

function App() {
  const theme = useContext(DarkModeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }, [])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className="App">
        <IndexPage/>
      </div>
    </ThemeProvider>
  );
}

export default App;
