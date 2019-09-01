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
}
