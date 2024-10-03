import CartWidget from "../CartWidget/CartWidget";
import { Link, Outlet } from "react-router-dom";

function NavBarBootstrap() {
  return (
    <>
      <nav className="navbar bg-dark  navbar-expand-lg">
        <div className="container-fluid">
            <Link
              className="navbar-brand"
              to={"/"}
              style={{ width: "120px", height: "120px", display: "flex", marginRight: '90px'  }}
            >
              <img src="/images/600.jpg" alt="LogoDelLocal" />
            </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to={"snacks"}
                  
                >
                  Snacks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"accesorios"}>
                  Accesorios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"servicios"}>
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"sucursales"}>
                  Sucursales
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Alimentos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"alimentos"}>
                      Alimentos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"alimentos/perros"}>
                      Perros
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"alimentos/gatos"}>
                      Gatos
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
      <Outlet />
    </>
  );
}
export default NavBarBootstrap;
