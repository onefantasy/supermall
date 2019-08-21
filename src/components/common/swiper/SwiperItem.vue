<template>
  <!--:style="'left:'+leftNum"-->
    <div class="swiper-item" :style="'left:'+leftNum">
      <a href="#">
        <!--<div :style="'background:url('+item+')'"></div>-->
        <img :src="item" alt="">
      </a>
    </div>
</template>

<script>
    export default {
      name: "SwiperItem",
      props: {
        item:{
          type: String,
          default: '',
        },
        index:{
          type: Number,
        }
      },
      data() {
        return {
          indexNum:this.index
        };
      },
      computed:{
        leftNum(){
          return (this.indexNum * 100) + '%';
        },
      },
      methods: {},
      components: {},
    }
</script>

<style scoped>
  .swiper-item{
    position: absolute;
    transition: all 0.75s;
    overflow: hidden;
    /*width: 100%;*/
  }
  .swiper-item img{
    max-width: 100%;
    height: 200px;
    vertical-align: middle;
  }
</style>
