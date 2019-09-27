import React from "react";
import Paper from "@material-ui/core/Paper";
import "./Card.css";
import { Typography } from "@material-ui/core";

const CardInfo = props => {
  return props.books.map(
    ({ title, authors, image, description, link, id }, index) => {
      return (
        <Paper id="card_style">
          <Typography variant="h2">{title}</Typography>
          <Typography id="author" component="p">
            Written by {authors}
          </Typography>
          <img alt="bookPicture" className="image" src={image} />
          <Typography id="book_description" component="p">
            {description}
          </Typography>
          <button
            id={id}
            className="save_button"
            onClick={props.handleSaveBook}
          >
            Save
          </button>
          <button id="view_button" className="view">
            <a className="link" target="_blank" href={link}>
              View
            </a>
          </button>
        </Paper>
      );
    }
  );
};
export default CardInfo;
