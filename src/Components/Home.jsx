import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Details from "./Details";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../Context";
import { use } from "react";
import axios from "../axios"

function Home(){
    const [products] = useContext(ProductContext);
    // localStorage.setItem("products", JSON.stringify(FilteredProducts));
    const { search } = useLocation();
    console.log(products);
    // console.log(search);
    const category = decodeURIComponent(search.split("=")[1]);
    // console.log(category)
    const [cate, setCate] = useState(null);
    const getproductscategory = async () => {
      try{
          const {data} = await axios.get(`/category/${category}`)
          setCate(data);
          console.log(data);
      }
      catch(err){
        console.error("Error fetching products:", err);
      }
    }
    useEffect(() => {
      
      
      if (!cate || category == 'undefined') setCate(products)
        
        if (category != "undefined") {
        // getproductscategory()
        console.log(cate);
        setCate(products.filter((p)=>p.category == category));
        
       
      }
    }, [category, products])
    return products ? (
        <>
         <Nav />
        <div className="h-screen w-full py-18 mx-8 flex flex-wrap justify-start gap-5 overflow-x-hidden overflow-y-auto">
      {cate && cate.map((value, index) => (
        <Link key={index} to={`./Details/${value.id}`} className="hover:scale-110 shadow-sm duration-150 ease-in w-52 h-52 flex flex-col justify-center items-center rounded-md  overflow-hidden">
        <img className="w-[80%] h-[80%] fit-cover" src={`${value.image}`}></img>
        <h2 className="hover:text-blue-300 text-xs font-semibold text-center px-3">{value.title}</h2>
      </Link>
      ))}
      
    </div>
        </>
    ) :(<h1 className="text-center w-full h-screen text-5xl pt-[20%]">Loading...</h1>)
}
export default Home;