
import "./FeaturedProduct.scss"
import Card from './Card'

import useFetch from './hooks/Usefetch'

const FeaturedProduct = ({type,desc}) => {



const {data, loading,error} = useFetch(`/products?populate=*&filters[type][$eq]=${type}`);

  


  return (
    <div className='featured-product'>
        <div className='wrapper-product'>
            <h1>{type} Products</h1>
            <div className='product-desc'>
                <p>{desc}</p>
                <div className='flex'> {error? "something went wrong" : ( loading ? "Loading...." : data?.map((item)=>{
            return(
                <Card item={item}  key={item.id}/>
            )
        }))}</div>
               

            </div>
        </div>
        
    </div>
  )
}

export default FeaturedProduct