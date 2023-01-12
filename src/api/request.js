import axios from "axios";

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjhjNTA4MzM5NzI2NjAxODE4ODFlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzU0NTg3NywiZXhwIjoxNjczODA1MDc3fQ.Cmu7Dj6mBH2aRyyyxwYEqAad6rJBMtBLouZCako8RL4";

export const publicRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

// export const userRequest = axios.create({
//     baseURL: process.env.REACT_APP_BASE_URL,
//     header: {
//         token: `Bearer ${TOKEN}`
//     }
// });