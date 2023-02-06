import { publicRequest } from "../api/request";
import { removeProduct, removeAllProducts } from "./cart.redux";
import { loginFailure, loginStart, loginSuccess, logoutSuccess, logoutFailure } from "./user.redux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        if(res.data) {
            localStorage.setItem('user', JSON.stringify(res.data));
            dispatch(loginSuccess(res.data));
        };
    } catch (err) {
        dispatch(loginFailure());
    };
};

export const logout = (dispatch) => {
    try {
        dispatch(removeAllProducts());
        dispatch(logoutSuccess());
    } catch (err) {
        dispatch(logoutFailure());
    };
};

export const buyHandler = (dispatch) => {
    try {
        dispatch(removeAllProducts());
    } catch (err) {
        console.log(err);
    };
};

export const removeProductFromCart = (dispatch, product) => {
    try {
        dispatch(removeProduct(product));
    } catch (err) {
        console.log(err);
    };
};