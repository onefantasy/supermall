import {request} from './request.js'

export function getBanner(){
  return request({
    // baseURL: "http://localhost:8082",
    url: '/homeImgBanner'
  });
}

export function getRecommend(){
  return request({
    // url: '/homeRecommend.php',
    url: '/homeRecommend'
  });
}

export function getGoods(){
  return request({
    // url: '/homeGoods.php',
    url: '/homeGoods'
  });
}
