import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import './Card.css'

const CardInfo = props => {
  return (
    <>
      <div>
        <Paper style={{ backgroundColor: '#FFFF33', marginLeft: '50px', marginRight: '50px', marginTop: '50px' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h2 className='title'>{props.title}</h2>
              <p className='author'>{props.author}</p>
              <img className='image' src={props.image} />
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
              <Grid item xs={6}>
                <button className='view' href={props.link}>View</button>
                <button>Save</button>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} className='description'>
              {props.description}
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  )
}

export default CardInfo
