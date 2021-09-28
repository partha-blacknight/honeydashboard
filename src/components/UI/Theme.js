import { createTheme } from "@mui/material/styles"
import darkScrollbar from "@mui/material/darkScrollbar";

const baseTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          color: "darkred",
          backgroundColor: "#2b2626",
          "& h1": {
            color: "black"
          }
        }
      }
    }
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontFamilySecondary: "'Roboto Condensed', sans-serif"
  }
})

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "dark",
    primary: {
      main: "#120d0d"
    },
    secondary: {
      main: "#5c4f4f"
    }
  }
})
const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "light",
    primary: {
      main: "#5c4f4f"
    },
    secondary: {
      main: "#120d0d"
    }
  }
})

export { darkTheme, lightTheme }
