import { useContext } from "react";
import { dataContext } from "../../context";
import CartItemCounter from "./CartItemCounter";

const CartElements = ({editable=true}) => {
    const { cart, setCart } = useContext(dataContext)

    const deleteProduct = (id) => {

        const newCart = cart.filter((el) => el.id !== id)
        setCart(newCart)
    }
    return cart.map((product) => {
        return(
            <div className="container mt-3" key={product.id}>
                <div className="card mb-4 mx-auto" style={{ width: '70%' }} >
                    <div className="card-body d-flex align-items-center">
                        <img src={product.img} alt={product.nombre} style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px' }} />
                        <div className="flex-grow-1">
                            <h5 className="card-title">{product.nombre}</h5>
                        </div>
                        {editable ? (
                        <CartItemCounter product={product} /> // Mostrar controles si editable es true
                    ) : (
                        <span>{product.quantity}</span> // Mostrar solo la cantidad si no editable
                    )}
                        
                        <h3 className="card-text" style={{ marginLeft: 'auto',width: '125px', textAlign: 'right'  }}>${(product.precio * product.quantity).toFixed(2)}</h3>
                        {editable && ( <button className="btn btn-danger ms-4"> <i className="fas fa-trash-alt" onClick={() => deleteProduct(product.id)}></i></button>)}
                           
                    </div>
                </div>
            </div>
        )
    })
}

export default CartElements;