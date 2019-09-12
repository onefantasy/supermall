<template>
    <div class="wrapper">
      <!--顶部横条-->
      <NavBar class="navbar">
        <div slot="center">商品分类</div>
      </NavBar>

      <div class="main">
        <!--分类列表-->
        <div class="list-title">
          <Scroll class="list-title-content">
            <categoryList :data="data" @listClick="changeGood"></categoryList>
          </Scroll>
        </div>
        <!--对应分类列表的内容-->
        <div class="list-content">
          <Scroll class="list-content-content">
            <categoryGoods :data="data" :current="current"></categoryGoods>
          </Scroll>
        </div>
      </div>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import categoryList from './children/categoryList'
  import categoryGoods from './children/categoryGoods'

  import {getCategoryData} from 'network/category'

  export default {
    name: "category",
    data() {
      return {
        current: 0,
        data:[],
      };
    },
    mounted(){

    },
    methods: {
      changeGood(index){
        // 点击分类列表，改变显示的商品类型
        this.current = index;
      }
    },
    components: {
      NavBar,
      Scroll,
      categoryList,
      categoryGoods,
    },
    created(){
      getCategoryData().then(data => {this.data = data});
    },
  }
</script>

<style scoped>
  .wrapper{
    padding: 0 0 49px 0;
    height: 100vh;
    font-size: 15px;
  }

  .navbar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
    position: relative;
    z-index: 10;
  }

  .main{
    display: flex;
  }

  .list-title{
    width: 100px;
    text-align: center;
    position: relative;
    height: 100vh;
  }
  .list-title-content{
    position: absolute;
    top: 0;
    bottom: 89px;
    left: 0;
    right: 0;
  }

  .list-content{
    flex: 4;
  }
  .list-content-content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 100px;
    right: 0;
  }
</style>
