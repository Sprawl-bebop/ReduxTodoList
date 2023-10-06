import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  products: [],
//   isLoading: false,
  myProducts: [],
//   errorMessage: null,
};


export const ProductSlice = createSlice({
    name: 'product',
    initialState:initialState,
    reducers: {
        // loading: (action)=>{
        // },
        loadProducts: (state, action)=>{
            ///
        },
        addToCart:(state, action)=>{
            state.myProducts.push(...action.payload);
        },
        removeFromCart:(state, action)=>{
            const removeItem = state.myProducts.filter((item:any) => item.id !== action.payload);
            state.myProducts = removeItem;    
        },
    }
});



export const { loadProducts, addToCart, removeFromCart } = ProductSlice.actions;

export default ProductSlice.reducer;
