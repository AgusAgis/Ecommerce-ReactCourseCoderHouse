import Item from "./Item"
function ItemList({products}){    
    return(        
        <div id="container">
            {
                products.map((product)=> {
                    return <Item key={product.id} product={product} />
            })
        }
        </div>
    
    )
}
export default ItemList