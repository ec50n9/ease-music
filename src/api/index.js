import axios from "axios";
import qs from "qs";

let http = axios.create({
    baseURL: '/api',
    withCredentials: true,
    headers:{
        'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
    }
});

// 请求拦截
http.interceptors.request.use(function (config){
    if(config.method==="post"){
        config.data = qs.stringify(config.data);
    }
    return config;
},function (error){
    return Promise.reject(error);
});

// 响应拦截器
http.interceptors.response.use(function (response){
    return response;
}, function (error){
    return Promise.reject(error);
});

export default http;