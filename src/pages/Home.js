import React from 'react'
import Slider from '../components/Slider'
import FeaturedProduct from '../components/FeaturedProduct'
import Categories from '../components/Categories'



const Home = () => {
  return (
    <>
      <Slider/>
      <FeaturedProduct type="Featured" desc="there are some of our new collection with an amazing new features 
      we are providing for our valuable customers there are some of our new collection with an amazing new features 
      we are providing for our valuable customers there are some of our new collection with an amazing new features 
      we are providing for our valuable customers.." />
      
       <Categories />

      <FeaturedProduct type="Trending" desc="there are some of our new collection with an amazing new features 
      we are providing for our valuable customers there are some of our new collection with an amazing new features 
      we are providing for our valuable customers there are some of our new collection with an amazing new features 
      we are providing for our valuable customers.."  />


     
    </>
  )
}

export default Home