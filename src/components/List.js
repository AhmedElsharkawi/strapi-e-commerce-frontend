
import Card from "./Card"
import "./List.scss"
import useFetch from './hooks/Usefetch'


const List = ({selectedSubCategories , maxprice , catId , sort}) => {


   

    const { data, loading } = useFetch(`/products?populate=*&filters[categories][id][$eq]=${catId}${selectedSubCategories.map(item => `&filters[sub_categories][id][$eq]=${item}`).join('')}&filters[price][$lte]=${maxprice}&sort=price:${sort || 'asc'}`);


   
    
  return (
    <div className='list'>{loading ? "loading..." : data?.map((item)=>{
        return(
            <Card  item={item} key={item.id} />
        )
    })} </div>
  )
}

export default List