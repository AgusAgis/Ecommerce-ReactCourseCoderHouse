import { useContext } from "react";
import { dataContext } from "../../context";

const CartItemCounter = ({product}) => {
    const { cart, setCart, buyProducts } = useContext(dataContext)
    
    const decrease = () =>{
        const productFound = cart.find((item) => item.id === product.id)

        productFound.quantity !== 1 &&
        setCart(cart.map((item)=>(item.id === product.id ? 
            {...product, quantity: productFound.quantity -1}: item)))

    }

    return(
        <div className="d-flex align-items-center">
            <button className="btn btn-outline-primary me-2" onClick={decrease} style={{ width: '40px', height: '40px' }}>-</button>
            <p className="m-0" style={{ width: '40px', textAlign: 'center' }}>{product.quantity}</p>
            <button className="btn btn-outline-primary ms-2" onClick={() => buyProducts(product)} style={{ width: '40px', height: '40px' }}>+</button>
        </div>
    )
}
export default CartItemCounter;