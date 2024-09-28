import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/Alimentos/ItemListContainer"
import Servicios from "./Components/Servicios/Servicios"
import Sucursales from "./Components/Sucursales/Sucursales"
import Accesorios from "./Components/Accesorios/Accesorios"
import Snacks from "./Components/Snacks/Snacks"
import ItemDetailContainer from "./Components/Alimentos/ItemDetailContainer"

function App() {
  
  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home greeting={"Todo en un solo lugar"} />} />
          <Route path="alimentos" element={<ItemListContainer />} /> 
          <Route path="alimentos/:idCategory" element={<ItemListContainer />} />           
          <Route path= "alimentos/detail/:idProduct" element={<ItemDetailContainer/>}/>
          <Route path="snacks" element={<Snacks />} />  
          <Route path="accesorios" element={<Accesorios />} />  
          <Route path="servicios" element={<Servicios />} />  
          <Route path="sucursales" element={<Sucursales />} />  
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
