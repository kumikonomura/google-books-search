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
          <Typography id='book_description' component="p">{description}</Typography>
          <button id={id} className="save_button" onClick={props.handleSaveBook}>
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

// return (
//   <div>
//     {props.books.map(
//       ({ title, authors, image, description, link, id }, index) => {
//       }
//     )}
//   </div>

// <div>
//   <Paper id='card_style'>
//     <Typography variant='h2'>{props.title}</Typography>
//     <Typography id='author' component='p'>Written by {props.author}</Typography>
//     <img className='image' src={props.image} />
//     <Typography component='p'>{props.description}</Typography>
//     <button id='save_button' className='save' onClick={props.handleSaveBook}>
//       Save
//     </button>
//     <button id='view_button' className='view'>
//       <a className='link' target='_blank' href={props.link}>
//         View
//       </a>
//     </button>
//   </Paper>
// </div>
//   );
// };
// export default CardInfo;

// const CardInfo = props => {
//   return (
//     <div className="cardDiv">
//       <form>
//         <div className="mainContent">
//           <h2 className="title">{props.title}</h2>
//           <p className="author">Written by {props.author}</p>
//           <img className="image" src={props.image} />
//         </div>
//         <div className="subContent">
//           <p className="description">{props.description}</p>
//         </div>
//         <div className="buttonContent">
//           <button className="save" onClick={props.handleSaveBook}>
//             Save
//           </button>
//           <button className="view">
//             <a className="link" target="_blank" href={props.link}>
//               View
//             </a>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CardInfo;
