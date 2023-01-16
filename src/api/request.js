import axios from "axios";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

export const userRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`
    }
});