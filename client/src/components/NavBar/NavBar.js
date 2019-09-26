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
      <AppBar id='navbar' position="static">
        <Toolbar>
          <Typography id='google_header' variant="h4">Google Books</Typography>
          <Button id="searchButton" onClick={props.toggleView}>
            <Link id="linkButton" to="/">
              New Search
            </Link>
          </Button>
          <Button id="savedButton">
            <Link id="linkButton" to="/saved">
              Saved
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
