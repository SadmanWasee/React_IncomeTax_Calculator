import React from 'react'
import { NavLink } from 'react-router'
import { Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';

function Navbar() {
  return (
    <div className="nav-bar">
      <NavLink
        className="nav-link"
        to="/"
      >
        <Button
          variant='contained'
          color='error'
          startIcon={<HomeIcon />}
        >
          Home
        </Button>
      </NavLink>
      <NavLink
        className="nav-link"
        to="/tax-rule"
      >
        <Button
          variant='contained'
          color='error'
          startIcon={<ArticleIcon />}
        >
          Tax Rule
        </Button>
      </NavLink>
    </div>
  )
}

export default Navbar