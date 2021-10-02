import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import NavBar from './NavBar';

const Layout = ({ children, ft }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar/>
      <div
       style={{
         margin: `0 auto`,
         padding: `1rem 1.0875rem 1.45rem`
       }}
     >
       <main>{children}</main>
     </div>
     {(ft === "t" ? true : null) && (
       <footer
         style={{
           position: "fixed",
           bottom: 0,
           width: "100vw",
           maxWidth: "100%",
           padding: 0,
           margin: 0,
           backgroundColor: "#120d0d"
         }}
       >
         <div
           style={{
             textAlign: "center",
             marginTop: "0.5em",
             color: "white",
             textDecoration: "none",
             marginBottom: "0.5em"
           }}
         >
           <a
             href="https://snappywebdesign.net/"
             style={{
               textDecoration: "none",
               color: "#FFF",
               paddingBottom: 3,
               borderBottom: `1px solid white`
             }}
           >
            Copyright @ {new Date().getFullYear()} Treacle Technologies 
           </a>
         </div>
       </footer>
     )}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

Layout.defaultProps = {
  ft: "t"
}

export default Layout;
