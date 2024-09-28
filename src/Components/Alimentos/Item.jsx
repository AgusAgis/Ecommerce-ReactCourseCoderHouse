import { Link } from "react-router-dom"

function Item({product}){
    return(
        <div className="card">
            <h2>{product.nombre}</h2>
            <h3>${product.precio}</h3>
            <Link to={`detail/${product.id}`}>Ver detalle</Link>
        </div>
    )
}
export default Item