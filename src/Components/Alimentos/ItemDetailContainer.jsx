import { useState, useEffect } from "react";
import getFoodProducts from "../../data/Products";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer(){

    const [product, setProduct] = useState([]);
   
    const { idProduct } = useParams();
    
      
    useEffect(()=>{
        getFoodProducts
        .then((response)=>{
            if(idProduct){
                const newProduct = response.find((product) => product.id === Number(idProduct));
                
                setProduct(newProduct);
          
            }
        })
        .catch(error=>console.log(error))
    },[idProduct])
    
   
    return(
        <ItemDetail key={product.id} product={product} />
    )
}
export default ItemDetailContainer