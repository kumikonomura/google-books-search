import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './SearchBox.css'

const SearchBox = props => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = event => setSearchTerm(event.target.value)

  return (
    <>
      <div className='headers' >
        <h1>Google Books Search</h1>
        <h4>Search and Save your favorite books</h4>
      </div>
      <div className='inputBox' >
        <TextField
          id='outlined-password-input'
          type='text'
          autoComplete='current-password'
          margin='normal'
          value={searchTerm}
          onChange={handleInputChange}
          variant='outlined'
        />
      </div>
      <div className='search' >
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            console.log(searchTerm)
            props.clickHandler(searchTerm)
          }}
          className='searchButton'>
          Search
        </Button>
      </div>
    </>
  )
}

export default SearchBox
