import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MenuList from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { DarkModeContext } from "./ThemeHandler";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { NavLink, withRouter } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {routes} from '../../routes';
import { RouterTwoTone } from '@material-ui/icons';

const drawerWidth = 300;
const transitionDuration = 1000;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  icon: {
    color: "#FFF !important"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    //this will hide the backdrop when varient="temporary"
    "& .MuiBackdrop-root": {
      display: "none"
    },
    "& .MuiDrawer-paper": {
      backgroundColor: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#1e2022 !important",
    opacity: "0.9 !important",
    color: "#FFF !important"
  },
  drawerContainer: {
    overflow: "auto"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: transitionDuration
    }),
    marginLeft: 0
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: transitionDuration
    }),
    marginLeft: drawerWidth
  }
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  justifyContent: 'flex-end',
}));

const NavBar = () => {
  const theme = React.useContext(DarkModeContext);
  const darkMode = theme.state.darkMode;
  const classes = useStyles();
  const { pathname } = useLocation();
  console.log(pathname)
  
  const handleThemeChange = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = () => {
    if(!!open){
      setOpen(false);
    }else{
      setOpen(true);
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Treacle Technologies
          </Typography>
          <WbSunnyIcon onClick={handleThemeChange}/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        elevation={3}
        open={open}
        transitionDuration={{
          enter: transitionDuration,
          exit: transitionDuration
        }}
        classes={{
          paper: classes.drawerPaper
        }}
        PaperProps={{ elevation: 9 }}
        ModalProps={{ onBackdropClick: toggleDrawer }}
      >
        <div className={classes.drawerContainer}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose} classes={{root: classes.icon}}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <MenuList>
            {routes.map((route, index) => (
              <NavLink to={route.path} style={{ textDecoration: 'none' }} key={route.path}>
                <MenuItem selected={route.path === pathname} className={route.path === pathname ? "list-menu-selected": ""}
                button key={index}>
                  <ListItemIcon classes={{root: classes.icon}}>
                    {route.icon}
                  </ListItemIcon>
                  <ListItemText primary={route.name}/>
                </MenuItem>
              </NavLink>
            ))}
          </MenuList>
        </div>
        <Divider />
      </Drawer>
      <Main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <Toolbar />
      </Main>
    </Box>
  );
}

export default withRouter(NavBar);
