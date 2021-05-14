import axios from 'axios';
import {Toast} from 'vant';
const http=axios.create({
    baseURL:'https://m.maizuo.com',
    timeout:1000,
    headers:{'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16206279246894096819945473","bc":"430100"}'}
});
//axios拦截器
http.interceptors.request.use(function(config){
    //启动loading
    Toast.loading({
        message:"加载中...",
        forbidClick:true,
        overlay:true,
        loadingType:'spinner',
        duration:0
    });
    return config;
    },function(error){
        return Promise.reject(error);
    });
    
http.interceptors.response.use(function(response){
    Toast.clear();
    return response;
    },function(error){
    
    return Promise.reject(error);
    });
export default http;