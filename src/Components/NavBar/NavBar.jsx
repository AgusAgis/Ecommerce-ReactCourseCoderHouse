import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
function NavBar(){
    return(
        <>
        <nav className = 'navbar'>

            <div className="logo"> 
                <img src="/images/600.jpg" alt="LogoDelLocal" />
            </div>

            <ul className="navbar-links">
                <li className="navbar-item">
                    <a>Alimentos</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Snacks</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Accesorios</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Servicios</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Sucursales</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
        </>
    )
}
export default NavBar;