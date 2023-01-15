import { publicRequest } from "../api/request";
import { removeAllProducts } from "./cart.redux";
import { loginFailure, loginStart, loginSuccess, logoutSuccess, logoutFailure } from "./user.redux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    };
};

export const logout = async (dispatch) => {
    try {
        dispatch(removeAllProducts());
        dispatch(logoutSuccess());
    } catch (err) {
        dispatch(logoutFailure());
    };
};