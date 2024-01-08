import axios from "axios";

//instead os wrirting the base url in every request
export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log(config)
    config.params = {api_key: process.env.REACT_APP_API_KEY}
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});