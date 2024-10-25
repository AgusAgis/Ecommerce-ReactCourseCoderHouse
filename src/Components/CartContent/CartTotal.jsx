import { useContext } from "react";
import { dataContext } from "../../context";

const CartTotal = () =>{
    const { cart } = useContext(dataContext)

    const total = cart.reduce((acc,el) => acc + el.precio * el.quantity, 0)

    return(
        <div className="container mt-2">
            <div
                className="card mb-4 mx-auto p-3 d-flex flex-row justify-content-between align-items-center"
                style={{ width: "70%" }}
            >
                    <h3 className="mb-0" style={{ flex: "1", textAlign: "left" }}>
                        Total a pagar: $ {total.toFixed(2)}
                    </h3>
                    <button className="btn btn-warning ms-2">Finalizar pedido</button>
            </div>
    </div>
   )
}
export default CartTotal;