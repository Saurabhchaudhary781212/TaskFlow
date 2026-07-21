import axios from "axios";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
console.log("API URL:",
    import.meta.env.VITE_API_URL);
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://taskflow-97os.onrender.com/api",

});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;