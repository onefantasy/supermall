import {request} from './request.js'

export function getBanner(){
  return request({
    url: '/imgBanner.php',
  });
}

export function getRecommend(){
  return request({
    url: '/homeRecommend.php',
  });
}
