import axios from "axios";

export const backendApi = axios.create({
    baseURL: 'http://localhost:4500/files'
});