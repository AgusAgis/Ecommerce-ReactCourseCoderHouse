import { createContext, useState, useEffect} from "react";
import { db } from "./main"
import { collection, getDocs } from 'firebase/firestore';


export const dataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(()=>{
       const fetchData = async ()=>{
            try {
                const productsCollection = collection(db,'products')
                const snapshot = await getDocs(productsCollection)
                const productsList = snapshot.docs.map(doc =>({
                    id: doc.id, 
                    ...doc.data()
                }))
                setData(productsList)
            } catch (error) {
                console.error("Error fetching products: ", error)
            }
       }
       fetchData();
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