import React from 'react'
import './Action.css'

function Action({ page }) {
  if (page) {
    return (
      <footer>
        <div className='action'>
          <div className='cta'>{page.blocks[0].cta}</div>
          <div className='talk'>
            LET'S TALK.
            <i class='fas fa-arrow-right'></i>
          </div>
        </div>
      </footer>
    )
  } else {
    return <h1>hi</h1>
  }
}

export default Action
