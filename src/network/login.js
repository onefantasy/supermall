import { requestPost,request } from './request'

export function proving(user,password){
  return requestPost("/proving",{
    user,
    password
  });
}

export function getPInfo(id){
  return request({
    url: '/pInfo',
    params:{
      id,
    }
  });
}
