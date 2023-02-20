import { configureStore } from "@reduxjs/toolkit";
import { addToCart } from "./cartSlice";


export const store = configureStore({
    reducer:{
        cart :addToCart
    }


})