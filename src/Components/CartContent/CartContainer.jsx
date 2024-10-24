import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { useContext } from "react";
import { dataContext } from "../../context";
import CartEmpty from "./CartEmpty";

const CartContainer = () =>{
    const { cart } = useContext(dataContext)

    return cart.length > 0 ? (
        <>
        <CartElements/>
        <CartTotal/>
        </>
    ) : (
       <CartEmpty/>
    )
}
export default CartContainer;