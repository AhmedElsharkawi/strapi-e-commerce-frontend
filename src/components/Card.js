import React from 'react'
import "./Card.scss"
import {Link} from "react-router-dom"

const Card = ({item}) => {
  return (
    
    <Link to={`/product/${item.id}`}className='card'>
    
        <div className='card-container'>
<div className='images'>
    {item?.attributes.isNew && <span className='new-season'>New Season</span> }
    <img src={ item?.attributes?.Img?.data?.attributes?.url} alt="" className='imgfirst'/>
    <img src={ item?.attributes?.Img2?.data?.attributes?.url} alt=""  className='imgsecond'/> 
</div>
<h2>{item.attributes.title}</h2>
<div className='price'>
    <h3 className='oldprice'>${item.oldPrice || item?.attributes.price + 20}</h3>
    <h3 className='newprice'>${item.attributes.price}</h3>
</div>
<div>

</div>
        </div>
   
    </Link>
  )
}

export default Card