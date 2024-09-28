
function ItemDetail({product}){

    return(        
        <div className="card">
            <h2>{product.nombre}</h2>
            <h3>${product.precio}</h3>
            <h3>${product.categoria}</h3>
            <h4>{product.descripcion}</h4>
        </div>

    )
}
export default ItemDetail;