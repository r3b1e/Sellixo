// import axios from 'axios';
import axios from './axios';

import React, { createContext, useEffect, useState } from "react";


export const ProductContext = createContext();
function Context(props){
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || useEffect(()=>{
        getproducts();
    }, []) );
    const getproducts = async () => {
        try {
            const { data } = await axios(); // Call directly, no need to append a path
            setProducts(data);
            console.log(data);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };
    
    
    console.log(products);
    
    

    return (
        <ProductContext.Provider value={[products, setProducts]} >
        {props.children}
        </ProductContext.Provider>
    )
}

export default Context;