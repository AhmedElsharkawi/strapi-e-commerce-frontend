import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
  }

const CartSlice = createSlice({
    name: "Cart",
    initialState,
    
        reducers: {
            addToCart: (state, action) => {
              const newItem = state.products.find(item=>item.id === action.payload.id);
             if(newItem){
              newItem.quantity += action.payload.quantity;
             }else{
              state.products.push(action.payload);
             }
            },
            removeFromCart: (state, action) => {
              const itemId = action.payload;
              state.products = state.products.filter(item => item.id !== itemId);
            },
            resetCart: state => {
              state.products = [];
            },
    },

})
export const {addToCart , resetCart , removeFromCart} = CartSlice.actions;

export default CartSlice.reducer