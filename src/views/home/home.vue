<template>
  <div id="home">
    <NavBar class="home-bar">
      <div slot="center">购物街</div>
    </NavBar>
    <Swiper :banners="banners" top="44px"></Swiper>
    <RecommonView :recommend="recommend"></RecommonView>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Swiper from 'components/common/swiper/Swiper'
  import {getBanner,getRecommend} from  'network/home'
  import RecommonView from './children/RecommendView'

    export default {
      name: "home",
      data() {
        return {
          banners:[],
          recommend:[],
        };
      },
      methods: {},
      components: {
        NavBar,
        Swiper,
        RecommonView,
      },
      created(){
        getBanner().then(data => this.banners = data);
        getRecommend().then(data => this.recommend = data);
      },
    }
</script>

<style scoped>
  /*@import "../../assets/css/base.css";*/
  /*@import "../../assets/css/base.css";*/
.home-bar{
  background-color: var(--color-tint);
  /*background-color: transparent;*/
  color: #fff;
}
</style>
