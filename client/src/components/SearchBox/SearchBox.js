import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SearchBox = _ => {
  return (
    <>
      <TextField
        id='outlined-password-input'
        type='password'
        autoComplete='current-password'
        margin='normal'
        variant='outlined'
      />
      <div>
        <Button
          variant='contained'
          color='primary'
          className='searchButton'>
          Search
        </Button>
      </div>
    </>
  )
}

export default SearchBox
