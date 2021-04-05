import React from 'react'
import './Headline.css'

function Headline({ page }) {
  return (
    <div className='headline'>
      <p>{page.headline}</p>
    </div>
  )
}

export default Headline
