import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

function Menu({ onPageChange, pageNumber }) {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link
            href='#'
            className={`${pageNumber === 0 ? 'active' : ''}`}
            onClick={() => onPageChange(0)}
          >
            Industries
          </Link>
        </li>
        <li>
          <Link
            href='#'
            className={`${pageNumber === 1 ? 'active' : ''}`}
            onClick={() => onPageChange(1)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href='#'
            className={`${pageNumber === 2 ? 'active' : ''}`}
            onClick={() => onPageChange(2)}
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
