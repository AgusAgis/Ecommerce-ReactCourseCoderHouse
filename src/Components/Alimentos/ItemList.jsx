import Item from "./Item"
function ItemList({products}){    
    return(        
        <div className="container">
            <div className="row justify-content-center">
                {products.map((product) =>(
                    <div className="col-2 mx-4 my-2" key={product.id}>
                        <Item product={product} />
                    </div>
                    
                ))}
            </div>            
                
        </div>
    
    )
}
export default ItemList