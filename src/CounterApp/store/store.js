import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export default store = configureStore({
    reducer: {
        counter : counterSlice
    },
});