import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { useContext } from "react";
import { dataContext } from "../../context";
import CartEmpty from "./CartEmpty";
import FinishButton from "./CartTotalFinishButton"

const CartContainer = () =>{
    const { cart } = useContext(dataContext)

    return cart.length > 0 ? (
        <>
        <CartElements />
            <div className="container mt-2">
            <div
              className="card mb-4 mx-auto p-3 d-flex flex-row justify-content-between align-items-center"
              style={{ width: "70%" }}
            >
                    <CartTotal />
                    <div className="d-flex justify-content-end">
                        <FinishButton />
                    </div>
                </div>
            </div>
        </>
    ) : (
       <CartEmpty/>
    )
}
export default CartContainer;