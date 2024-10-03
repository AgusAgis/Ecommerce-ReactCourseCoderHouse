import getFoodProducts from "../../data/Products";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from '../Loading/Loading';
function ItemListContainer(){

     const [ products, setProducts ] = useState([]);
     const [loading, setLoading] = useState(true);
     const {idCategory} = useParams();

     
     useEffect(()=>{
        getFoodProducts
        .then((response)=>{
            if(idCategory){
                const newProducts = response.filter((product) => product.categoria === idCategory)
                setProducts(newProducts);
                setLoading(false)
            }else{
                setProducts(response)
                setLoading(false)
            }
        })
        .catch(error => console.log(error))
     },[idCategory])

    return(
        <div>
            {loading ? 
            <Loading/>
            : <ItemList products = {products}/> }
        </div>
        
    )
}
export default ItemListContainer