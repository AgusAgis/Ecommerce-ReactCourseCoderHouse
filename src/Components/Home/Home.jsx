import './Home.css'

function ItemList({greeting}){
    return(
        <>
            <h1>{greeting}</h1>
            <div className="contenedor">
                <img src="images/dog-bg.jpg" alt="img-home" />
            </div> 
        </>
    )
}
export default ItemList;