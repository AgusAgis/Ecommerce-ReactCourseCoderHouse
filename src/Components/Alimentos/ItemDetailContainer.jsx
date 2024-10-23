import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useContext } from "react";
import { dataContext } from "../../context";

function ItemDetailContainer(){
    const { data } = useContext(dataContext)
    const [product, setProduct] = useState([]);
    const { idProduct } = useParams();   
      
    useEffect(()=>{
        if(data.length>0){
            if(idProduct){
                const newProduct = data.find((product) => product.id === Number(idProduct));
                setProduct(newProduct);          
            }else{
                setProduct(data)
            }
        } 
    },[idProduct])
    
   
    return(
        <ItemDetail key={product.id} product={product} />
    )
}
export default ItemDetailContainer