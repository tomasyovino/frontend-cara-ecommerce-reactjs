import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            const existingIndex = state.products.findIndex((item) => item._id === action.payload._id);

            if  (existingIndex >= 0 && state.products[existingIndex].color.imgUrl === action.payload.color.imgUrl && state.products[existingIndex].size === action.payload.size) {
                state.products[existingIndex].quantity += action.payload.quantity;
                toast.info("Producto del carrito incrementado", {
                    position: "bottom-left",
                });
            } else {
                state.quantity += 1;
                state.products.push(action.payload);
                toast.success("Producto añadido al carrito", {
                    position: "bottom-left",
                });
            }
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            state.total -= action.payload.price * action.payload.quantity;
            state.products.map((product) => {
                if(product._id === action.payload._id && product.color.imgUrl === action.payload.color.imgUrl && product.size === action.payload.size) {
                    const nextProducts = state.products.filter(
                        (item) => item._id !== product._id || item.color.imgUrl !== product.color.imgUrl || item.size !== product.size
                    );
                    state.products = nextProducts;
                    toast.error("Producto removido del carrito", {
                        position: "bottom-left",
                    });
                };
                return state;
            });
        },
        removeAllProducts: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
});

export const { addProduct, removeProduct, removeAllProducts } = cartSlice.actions;
export default cartSlice.reducer;