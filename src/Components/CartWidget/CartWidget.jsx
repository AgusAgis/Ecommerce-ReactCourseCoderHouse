import {FaShoppingCart} from "react-icons/fa";
import TotalItems from "./CartTotalItems";
import { useContext } from "react";
import { dataContext } from "../../context";
import './CartWidget.css'
function CartWidget(){
    const { cart } = useContext(dataContext)
    return(
        <div className="carrito">
            <FaShoppingCart size="30px"/>
            { cart.length > 0 ? <TotalItems/> : null  }
            
        </div>
        
    )
}

export default CartWidget;
