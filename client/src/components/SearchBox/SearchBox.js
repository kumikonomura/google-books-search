import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SearchBox = props => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = event => setSearchTerm(event.target.value)

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <h1>Google Books Search</h1>
        <h4>Search and save your favorite books</h4>
      </div>
      <div style={{ textAlign: 'center' }}>
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
      <div style={{ textAlign: 'center' }}>
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
