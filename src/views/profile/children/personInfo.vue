<template>
  <div class="personInfo-box">
    <div>
      <img v-if="pInfoData.img && pInfoData.isLogin" :src="pInfoData.img" alt="">
      <img v-else src="~assets/img/profile/touxiang.jpg" alt="">
    </div>
    <div>
      <div v-if="pInfoData.isLogin" @click="login()">{{pInfoData.name || pInfoData.id}}</div>
      <div v-else @click="login()">登录/注册</div>
      <div v-if="pInfoData.isLogin && pInfoData.phone">{{pInfoData.phone}}</div>
      <div v-else>暂无绑定手机号</div>
    </div>
    <div @click="goInfoPage()"> > </div>
  </div>
</template>

<script>
  export default {
    name: "personInfo",
    props:{
      pInfoData:{
        type: Object,
        default(){
          return {};
        }
      },
    },
    data() {
      return {};
    },
    computed:{

    },
    methods: {
      // 点击进入登录页面
      login(){
        this.$router.push('/login');
      },

      // 点击跳转到个人信息页面
      goInfoPage(){
        // 如果没有登录，则该按键不会有任何效果
        if(!this.pInfoData.isLogin){
          this.$toast.toastShow('请先登录!');
          return;
        }
        // 若果已经登录，进行跳转
        this.$router.push('/pDetail');
      },
    },
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
