export default {
  addToCart(store, payload) {
    return new Promise((resolve,reject)=>{
      resolve();
      if (store.state.cart) {
        for (let item of store.state.cart) {
          if (item.id === payload.id) {
            item.count += payload.count;
            return;
          }
        }
      }
      store.state.cart.push(payload);
    });
  },

  // 更改个人信息
  changePInfo(store,payload) {
    return new Promise((resolve,reject)=>{
      resolve();
      if(payload.str === 'login'){
        for(let key in payload.content){
          store.state.pInfo[key] = payload.content[key];
        }
      }else{
        for(let key in store.state.pInfo){
          store.state.pInfo[key] = store.state.defaultPInfo[key];
        }
      }
    });
  }
}
