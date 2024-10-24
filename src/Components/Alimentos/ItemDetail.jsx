import { useNavigate } from 'react-router-dom';
function ItemDetail({product}){

    const navigate = useNavigate();

    return(  
        <div className="d-flex justify-content-center align-items-center">
            <div className="card" style={{width: '60rem', marginTop:'2rem'}}>
                <div  className="row g-0">
                    <div className="col-md-4">
                        <img src={product.img} className="card-img-top h-100" alt="productImage"/> 
                    </div>
                    <div className="col-md-8">
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <h5 className="card-title">{product.nombre}</h5>
                            <p className="card-text">{product.descripcion}</p>
                            <h3 className="card-text ">${(product.precio)}.00</h3>
                            <button onClick={() => navigate(-1)} className="btn btn-dark">Atras</button>
                        </div>
                    </div>
                </div>
                
            </div>      
        </div>
    )
}
export default ItemDetail;