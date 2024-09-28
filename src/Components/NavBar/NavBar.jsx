import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import { Link, Outlet } from "react-router-dom"
function NavBar(){
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return(
        <>
        <nav className = 'navbar'>

            <div> 
                <Link  className="logo" to={"/"}>
                    <img src="/images/600.jpg" alt="LogoDelLocal" />
                </Link>
            </div>

            <ul className="navbar-links">
                <li className="navbar-item">
                    <Link to="alimentos" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Alimentos</Link>
                    <button onClick={toggleDropdown} className="dropdown-button">
                            ▼
                    </button>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li >
                                <Link to={"alimentos/perros"}onClick={() => setDropdownOpen(false)}>Perros</Link>
                            </li>
                            <li >
                                <Link to={"alimentos/gatos"}onClick={() => setDropdownOpen(false)}>Gatos</Link>
                            </li>
                        </ul>
                    )}
                    
                    
                </li>
                <li className="navbar-item">
                    <Link to={"snacks"}>Snacks</Link>
                </li>
                <li className="navbar-item">
                    <Link to={"accesorios"}>Accesorios</Link>
                </li>
                <li className="navbar-item">
                    <Link to={"servicios"}>Servicios</Link>
                </li>
                <li className="navbar-item">
                    <Link to={"sucursales"}>Sucursales</Link>
                </li>
            </ul>
            <CartWidget/>
        </nav>
        <Outlet/>
        </>
    )
}
export default NavBar;