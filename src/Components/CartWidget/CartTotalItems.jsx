import { useContext } from "react";
import { dataContext } from "../../context";


const TotalItems = () =>{
    const { cart } = useContext(dataContext)
    const itemsQuantity = cart.reduce((acc, el) => acc + el.quantity, 0)
    
    return(
        <span className="badge">{itemsQuantity}</span> 
    )
}
export default TotalItems;