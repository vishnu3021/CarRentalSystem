import React from 'react'
import CarsData from '../Vechical/CarsData'
import Homes from '../Home';
import Ratingpage from '../RatingPage/Ratingpage'

const Home = () => {
  return (
    <div >
      <div id="home">
        <Homes/>
        <CarsData/>
        <Ratingpage/>
      </div>
      
    
    </div>
  )
}

export default Home
