import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SearchBox = props => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
      <TextField
        id='outlined-password-input'
        type='text'
        autoComplete='current-password'
        margin='normal'
        value={searchTerm}
        variant='outlined'
      />
      <div>
        <Button
          variant='contained'
          color='primary'
          onClick={props.clickHandler}
          className='searchButton'>
          Search
        </Button>
      </div>
    </>
  )
}

export default SearchBox
