<template>
  <div class="login-box">
    <NavBar class="navbar-box">
      <div slot="left" class="goback" @click="goback()"> < </div>
      <div slot="center">登录界面</div>
    </NavBar>
    <div class="content-size" v-if="pInfoData.isLogin">
      <loginButton button-name="退出账号" @click.native="exitUser()"></loginButton>
      <loginButton button-name="切换账号" @click.native="exitUser()"></loginButton>
    </div>
    <div class="content-size noUser" v-else>
      <loginInput entry="账号" tip="请输入账号" ref="loginInput_1" @keyup.enter.native="logining()"></loginInput>
      <loginInput entry="密码" tip="请输入密码" input-type="password" ref="loginInput_2" @keyup.enter.native="logining()"></loginInput>
      <loginButton button-name="登录" @click.native="logining()"></loginButton>
      <loginButton button-name="重置" @click.native="reset()"></loginButton>
      <loginButton button-name="注册" @click.native="goRegister()"></loginButton>
    </div>
  </div>
</template>

<script>
  import { mapGetters,mapActions } from 'vuex'

  import NavBar from 'components/common/navbar/NavBar'

  import loginButton from './children/loginButton'
  import loginInput from './children/loginInput'

  import { proving,getPInfo } from 'network/login'

  export default {
    name: "login",
    data() {
      return {};
    },
    computed:{
      ...mapGetters([
        'pInfoData'
      ]),
    },
    methods: {
      ...mapActions([
        'changePInfo'
      ]),
      // 返回上一页
      goback(){
        // 已经填写的内容重置
        if(!this.pInfoData.isLogin)
          this.reset();
        // 返回上一页
        this.$router.go(-1);
      },
      // 登录验证
      logining(){
        let user = this.$refs.loginInput_1.inputData;
        let password = this.$refs.loginInput_2.inputData;
        let reg_1 = /^[0-9]+$/;
        let reg_2 = /(?=^.{8,}$)(?=.*[0-9])(?=.*[a-zA-Z])(?!.*\n).*$/;
        if(!user){
          this.$toast.toastShow('请先输入账号!');
          return
        }
        if(!password){
          this.$toast.toastShow('请先输入密码!');
          return
        }
        if(!reg_1.test(user)){
          this.$toast.toastShow('账号只能是纯数字!');
          return
        }
        if(!reg_2.test(password)){
          this.$toast.toastShow('密码必须由数字和英文字母组成!');
          return
        }
        // 登录验证
        proving(user,password).then(data => {
          if(data.data.login){
            // login tip
            this.$toast.toastShow('登录成功!');
            // return previous page
            this.goback();
            // request person info ...
            return getPInfo(user);
          }else{
            // login fail tip
            this.$toast.toastShow('账号或密码错误!')
          }
        }).then(data => {
          if(data){
            // set store.state.pInfo ...
            this.changePInfo({str:'login',content:{isLogin:true,...data}});
          }
        });
      },
      // 重置输入的内容
      reset(){
        this.$refs.loginInput_1.inputData = null;
        this.$refs.loginInput_2.inputData = null;
      },
      // 退出登录、切换账号
      exitUser(){
        this.changePInfo({str:"logout"});
      },
      // 跳转到注册野蛮
      goRegister(){
        this.$router.push('/register');
      }
    },
    components: {
      NavBar,
      loginButton,
      loginInput,
    },
  }
</script>

<style scoped>
  .navbar-box{
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .navbar-box{
    font-size: 15px;
  }
  .goback{
    font-size: 40px;
    text-align: center;
  }

  .content-size{
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #fff;
    padding-top: 100px;
  }

  /*没有登录时的情况*/
  .noUser{

  }
</style>
