import axios from "axios"

// For backend API calls
export const axiosInstance = axios.create({
    baseURL: "/api",
    withCredentials: true,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
});

export default axiosInstance;