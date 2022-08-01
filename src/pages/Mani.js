import React from 'react'
import Banner from '../components/Banner'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import Video from '../components/Video'

function Mani() {
  return (
    <div className='main'>
      <Banner/>
      <Pagination/>
      <Navbar/>
      <Content/>
      <Video/>
    </div>
  )
}

export default Mani
