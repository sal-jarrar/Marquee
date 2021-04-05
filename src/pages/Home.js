import React, { useEffect, useState } from 'react'
import Content from '../components/content/Content'
import Header from '../components/header/Header'
import Action from '../components/action/Action'
import './Home.css'
import slide_one from '../backgrounds/slide_one.jpg'
import slide_two from '../backgrounds/slide_two.jpg'
import slide_three from '../backgrounds/slide_three.jpg'
import axios from 'axios'

function Home() {
  const [pages, setPages] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json'
        )

        setPages(data.pages)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  let bg
  pageNumber === 0
    ? (bg = slide_one)
    : pageNumber === 1
    ? (bg = slide_two)
    : (bg = slide_three)

  return (
    <div className='home' style={{ backgroundImage: `url(${bg})` }}>
      <Header onPageChange={setPageNumber} pageNumber={pageNumber} />
      <Content page={pages[pageNumber]} />
      <Action page={pages[pageNumber]} />
    </div>
  )
}

export default Home
