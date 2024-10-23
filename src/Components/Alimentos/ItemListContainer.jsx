import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from '../Loading/Loading';
import { useContext } from "react";
import { dataContext } from "../../context";


function ItemListContainer(){
    const { data } = useContext(dataContext)
    const [ products, setProducts ] = useState([]);
    const [loading, setLoading] = useState(true);
    const {idCategory} = useParams();
    
     useEffect(()=>{
        if(data.length > 0){
            if(idCategory){
                const newProducts = data.filter((product) => product.categoria === idCategory)
                setProducts(newProducts)               
            }else{
                setProducts(data)               
            }
            setLoading(false)
        }
     },[data, idCategory])

     useEffect(()=>{
        if(data.length===0){
            setLoading(true)
        }
     },[data])

    return(
        <div>
            {loading ? 
            <Loading/>
            : <ItemList products = {products}/> }
        </div>
        
    )
}
export default ItemListContainer