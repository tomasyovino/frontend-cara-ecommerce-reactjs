import { createSlice } from "@reduxjs/toolkit";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: user ? user : null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.error = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutSuccess: (state) => {
            localStorage.removeItem('user');
            state.currentUser = null;
        },
        logoutFailure: (state) => {
            state.error = true;
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logoutSuccess, logoutFailure } = userSlice.actions;
export default userSlice.reducer;