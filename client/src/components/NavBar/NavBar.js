import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  return (
    <div>
      <AppBar id="navbar" position="static">
        <Toolbar>
          <Typography id="google_header" variant="h4">
            Google Books
          </Typography>
          <Button href="/" id="searchButton" onClick={props.toggleView}>
            New Search
          </Button>
          <Button id="savedButton">Saved</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
