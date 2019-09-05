import axios from 'axios'

export function request(config){
  // 1. 创建axios实例
  const instance = axios.create({
    // 设置全局配置
    baseURL: 'http://localhost:8082',
  });

  // 2. 设置请求拦截器
  instance.interceptors.request.use(config=>{
    // 拦截之后记得返回，不然无法进行下一步
    return config;
  },error => {
    console.log(error);
  });
  instance.interceptors.response.use(res =>{
    // 拦截之后记得需要返回
    // 这里只返回res的data
    return typeof(res.data) === 'string' ? JSON.parse(res.data):res.data;
  },err =>{

  });

  // 3. 发送真正的请求
  // 4. 并且因为返回值是promise，所以可以使用在调用的地方是使用then和catch
  return instance(config);
}
