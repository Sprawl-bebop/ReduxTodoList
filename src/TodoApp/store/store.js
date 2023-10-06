import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlicer";

const store = configureStore({
    reducer: {
        todo : TodoSlice
    },
});

export default store;