<template>
  <div>
    <!--导航栏-->
    <NavBar class="cartNavBar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>

    <!--可滚动部分-->
    <Scroll class="content">
      <cartList></cartList>
    </Scroll>

    <!--底部结算栏-->
    <cartBottomBar></cartBottomBar>
  </div>
</template>

<script>
  // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
  import { mapGetters } from 'vuex'

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import cartList from './children/cartList'
  import cartBottomBar from './children/cartBottomBar'

  export default {
    name: "cart",
    data() {
      return {};
    },
    computed:{
      // 使用运算展开符将mapGetters对象混入到computed中
      ...mapGetters([
        'cartLength',
      ]),
    },
    methods: {},
    components: {
      NavBar,
      Scroll,
      cartList,
      cartBottomBar,
    },
  }
</script>

<style scoped>
  .cartNavBar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
    position: relative;
    z-index: 10;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 89px;
    left: 0;
    right: 0;
  }

</style>
