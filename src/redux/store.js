import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart.redux";

export default configureStore({
    reducer: {
        cart: cartReducer,
    }
});