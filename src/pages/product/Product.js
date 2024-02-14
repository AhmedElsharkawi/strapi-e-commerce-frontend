import React, { useState } from 'react'
import "./Product.scss"
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
import useFetch from '../../components/hooks/Usefetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../components/ReduxTookit/CartReducer';

const Product = () => {

  const dispatch = useDispatch()

  const id = useParams().id;
  const [quantity, setQuantity] = useState(1);
 
  const { data, loading } = useFetch(`/products/${id}?populate=*`);
 

  const [selectedPic, setSelectedPic] = useState("Img");


  const handlequantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }

  }


  return (
    <div className='product'>
      {loading ? ("Loading...") : (


        <>
          <div className='product-left'>
            <div className='images-container'>
              
                <img src={data?.attributes?.Img?.data?.attributes?.url} alt='product-img' onClick={() => setSelectedPic("Img")} />
                <img src={data?.attributes?.Img2?.data?.attributes?.url} alt='product-img' onClick={() => setSelectedPic("Img2")} />
              </div>

              <div className='mainImg'>
              <img src={ data?.attributes[selectedPic].data?.attributes?.url} alt='mainImg' className='mainPic' />


              </div>
            </div>
         


          <div className='product-right'>
            <h1>{data?.attributes?.title}</h1>
            <span className='price'>${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className='quantity'>
              <button onClick={handlequantity}>-</button>
              {quantity}
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button className='add' onClick={() => (dispatch(addToCart({
              id: data.id,
              title: data.attributes.title,
              desc: data.attributes.desc,
              price: data.attributes.price,
              img: data.attributes.Img.data.attributes.url,
              quantity,
            }


            )))}>
              <BsCart4 />
              ADD TO CART
            </button>


            <div className='links'>
              <div className='item'>
                <AiOutlineHeart />
                ADD TO WISH LIST
              </div>

              <div className='item'>
                <FaBalanceScale />
                ADD TO COMPARE
              </div>

            </div>
            <div className='info'>
              <span>Vendor: polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />

            <div className='details'>
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>

        </>
      )

      }
    </div>

  )
}

export default Product