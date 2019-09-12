<template>
  <div class="toast-box" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{
      /*isShow:{
        type: Boolean,
        default: false,
      },
      message:{
        type: String,
        default: ''
      },*/
    },
    data() {
      return {
        message: '',
        isShow: false,
      };
    },
    methods: {
      toastShow(message='默认文字',delay=1000){
        this.message = message;
        this.isShow = true;
        setTimeout(()=>{
          this.message = '';
          this.isShow = false;
        },delay);
      }
    },
    components: {},
  }
</script>

<style scoped>
  .toast-box{
    position: fixed;
    top: 50%;
    left: 50%;
    /*transform: translate(50% 50%);*/
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.6);
    border-radius: 5px;
    color: #fff;
    padding: 8px 10px;
    z-index: 1000;
    text-align: center;
  }
</style>
