import axios from 'axios';

let instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});