import {request} from './request.js'

export function getDetail(id){
  return request({
    // url: '/getDetail.php',
    url: '/detailInfo',
    params:{
      id,
    },
  });
}

export function getGoods(){
  return request({
    // url: '/homeGoods.php',
    url: '/homeGoods'
  });
}

