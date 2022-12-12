import axios from "axios";
import  Router from "next/router";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
    baseURL: " http://localhost:8080",
});

export function setToken(token: string) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export function removeToken() {
    api.defaults.headers.common["Authorization"] = undefined;
}

api.interceptors.response.use(
    (response) => {
        return response;
    }, (error) => {
        if (error.response.status === 403) {
            removeToken();
            Router.replace({
                pathname: "/auth/signin",
            });
        }
        return Promise.reject(error);
    });


export default api;