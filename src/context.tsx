import React,{ createContext, useState, useEffect} from "react";
import getFoodProducts from "./data/Products";

export const dataContext = createContext({data:[]});

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        getFoodProducts
        .then((res)=> setData(res.data));
    },[])
    return<dataContext.Provider value={{data}}>{children}</dataContext.Provider>
}

export default DataProvider;