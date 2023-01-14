import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjhjNTA4MzM5NzI2NjAxODE4ODFlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzcyODg0NywiZXhwIjoxNjczOTg4MDQ3fQ.TGpaL9ulaPbcSWpMTu6pu17M50bjXBF3q6e91n82h0A";

export const publicRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

export const userRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`
    }
});