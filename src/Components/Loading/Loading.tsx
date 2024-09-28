import React, { useEffect } from "react";
import { useState } from "react"

function Loading(){

    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsLoading(false);
        },3000)
        return()=>clearTimeout(timer);
    },[isLoading])

    return(
        <div>
            <h1>{ isLoading ? "Loading..." : "Already Loaded"}</h1>
            {isLoading && <div className="spinner"></div>}
            <button onClick={()=>setIsLoading(true)}>
                {isLoading ? "Cargar": "Reload"}
            </button>
        </div>
    )
}
export default Loading;