<template>
  <div class="login-input-box">
    <span>{{entry}}:</span>
    <input :type="inputType" :placeholder="tip" v-model="inputData"/>
  </div>
</template>

<script>
  export default {
    name: "loginInput",
    props:{
      entry:{
        type: String,
        default: '',
      },
      tip:{
        type: String,
        default: '',
      },
      inputType:{
        type: String,
        default: 'text',
      }
    },
    data() {
      return {
        inputData: null
      };
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>

  .login-input-box{
    width: 100%;
    display: flex;
    padding: 10px 30px;
    height: 50px;
    line-height: 30px;
  }
  .login-input-box span{
    width: 50px;
    font-size: 20px;
  }
  .login-input-box input{
    flex: 1;
    padding-left: 10px;
    border: 2px solid var(--color-tint);
    outline: none;
    border-radius: 5px;
    font-size: 15px;
  }

</style>
