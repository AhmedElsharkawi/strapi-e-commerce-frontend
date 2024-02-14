import React, { useState } from 'react';

import {AiOutlineArrowLeft , AiOutlineArrowRight} from "react-icons/ai"
import "./Slider.scss"



const Slider = () => {

    const [currentslide,setCurrentslide] = useState(0);

const Data = [
    "https://images.pexels.com/photos/5325586/pexels-photo-5325586.jpeg?auto=compress&cs=tinysrgb&w=1000",
"https://images.pexels.com/photos/787942/pexels-photo-787942.jpeg?auto=compress&cs=tinysrgb&w=1000",
"https://images.pexels.com/photos/3145552/pexels-photo-3145552.jpeg?auto=compress&cs=tinysrgb&w=1000",
"https://images.pexels.com/photos/4427816/pexels-photo-4427816.jpeg?auto=compress&cs=tinysrgb&w=1000",

];
 

 const previmg = ()=>{
  setCurrentslide( currentslide === 0 ? 3 : currentslide-1)

 };

 const nextimg = ()=>{
    setCurrentslide( currentslide === 3 ? 0 : currentslide + 1)
 };



  return (
    <div className='slider'>
        <div className='slider-container' style={{transform:`translateX(-${currentslide * 100}vw)`}}>
            <img src={Data[0]}  alt='slider-img4' />
            <img src={Data[1]}  alt='slider-img1' />
            <img src={Data[2]}  alt='slider-img2' />
            <img src={Data[3]}  alt='slider-img3' />
        </div>
        <div className='icons'>
<div className='icon'   onClick={previmg}>
    <AiOutlineArrowLeft />
</div>
<div className='icon' onClick={nextimg} >
    <AiOutlineArrowRight  />
</div>
        </div>
    </div>
  )
}

export default Slider