import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import NavBarBootstrap from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/Alimentos/ItemListContainer"
import Servicios from "./Components/Servicios/Servicios"
import Sucursales from "./Components/Sucursales/Sucursales"
import Accesorios from "./Components/Accesorios/Accesorios"
import Snacks from "./Components/Snacks/Snacks"
import ItemDetail from "./Components/Alimentos/ItemDetail"
import ThemeContext, {cartContext} from "./context"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css' 


function App() {
  const [ cart, setCart ] = useState(cartContext);

  return (
    <>
    <BrowserRouter>
    <ThemeContext.Provider value={cart}>
        <NavBarBootstrap/>
          <Routes>
            <Route path="/" element={<Home greeting={"Todo en un solo lugar"} />} />
            <Route path="alimentos" element={<ItemListContainer />} /> 
            <Route path="alimentos/:idCategory" element={<ItemListContainer />} />    
            <Route path="alimentos/:idCategory/detail/:idProduct" element={<ItemDetail/>} />          
            <Route path= "alimentos/detail/:idProduct" element={<ItemDetail/>}/>
            <Route path="snacks" element={<Snacks />} />  
            <Route path="accesorios" element={<Accesorios />} />  
            <Route path="servicios" element={<Servicios />} />  
            <Route path="sucursales" element={<Sucursales />} />  
          </Routes>
    </ThemeContext.Provider>
    </BrowserRouter>
    </>
    
  )
}

export default App
