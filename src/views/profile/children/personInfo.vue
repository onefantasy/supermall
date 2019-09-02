<template>
  <div class="personInfo-box">
    <div>
      <img v-if="pInfo.img" :src="pInfo.img" alt="">
      <img v-else src="~assets/img/category/touxiang.jpg" alt="">
    </div>
    <div>
      <div v-if="pInfo.name">登录/注册</div>
      <div v-else>登录/注册</div>
      <div v-if="pInfo.phone">暂无绑定手机号</div>
      <div v-else>暂无绑定手机号</div>
    </div>
    <div> > </div>
  </div>
</template>

<script>
  export default {
    name: "personInfo",
    props:{},
    data() {
      return {};
    },
    computed:{
      pInfo(){
        return this.$store.state.pInfo;
      }
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>

  .personInfo-box{
    height: 120px;
    display: flex;
    padding: 10px;
    background-color: var(--color-tint);
  }

  .personInfo-box>div:nth-child(1){
    width: 100px;
    height: 100px;
    padding: 10px;
  }
  .personInfo-box>div:nth-child(1) img{
    width: 80px;
    border-radius: 50%;
  }
  .personInfo-box>div:nth-child(2){
    flex: 1;
    padding-left: 10px;
  }
  .personInfo-box>div:nth-child(2) div{
    height: 50px;
    color: #fff;
  }
  .personInfo-box>div:nth-child(2)>div:nth-child(1){
    font-size: 25px;
    font-weight: 500;
    line-height: 80px;
  }
  .personInfo-box>div:nth-child(2)>div:nth-child(2){
    line-height: 50px;
  }
  .personInfo-box>div:nth-child(3){
    width: 30px;
    line-height: 100px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }
</style>
