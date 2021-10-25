import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import { darkTheme, lightTheme } from "./components/UI/Theme";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DarkModeContext } from "./components/UI/ThemeHandler";
import {routes} from './routes';
import Dashboard from "./screens/Dashboard/index";
import './App.css';

function App() {
  const theme = useContext(DarkModeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    if (!darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <div className="App">
          <Switch>
            {routes.map((route, i) => (
              <Route exact
                path={route.path}
                render={props => 
                  <route.component {...props}/>
                }
              />
            ))}
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
