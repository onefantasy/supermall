import Toast from './Toast'

const obj = {};

// install自带vue参数，不用导入
obj.install = function(Vue){
  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast);

  // 2. new的方式，可以根据组件构造器，创建出一个组件对象
  const toast = new toastContrustor();

  // 3. 将组件对象手动挂载到某一个对象上
  toast.$mount(document.createElement('div'));

  // 4. toast.$el对应的就是div
  document.body.append(toast.$el);

  Vue.prototype.$toast = toast;
};

export default obj;
