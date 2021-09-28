import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { DarkModeContext } from "./ThemeHandler";
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const NavBar = () => {
  const theme = React.useContext(DarkModeContext);
  console.log(theme)
  const darkMode = theme.state.darkMode;

  const handleThemeChange = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Treacle Technologies
          </Typography>
          <WbSunnyIcon onClick={handleThemeChange}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
