import React from 'react'
import Logo from '../logo/Logo'
import Menu from '../menu/Menu'

import './Header.css'

function Header({ onPageChange, pageNumber }) {
  return (
    <div className='layout'>
      <div className='inner'>
        <Logo />
        <button>Contact Us</button>
      </div>
      <div className='inner-menu'>
        <Menu onPageChange={onPageChange} pageNumber={pageNumber} />
      </div>
    </div>
  )
}

export default Header
