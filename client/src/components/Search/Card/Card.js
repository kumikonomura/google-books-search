import React from 'react'
import './Card.css'

const CardInfo = props => {
  return (
                  <div className='cardDiv'>
      <form>
          <div className='mainContent'>
          <h2 className='title'>{props.title}</h2>
                        <p className='author'>{props.author}</p>
          <img className='image' src={props.image} />
        </div>
        <div className='subContent'>
          <p className='description'>{props.description}</p>
        </div>
                               <div className='buttonContent'>
          <a className='view' href={props.link} />
          <button className='save'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default CardInfo
