<template>
  <div id="home">
    <NavBar class="home-bar">
      <div slot="center">动漫街</div>
    </NavBar>
    <!--吸顶效果-->
    <TabControl :title="['流行','古典','款式']" class="tab-control" @changeIndex="changeGoods" :class="{Fixed:isFixedTabControl}" ref="tabControl1"></TabControl>

    <!--使用Scroll组件必须为scroll组件设定高度-->
    <Scroll class="content"
            ref="scroll"
            :probeTypeNum="3"
            @scroll="isShowBackTop"
            :pullUpLoad="true"
            @loadMore="loadMore">
      <Swiper :banners="banners" top="44px"></Swiper>
      <RecommonView :recommend="recommend" style="background-color: #fff"></RecommonView>
      <FeatureImg></FeatureImg>
      <!--吸顶效果，可借用position:sticky，但是该css样式在使用后better-scroll后失效-->
      <TabControl :title="['流行','古典','款式']" class="tab-control" @changeIndex="changeGoods" ref="tabControl2"></TabControl>
      <GoodsList :goods="goods" :goodIndex="goodsIndex" ></GoodsList>
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
          // timer: null,
          tabControlTop: 0,
          saveY: 0,
        };
      },
      computed:{
        isShowBack(){
          return (-this.positionY) > 500;
        },
        isFixedTabControl(){
          return (-this.positionY) > this.tabControlTop;
        }
      },
      methods: {
        changeGoods(index){
          this.goodsIndex = index;
          this.$refs.tabControl1.current = index;
          this.$refs.tabControl2.current = index;
        },
        // 返回顶部
        backTop(){
          // 调用better-scroll自带的返回顶部的方法
          this.$refs.scroll.goTop(0,-40,500);
        },
        // 是否显示返回顶部的箭头
        isShowBackTop(p){
          this.positionY = p.y;
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
        // 防抖动函数，用于解决多次刷新scroll组件所计算的当前页面的长度的问题
        // 两个参数，一个是需要执行的参数，一个是定时器的时间
        debounce(fun,delay){
          let timer = null;
          return function(...args){
            // 之前若是存在定时器，直接清除
            if(timer) clearTimeout(timer);
            // 重新设置定时器
            timer = setTimeout(()=>{
              // 调用需要执行的函数
              fun.apply(this,args);
            },delay);
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
      mounted(){
        // 使用防抖动函数
        const refresh = this.debounce(this.$refs.scroll.refresh,50);
        // 监听GoodsListItem图片加载完成事件
        // 监听总线，刷新页面可拖动长度
        this.$bus.$on('imgLoad',()=>{
          refresh();
        });

        // 计算tabControl距离顶部的高度，此处只轮播图图片的影响
        this.$bus.$on('swiperImgLoad',()=>{
          // console.log(this.$refs.tabControl.$el.offsetTop);
          this.tabControlTop = this.$refs.tabControl2.$el.offsetTop + this.$refs.tabControl2.$el.offsetHeight;
        });
      },
      activated() {
        this.$refs.scroll.refresh();
        this.$refs.scroll.goTop(0,this.saveY,0);
      },
      deactivated(){
        this.saveY = this.positionY;
      },
    }
</script>

<style scoped>
  #home{
    padding-bottom: 55px;
    position: relative;
    /* vh : view height*/
    height: 100vh;
    background-color: #fff;
    font-size: 15px;
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
    background-color: #fff;
  }

  /*tabControl吸顶效果*/
  .Fixed{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 10;
  }
</style>
