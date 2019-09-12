<template>
  <div class="register-box">
    <!--顶部导航栏-->
    <NavBar class="navbar-box">
      <div slot="left" @click="goBack()" class="goBack"> < </div>
      <div slot="center">注册页面</div>
    </NavBar>

    <!--注册页面主体部分-->
    <div class="content">
      <loginInput ref="user" entry="账号" tip="请输入账号(6-10位数字)"></loginInput>
      <loginInput ref="phone" entry="电话" tip="请输入联系号码"></loginInput>
      <loginInput ref="mail" entry="邮箱" tip="请输入邮箱"></loginInput>
      <loginInput ref="password" entry="密码" tip="8-16位，必须有数字与字母" input-type="password"></loginInput>
      <loginButton button-name="确认" @click.native="registering()"></loginButton>
      <loginButton button-name="重置" @click.native="reset()"></loginButton>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import loginButton from './children/loginButton'
  import loginInput from './children/loginInput'

  export default {
    name: "register",
    data() {
      return {};
    },
    methods: {
      // 返回上一页
      goBack(){
        this.$router.go(-1);
      },
      // 重置
      reset(){
        this.$refs.user.inputData = null;
        this.$refs.phone.inputData = null;
        this.$refs.mail.inputData = null;
        this.$refs.password.inputData = null;
      },
      // 点击确认按钮，开始注册
      registering(){

        let regUser = /^[0-9]+$/;
        let regPassword = /(?=^.{8,}$)(?=.*[0-9])(?=.*[a-zA-Z])(?!.*\n).*$/;
        let regMail = /^([0-9a-zA-Z]+)@([0-9a-zA-Z]+)\.([a-zA-Z]+)$/;
        let regPhone = /^[1-9]([0-9]{10})/;

        let user = this.$refs.user.inputData;
        let phone = this.$refs.phone.inputData;
        let mail = this.$refs.mail.inputData;
        let password = this.$refs.password.inputData;

        if(!(user&&phone&&mail&&password)){
          this.$toast.toastShow('请先将必要信息填写完整!',1500);
          return;
        }
        if(!regUser.test(user)){
          this.$toast.toastShow('账号必须是纯数字!');
          return;
        }
        if(!regPhone.test(phone)){
          this.$toast.toastShow('请输入有效的联系方式!');
          return;
        }
        if(!regMail.test(mail)){
          this.$toast.toastShow('请输入有效的邮箱地址!');
          return;
        }
        if(!regPassword.test(password)){
          this.$toast.toastShow('密码必须必须包含数字与字母!');
          return;
        }

        // 发送注册信息到后端进行验证，判断是否可以经行注册


      },
    },
    components: {
      NavBar,
      loginButton,
      loginInput,
    },
  }
</script>

<style scoped>

  .goBack{
    font-size: 40px;
  }
  .register-box{
    font-size: 15px;
  }
  .navbar-box{
    background: var(--color-tint);
    text-align: center;
    font-weight: 700;
    color: #fff;
  }

  .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 10;
    font-size: 15px;
    padding-top: 30px;
  }
</style>
