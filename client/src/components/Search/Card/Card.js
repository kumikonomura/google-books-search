import React from "react";
import "./Card.css";

const CardInfo = props => {
  return (
    <div className="cardDiv">
      <form>
        <div className="mainContent">
          <h2 className="title">{props.title}</h2>
          <p className="author">{props.author}</p>
          <img className="image" src={props.image} />
        </div>
        <div className="subContent">
          <p className="description">{props.description}</p>
        </div>
        <div className="buttonContent">
          <button className="save" onClick={props.handleSaveBook}>
            Save
          </button>
          <button className="view">
            <a className="link" target="_blank" href={props.link}>
              View
            </a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardInfo;
