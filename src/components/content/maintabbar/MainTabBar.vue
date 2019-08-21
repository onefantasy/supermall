<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/home1.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home2.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/sort" active-color="yellow">
      <img slot="item-icon" src="~assets/img/tabbar/sort1.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/sort2.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/car" active-color="green">
      <img slot="item-icon" src="~assets/img/tabbar/car1.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/car2.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/my">
      <img slot="item-icon" src="~assets/img/tabbar/my1.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/my2.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar"
  import TabBarItem from "components/common/tabbar/TabBarItem"

  export default {
    name: "MainTabBar",
    data() {
      return {};
    },
    methods: {},
    components: {
      TabBar,
      TabBarItem,
    },
  }
</script>

<style scoped>

</style>
