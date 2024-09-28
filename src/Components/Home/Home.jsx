import './ItemList.css'
function ItemList({greeting}){
    return(
        <>
            <h1>{greeting}</h1>
            <div className="item-list">
            </div>
 
        </>
    )
}
export default ItemList;