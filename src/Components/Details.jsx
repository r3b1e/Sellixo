import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../Context';
import {  Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
// import axios from "../axios" 

function Details(){
    const [products, setProducts] = useContext(ProductContext);
    const [product, setProduct] = useState(null)
    const { id } = useParams();
    console.log(id)
    // const singleproduct = async ()=>{
    //     try{
    //          const {data} = await axios.get(`/${id}`)
    //          setProduct(data)
    //         //  console.log(`/data/${id}`)
    //          console.log(data)
    //     }
    //     catch(error){
    //         console.error("Error fetching data", error);
    //     }
    // }
    useEffect(()=>{
        if(!product){
            setProduct(products.filter((p)=> p.id == id)[0])
        }
        // singleproduct()
    }, [])
    const navigate = useNavigate();

    const ProductDeleteHandler = (id) => {
        const FilteredProducts = products.filter((p)=> p.id !== id);
        setProducts(FilteredProducts);
        localStorage.setItem("products", JSON.stringify(FilteredProducts));
        toast.success("Product deleted Ssuccessfully!");
        navigate("/");
    }
    return product ?(
        <div className="h-[80%] w-[50%] m-auto flex justify-center items-center">
             <img className="h-[80%] w-[50%] object-cover rounded-xl" src = {`${product.image}`}></img>
             <div className="h-[80%] w-[50%] py-5 px-5 relative" >
                <h1 className="font-semibold text-4xl">{product.title}</h1>
                <h3 className=" font-midium opacity-60">Category:<span className="">{product.category}</span></h3>
                <div className='w-80 flex justify-between items-center m-5'>
                <h2 className="mx-5w-fit text-2xl font-semibold text-red-300">{product.price} $</h2>
                <h2 className="left-60 top-49 text-xl text-green-400 font-semibold">Rating: <span>{product.rating.rate}⭐</span></h2>
                </div>
                <h2 className="mx-5 mt-5 text-xs font-semibold opacity-50 ">Count:<span>{product.rating.count}</span></h2>
                <p className="mx-5 text-sm w-70 opacity-50">{product.description}</p>

                <button onClick={()=>ProductDeleteHandler(product.id)} className="border-2 border-red-300 rounded-sm text-red-300 px-5 mx-5 my-12">Delete</button>
                <Link to={`/edit/${product.id}`} className="border-2 border-green-500 rounded-sm text-green-500 px-3">Edit</Link>

             </div>
        </div>
    ) : (
        <h1 className="text-center w-full h-screen text-5xl pt-[20%]">Loading...</h1>
    )
}

export default Details;