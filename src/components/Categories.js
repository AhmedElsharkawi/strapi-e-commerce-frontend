import React from 'react'
import img from "../assets/slider3.jpeg"
import img1 from "../assets/pexels-photo-16934404.png"
import img2 from "../assets/free-photo-of-confident-young-woman-in-a-hat-sitting-on-a-bench (1).jpeg"
import img3 from "../assets/shoe.jpeg"
import img4 from "../assets/children.jpeg"
import img5 from "../assets/accessories3.jpeg"
import "./Categories.scss"
import { Link } from 'react-router-dom'
const Categories = () => {
    return (
        <div className='categories'>
            <div className='col'>
                <div className='row'>
                    <img src={img} alt='' />
                    <button>
                        <Link  to="/products/3" >Men</Link>
                    </button>
                </div>
                <div className='row'>
                    <img src={img1} alt='' />
                    <button>
                        <Link  to="/products/5" >Women</Link>
                    </button>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <img src={img4} alt='' />
                    <button>
                        <Link  to="/products/2" >Kids</Link>
                    </button>
                </div>
            </div>

            <div className='col col-l'>

                <div className='row'>

                    <div className='col'>
                      <div className='row'>
                          <img src={img3} alt='' />
                          <button>
                              <Link  to="/products/6" >Shoes</Link>
                          </button>
                      </div>
                    </div>

                    <div className='col'>
                      <div className='row'>
                          <img src={img2} alt='' />
                          <button>
                              <Link  to="/products/4" >New Season</Link>
                          </button>
                        
                      </div>
                    </div>
                    
                </div>

                <div className='row'>
                    <img src={img5} alt='' />
                    <button>
                        <Link className='link' to="/products/1" >Accessories</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories