import React, { useContext, useState } from "react";
import { ProductContext } from "../Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      description.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      image.trim().length < 5
    ) {
      alert("Every Input must have greater than 4 characters");
      return;
    }

    const newProduct = {
      id: nanoid(),
      title: title,
      price: price,
      description:description,
      category: category,
      image: image,
      rating: { rate: 3.9, count: 120 },
    };
    setProducts([...products, newProduct]);
    console.log(products);
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
    toast.success("Product added successfully")

    navigate("/");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-180 h-140 bg-zinc-100 rounded-lg shadow-lg py-5 px-5">
        <h1 className="text-center text-5xl font-semibold text-orange-300">
          Add <span className="text-blue-300">New Product</span>
        </h1>
        <form onSubmit={AddProductHandler} className="">
          <input
            className="focus:outline-orange-300 bg-zinc-200 rounded-md shadow-md h-12 w-full mt-10 p-2"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            placeholder="Image URL"
          />
          <input
            className="focus:outline-orange-300 bg-zinc-200 rounded-md shadow-md h-12 w-full mt-5 p-2"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Title"
          />
          <input
            className="focus:outline-orange-300 bg-zinc-200 rounded-md shadow-md h-12 w-[48%] mt-5 p-2 mr-6"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            type="text"
            placeholder="Category"
          />
          <input
            className="focus:outline-orange-300 bg-zinc-200 rounded-md shadow-md h-12 w-[48%] mt-5 p-2"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            placeholder="Price"
          />
          <textarea
            className="focus:outline-orange-300 bg-zinc-200 rounded-md shadow-md h-40 w-full mt-5 p-2"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            // type="text"
            placeholder="Add Product Discription...."
          />
          <button className="px-2 py-1 bg-blue-300 rounded-md text-zinc-100 w-full my-5 ">
            Create Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
