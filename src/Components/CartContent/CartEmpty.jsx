const CartEmpty = () =>{
    return(
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '65vh' }}>
            <h2 className="text-center mb-4">Tu carrito está vacío</h2>
            <img src="/images/perro-triste.jpg" alt="perrito triste" style={{ width: '50%', maxWidth: '500px', height: 'auto' }} />
        </div>
    )
}
export default CartEmpty;