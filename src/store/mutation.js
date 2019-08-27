export default {
  addToCart(state, payload) {
    if (state.cart) {
      for (let item of state.cart) {
        if (item.id === payload.id) {
          item.count += payload.count;
          console.log(state);
          return;
        }
      }
    }
    state.cart.push(payload);
    console.log(state);
  }
}
