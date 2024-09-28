import getFoodProducts from "../../data/Products";
import "./ItemListContainer.css"
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer(){

     const [ products, setProducts ] = useState([]);
     const {idCategory} = useParams();

     
     useEffect(()=>{
        getFoodProducts
        .then((response)=>{
            if(idCategory){
                const newProducts = response.filter((product) => product.categoria === idCategory)
                setProducts(newProducts);
            }else{
                setProducts(response)
            }
        })
        .catch(error => console.log(error))
     },[idCategory])

    return(
        <div>
            <ItemList products = {products}/>
        </div>
        
    )
}
export default ItemListContainer