import Headline from '../headline/Headline'
import Subhead from '../subhead/Subhead'
import { LoopCircleLoading } from 'react-loadingg'

import './Content.css'

function Content({ page }) {
  if (page) {
    return (
      <div className='content'>
        <div className='inner-content'>
          <Headline page={page.blocks[0]} />
          <Subhead page={page.blocks[0]} />
        </div>
      </div>
    )
  } else {
    return <LoopCircleLoading />
  }
}

export default Content
