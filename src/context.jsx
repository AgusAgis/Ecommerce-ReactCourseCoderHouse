import { createContext, useState, useEffect} from "react";
import getFoodProducts from "./data/Products";

export const dataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(()=>{
        getFoodProducts
        .then((res)=> {
            setData(res.data)
        });
    },[])

    const buyProducts = (product) =>{
        const productRepeated = cart.find((item)=> item.id === product.id)

        if(productRepeated){
            setCart(cart.map((item)=> item.id === product.id ? {...product, quantity: productRepeated.quantity + 1 } : item))
        }else{
            setCart([...cart,product ])
        }

     }
    return<dataContext.Provider value={{data, cart, setCart, buyProducts}}>{children}</dataContext.Provider>
}

export default DataProvider;