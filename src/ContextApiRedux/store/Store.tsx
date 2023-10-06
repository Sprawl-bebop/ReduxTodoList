import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

const Store = configureStore({
    reducer: {
        product: ProductSlice
    },
});

export default Store;