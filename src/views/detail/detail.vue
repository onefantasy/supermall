<template>
  <div class="detail-box">
    <!--导航栏-->
    <detailNavbar class="nav-bar" @itemClick="goTo" ref="navbar"></detailNavbar>
    <Scroll class="content" ref="scroll" @scroll="getY" :probeTypeNum="3">
      <!--轮播图-->
      <Swiper :banners="data.topImg" top="44px" :postImgLoad="false" ref="swiper"></Swiper>
      <!--商品信息介绍-->
      <detailInfo :info="data.info"></detailInfo>
      <!--店铺信息-->
      <detailShop :shop="data.shop"></detailShop>
      <!--商品详细信息-->
      <detailGoodsInfo :info-img="data.imgInfo" @infoImgLoad="infoImgLoad"></detailGoodsInfo>
      <!--商品参数-->
      <detailGoodParams :good-params="data.params" ref="params"></detailGoodParams>
      <!--用户评论-->
      <userComment :comment="data.comment" ref="comment"></userComment>
      <!--推荐-->
      <detailRecommend :goods="goods" :goodsIndex="id" @recommend-imgLoad="getTop" ref="recommend"></detailRecommend>
    </Scroll>

    <!--回到顶部-->
    <BackTop @click.native="backTop" v-show="isShowBack"></BackTop>

    <!--底部工具栏-->
    <detailBottomNavbar @addCart="addGoodToCart"></detailBottomNavbar>
  </div>
</template>

<script>
  import detailNavbar from './children/detailNavbar'
  import detailInfo from './children/detailInfo'
  import detailShop from './children/detailShop'
  import detailGoodsInfo from './children/detailGoodsInfo'
  import detailGoodParams from './children/detailGoodParams'
  import userComment from './children/userComment'
  import detailRecommend from './children/detailRecommend'
  import detailBottomNavbar from './children/detailBottomNavbar'

  import {getDetail,getGoods} from 'network/detail'

  import Swiper from 'components/common/swiper/Swiper'
  import Scroll from 'components/common/scroll/Scroll'

  import BackTop from 'components/content/backTop/BackTop'

  import { mapActions } from 'vuex'

  export default {
    name: "detail",
    data() {
      return {
        id:null,
        data:{},
        goods:{},
        partOffsetTop:null,
        positionY: 0,
      };
    },
    created(){
      this.id = parseInt(this.$route.params.id);
      // 请求数据
      getDetail(this.id).then(data => {this.data = data});
      getGoods().then(data => {this.goods = data});
    },
    mounted(){

    },
    computed:{
      isShowBack(){
        return (-this.positionY) > 500;
      },
    },
    methods: {
      ...mapActions([
        'addToCart'
      ]),

      infoImgLoad(){
        // 刷新可滚动的长度
        this.$refs.scroll.refresh();
      },

      // 返回顶部
      backTop(){
        // 调用better-scroll自带的返回顶部的方法
        this.$refs.scroll.goTop(0,-40,500);
      },

      // 获取哥哥部分距离顶部的距离
      getTop(){
        // 等到子组件的图片加载完成，在计算，此处只考虑推荐部分的图片加载情况
        this.partOffsetTop = [];
        this.partOffsetTop.push(this.$refs.swiper.$el.offsetTop + 44);
        this.partOffsetTop.push(this.$refs.params.$el.offsetTop + 44);
        this.partOffsetTop.push(this.$refs.comment.$el.offsetTop + 44);
        this.partOffsetTop.push(this.$refs.recommend.$el.offsetTop + 44);
      },

      // 点击navbar跳转
      goTo(index){
        this.$refs.scroll.goTop(0,-this.partOffsetTop[index],200);
      },

      // 滚动到一定位置改变navbar中的活跃标签
      getY(p){
        this.positionY = p.y;
        if(!this.partOffsetTop) return;
        // 注意，此处取到的p.y为负值
        let y = Math.abs(p.y) ;
        let index = -1;
        for(let i = 0; i < this.partOffsetTop.length; i++){
         if(this.partOffsetTop[i] <= y) index++;
        }
        this.$refs.navbar.current = index;
      },

      // 添加到购物车
      addGoodToCart(){
        const goodInfo = {};
        goodInfo.img = this.data.imgInfo[0];
        goodInfo.title = this.data.info.title;
        goodInfo.id = this.id;
        goodInfo.desc = this.data.info.desc;
        goodInfo.price = this.data.info.newPrice;
        goodInfo.count = 1;
        goodInfo.checked = true;
        this.addToCart(goodInfo).then(()=>{
          this.$toast.toastShow('添加成功!',1500);
        });
      },
    },
    components: {
      detailNavbar,
      Swiper,
      detailInfo,
      detailShop,
      Scroll,
      detailGoodsInfo,
      detailGoodParams,
      userComment,
      detailRecommend,
      detailBottomNavbar,
      BackTop,
    },

  }
</script>

<style scoped>

  .detail-box{
    padding-bottom: 50px;
    height: 100vh;
    position: relative;
    background-color: #fff;
    z-index: 10;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .nav-bar{
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
</style>
