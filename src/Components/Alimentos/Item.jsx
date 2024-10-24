import { Link } from "react-router-dom"
import { useContext } from "react";
import { dataContext } from "../../context";

function Item({product}){
     const {buyProducts } = useContext(dataContext) 

    return(

        <div className="card" style={{height:'100%', width: '14rem'}}>
            <img src={product.img} className="card-img-top" alt="productImg" style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title  ">{product.nombre}</h5>
                <h3 className="card-text ">${(product.precio).toFixed(2)}</h3>
            </div>
            <div className="d-flex  justify-content-center align-items-center mb-3 gap-2">
                <Link to={`detail/${product.id}`} className="btn btn-secondary">Ver Detalle</Link>
                <button className="btn btn-dark" onClick={()=>buyProducts(product)}>Comprar</button>
            </div>
        </div>
    )
}
export default Item