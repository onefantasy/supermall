<template>
  <div class="login-button-box">
    <button>{{buttonName}}</button>
  </div>
</template>

<script>
  export default {
    name: "loginButton",
    props:{
      buttonName:{
        type: String,
        default: '按钮'
      }
    },
    data() {
      return {};
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>

  .login-button-box{
    width: 100%;
    padding: 10px 30px;
    height: 70px;
  }
  button{
    width: 100%;
    height: 50px;
    background-color: var(--color-tint);
    outline: none;
    border: none;
    border-radius: 25px;
    color: #fff;
    font-size: 20px;
  }
  button:active{
    background-image: radial-gradient(var(--color-tint),#ff5777);
  }
</style>
