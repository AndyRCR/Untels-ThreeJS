import React from 'react'
import Banner from '../components/Banner/Banner'
import MainCanvas from '../components/MainCanvas/MainCanvas'
import SectionContainer from '../components/Sections/SectionContainer'

const Home = () => {
  return (
    <div className='home'>
      <Banner/>
      <MainCanvas/>
      <SectionContainer/>
    </div>
  )
}

export default Home