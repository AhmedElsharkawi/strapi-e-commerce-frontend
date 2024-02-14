import React, {  useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List';
import "./Products.scss"
import catimg from "../../assets/catimg.jpeg"

import useFetch from '../../components/hooks/Usefetch';

const Products = () => {

    

    const catId = parseInt(useParams().id);
    const [maxprice, setMaxprice]= useState(1000);
    const [sort, setSort]= useState(null);
    const {data , loading}= useFetch(`/sub-categories?populate=categories&categories.Id=${catId}`);


     
    const [selectedSubCategories, setSelectedSubCategories] = useState([])
    const handleChange = (e)=>{
      const value = e.target.value;
      const isChecked = e.target.checked;
      setSelectedSubCategories(isChecked ? [...selectedSubCategories , value] : selectedSubCategories.filter((item) => item !== value) );
    }


    
   
  return (
    <div className='products'>
        <div className='left'>
            <div className='filter-item'>
                <h2>Product Categories</h2>
                {loading? "Loading..." : data?.map((item)=>(
                    <div className='input-item' key={item.id}>
                    <input type='checkbox' id={item.id} value={item.id}  onChange={handleChange}/>
                    <label htmlFor={item.id} >{item.attributes.title}</label>
                    </div>
                ))}
              
           
            </div>
            <div className='filter-item'>
                <h2>Filter by Price</h2>
                <div className='input-item'>
                    <span>0</span>
<input className='inputRange' type='Range' min={0} max={1000} onChange={(e)=>setMaxprice(e.target.value)} />
                    <span>{maxprice}</span>
                </div>
            </div>
            <div className='filter-item'>
                <h2>Sort by</h2>
                <div className='input-item'>
                    <input type='radio'   id='asc' value= "asc"  name='price'  onChange={(e)=>{setSort("asc"); }} />
                    <label htmlFor='asc' >price (Lowest Price)</label>
                </div>
                <div className='input-item'>
                    <input type='radio' id='desc' value= "desc" name='price' onChange={(e)=>{setSort("desc")}} />
                    <label htmlFor='desc' >price (Highest Price)</label>
                </div>
            </div>
             </div>

             <div className='right'>
                <img className='catImg' src={catimg} alt='cat-img'  />

                <List catId={catId}  maxprice={maxprice} sort={sort} selectedSubCategories={selectedSubCategories} />
             </div>
    </div>
  )
}

export default Products