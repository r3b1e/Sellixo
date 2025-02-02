import React, { useContext } from "react";
import { ProductContext } from "../Context";
import { Link } from "react-router-dom";
 function Nav(){
  const [products] = useContext(ProductContext)

  let distinct_category = 
  products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)]
  const color = ()=>{
    return `rgba(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.4)`
  }
  console.log(color())
    return (
        <div className = "h-full min-w-56 bg-zinc-100 p-6.5">
      <Link to={`/create`} className="px-5 py-2 border-2 border-blue-300 text-blue-300 mb-3">Add New Product</Link>
      <hr className="text-blue-200 mt-8"></hr>
      <h3 className="mt-2 text-xl font-semiblod">Category Filter</h3>

      {distinct_category.map((value, items) => {
        return <Link key={items} to={`/?category=${value}`} className="my-3 text-sm block">
        <div style={{backgroundColor: color()}} className="h-3 w-3 rounded-full inline-block mx-2"></div>
        {value}
        </Link>
      })}
      
        {/* <div className="my-3 text-sm">
        <div className="h-3 w-3 bg-red-200 rounded-full inline-block mx-2"></div>
        Cart1
        </div>
        <div className="my-3 text-sm">
        <div className="h-3 w-3 bg-green-200 rounded-full inline-block mx-2"></div>
        Cart1
        </div> */}
    </div>
    )
 }
 export default Nav;