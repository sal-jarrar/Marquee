import React from 'react'

import './Subhead.css'

function Subhead({ page }) {
  return (
    <div className='subhead'>
      <p>{page.subhead}</p>
    </div>
  )
}

export default Subhead
