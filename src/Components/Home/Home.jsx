import './ItemList.css'
import Loading from '../Loading/Loading';
function ItemList({greeting}){
    return(
        <>
            <h1>{greeting}</h1>
            <div className="item-list">
            </div>
            <Loading/>
 
        </>
    )
}
export default ItemList;