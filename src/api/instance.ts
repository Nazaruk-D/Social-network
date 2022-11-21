import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "1909a996-577e-417f-8ed9-b0307898e20c"
    }
})