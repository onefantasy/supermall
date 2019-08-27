<template>
  <div class="navbar-box">
    <div class="box-left">
      <div>
        <img src="~assets/img/bottomNavbar/cserve.svg" alt="">
        <div>客服</div>
      </div>
      <div>
        <img src="~assets/img/bottomNavbar/shop.svg" alt="">
        <div>店铺</div>
      </div>
      <div>
        <img src="~assets/img/bottomNavbar/save.svg" alt="" @click="clickSave" v-show="!saved">
        <img src="~assets/img/bottomNavbar/saved.svg" alt="" @click="clickSave" v-show="saved">
        <div>收藏</div>
      </div>
    </div>
    <div class="box-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailBottomNavbar",
    data() {
      return {
        saved: false,
      };
    },
    methods: {
      // 点击收藏
      clickSave(){
        this.saved = !this.saved;
      },
      // 点击加入购物车
      addCart(){
        this.$emit('addCart');
      },
    },
    components: {},
    computed:{

    },
  }
</script>

<style scoped>

  .navbar-box{
    display: flex;
    height: 49px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #fff;
    box-shadow: 0 -1px 2px #999;
  }
  .navbar-box>div{
    flex: 1;
    display: flex;
  }

  .box-left{
    padding-top: 7px;
  }
  .box-left>div{
    flex: 1;
    text-align: center;
  }
  .box-left div img{
    width: 20px;
  }
  .box-left div div{
    font-size: 13px;
  }
  .box-right{
    background-color: yellow;
    text-align: center;
    line-height: 49px;
    font-size: 14px;
  }

  .box-right{
    display: flex;
  }
  .box-right div{
    flex: 1;
  }
  .buy{
    background-color: pink;
    color: white;
  }
</style>
