import {request} from './request.js'

export function getCategoryData(){
  return request({
    baseURL: "http://localhost:8082",
    url: '/categoryData'
  });
}
