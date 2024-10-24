import { useContext } from "react";
import { dataContext } from "../../context";

const CartTotal = () =>{
    const { cart } = useContext(dataContext)

    const total = cart.reduce((acc,el) => acc + el.precio * el.quantity, 0)

    return(
        <div className="container mt-2">
            <h3 className="card mb-4 mx-auto" style={{ width: '70%' }}>Total a pagar: $ {total}</h3>
        </div>
    )
}
export default CartTotal;