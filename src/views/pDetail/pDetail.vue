<template>
    <div>
      <!--顶部导航栏-->
      <NavBar class="navbar">
        <div slot="left" @click="goBack()" class="navbar-left"> < </div>
        <div slot="center">个人详情</div>
      </NavBar>

      <!--主体内容-->
      <Scroll class="content">
        <div class="detail-line">
          <span>个人头像</span>
          <img class="position-right" :src="pInfoData.img" alt="">
        </div>
        <div class="detail-line">
          <span>账号</span>
          <span class="position-right">{{pInfoData.id}}</span>
        </div>
        <div class="detail-line">
          <span>用户名</span>
          <span class="position-right">{{pInfoData.name  || '尚未填写' }}</span>
        </div>
        <div class="detail-line">
          <span>我的号码</span>
          <span class="position-right">{{pInfoData.phone  || '尚未填写' }}</span>
        </div>
        <div class="detail-line">
          <span>我的邮箱</span>
          <span class="position-right">{{pInfoData.mail || '尚未填写' }}</span>
        </div>
        <div class="detail-line">
          <span>我的地址</span>
          <span class="position-right">{{pInfoData.address || '尚未填写' }}</span>
        </div>
      </Scroll>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "pDetail",
    data() {
      return {};
    },
    computed:{
      ...mapGetters([
        'pInfoData'
      ]),
    },
    methods: {
      // 返回上一页
      goBack(){
        this.$router.go(-1);
      }
    },
    components: {
      NavBar,
      Scroll,
    },
  }
</script>

<style scoped>
  .navbar-left{
    font-size: 40px;
  }

  /*顶部导航栏*/
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
    text-align: center;
  }

  /*主体滑动部分*/
  .content{
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #fff;
  }

  /*详情页的行内容*/
  .detail-line{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    padding: 0 10px;
    position: relative;
    font-weight: 600;
  }
  .detail-line .position-right{
    position: absolute;
    right: 10px;
  }
  .detail-line img{
    top: 50%;
    width: 30px;
    transform: translate(0,-50%);
  }
</style>
