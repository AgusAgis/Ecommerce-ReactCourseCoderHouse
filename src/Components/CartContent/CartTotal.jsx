import { useContext } from "react";
import { dataContext } from "../../context";


const CartTotal = () =>{
    const { cart } = useContext(dataContext)

    const total = cart.reduce((acc,el) => acc + el.precio * el.quantity, 0)

    return(
        <div className="container mt-2">
                    <h3 className="mb-0" style={{ flex: "1", textAlign: "left" }}>Total a pagar:</h3>
                    <span>$ {total.toFixed(2)}</span>
                   
        </div>
   )
}
export default CartTotal;