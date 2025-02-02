import React from "react";
import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/products",
    // timeout: 10000,
    // headers: {
    //     'X-Custom-Header': 'foobar'
    // }
})

export default instance;
