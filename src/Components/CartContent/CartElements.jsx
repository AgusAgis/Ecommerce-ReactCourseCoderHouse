import { useContext } from "react";
import { dataContext } from "../../context";
import CartItemCounter from "./CartItemCounter";

const CartElements = () => {
    const { cart } = useContext(dataContext)
    return cart.map((product) => {
        return(
            <div className="container mt-3">
                <div className="card mb-4 mx-auto" style={{ width: '70%' }} key={product.id}>
                    <div className="card-body d-flex align-items-center">
                        <img src={product.img} alt={product.nombre} style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px' }} />
                        <div className="flex-grow-1">
                            <h5 className="card-title">{product.nombre}</h5>
                        </div>
                        <CartItemCounter product={product} />
                        <h3 className="card-text" style={{ marginLeft: 'auto',width: '125px', textAlign: 'right'  }}>${product.precio.toFixed(2)}</h3>
                    </div>
                </div>
            </div>
        )
    })
}

export default CartElements;