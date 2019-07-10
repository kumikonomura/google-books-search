import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const NavBar = _ => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h4'>
            Google Books
          </Typography>
          <Button style={{ variant: 'h6' }} color='inherit'>Search</Button>
          <Button style={{ variant: 'h6' }} color='inherit'>Saved</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
