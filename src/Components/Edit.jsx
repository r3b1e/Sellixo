import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Edit() {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    const existingProduct = products.find((p) => p.id == id);
    if (existingProduct) {
      setProduct(existingProduct);
    }
  }, [id, products]);

  const ChangeHandler = (e) => {
    // console.log(e.target.name, e.target.value)
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      product.title.trim().length < 5 ||
      product.description.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.image.trim().length < 5
    ) {
      alert("Every input must have more than 4 characters");
      return;
    }

    const updatedProducts = products.map((p) =>
      p.id == id ? { ...p, ...product } : p
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    toast.success("Product updated successfully");
    navigate(-1);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-180 h-140 bg-zinc-100 rounded-lg shadow-lg py-5 px-5">
        <h1 className="text-center text-5xl font-semibold text-orange-300">
          Modify <span className="text-blue-300">Product</span>
        </h1>
        <form onSubmit={AddProductHandler}>
          <input
            className="focus:outline-orange-300 bg-zinc-200 rounded-md shadow-md h-12 w-full mt-10 p-2"
            type="text"
            onChange={ChangeHandler}
            value={product.image}
            name="image"
            placeholder="Image URL"
          />
          <input
            className="focus:outline-orange-300 bg-zinc-200 rounded-md shadow-md h-12 w-full mt-5 p-2"
            onChange={ChangeHandler}
            name="title"
            value={product.title}
            type="text"
            placeholder="Title"
          />
          <input
            className="focus:outline-orange-300 bg-zinc-200 rounded-md shadow-md h-12 w-[48%] mt-5 p-2 mr-6"
            onChange={ChangeHandler}
            name="category"
            value={product.category}
            type="text"
            placeholder="Category"
          />
          <input
            className="focus:outline-orange-300 bg-zinc-200 rounded-md shadow-md h-12 w-[48%] mt-5 p-2"
            onChange={ChangeHandler}
            name="price"
            value={product.price}
            type="number"
            placeholder="Price"
          />
          <textarea
            className="focus:outline-orange-300 bg-zinc-200 rounded-md shadow-md h-40 w-full mt-5 p-2"
            onChange={ChangeHandler}
            name="description"
            value={product.description}
            placeholder="Add Product Description..."
          />
          <button className="px-2 py-1 bg-blue-300 rounded-md text-zinc-100 w-full my-5">
            Edit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
