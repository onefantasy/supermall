<template>
  <div id="home">
    <NavBar class="home-bar">
      <div slot="center">动漫街</div>
    </NavBar>

    <!--使用Scroll组件必须为scroll组件设定高度-->
    <Scroll class="content"
            ref="scroll"
            :probeTypeNum="3"
            @scroll="isShowBackTop"
            :pullUpLoad="true"
            @loadMore="loadMore">
      <Swiper :banners="banners" top="44px"></Swiper>
      <RecommonView :recommend="recommend"></RecommonView>
      <FeatureImg></FeatureImg>
      <!--吸顶效果，可借用position:sticky-->
      <TabControl :title="['流行','古典','款式']" class="tab-control" @changeIndex="changeGoods"></TabControl>
      <GoodsList :goods="goods" :goodIndex="goodsIndex" @goodsComplete="changeScroll"></GoodsList>
    </Scroll>

    <!--监听组件使用原生事件时，需要使用native修饰符-->
    <!--点击时返回顶部-->
    <BackTop @click.native="backTop" v-show="isShowBack"></BackTop>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Swiper from 'components/common/swiper/Swiper'
  import Scroll from 'components/common/scroll/Scroll'

  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import {getBanner,getRecommend,getGoods} from  'network/home'

  import RecommonView from './children/RecommendView'
  import FeatureImg from './children/FeatureImg'

    export default {
      name: "home",
      data() {
        return {
          banners:[],
          recommend:[],
          goods:{},
          goodsIndex: 0,
          positionY: 0,
        };
      },
      computed:{
        isShowBack(){
          return (-this.positionY) > 500;
        },
      },
      methods: {
        changeGoods(index){
          this.goodsIndex = index;
        },
        // 返回顶部
        backTop(){
          // 调用better-scroll自带的返回顶部的方法
          this.$refs.scroll.goTop(0,0,500);
        },
        // 是否显示返回顶部的箭头
        isShowBackTop(p){
          this.positionY = p.y;
        },
        // 刷新scroll组件所计算的当前页面的长度
        changeScroll(){
          this.$refs.scroll.scroll.refresh();
        },
        // 上拉加载更多
        loadMore(){
          let i = 0;
          for(let key in this.goods){
            if(i === this.goodsIndex){
              // 模拟加载更多商品
              this.goods[key].push(this.goods[key][0]);
              this.$refs.scroll.scroll.finishPullUp();
            }
            i++;
          }
        },
      },
      components: {
        NavBar,
        Swiper,
        RecommonView,
        FeatureImg,
        TabControl,
        GoodsList,
        Scroll,
        BackTop,
      },
      created(){
        getBanner().then(data => this.banners = data);
        getRecommend().then(data => this.recommend = data);
        getGoods().then(data => this.goods = data);
      },
    }
</script>

<style scoped>
  #home{
    padding-bottom: 55px;
    position: relative;
    /* vh : view height*/
    height: 100vh;
  }
  .home-bar{
    background-color: var(--color-tint);
    /*background-color: transparent;*/
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 10;
  }
  .tab-control{
    position: sticky;
    /*当距离顶部的44px时，会将改元素变成fixed*/
    top: 44px;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
