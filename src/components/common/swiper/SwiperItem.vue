<template>
  <!--:style="'left:'+leftNum"-->
    <div class="swiper-item" :style="'left:'+leftNum">
      <a href="#">
        <img :src="item" alt="" @load="swiperImgLoad">
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
        },
        postImgLoadItem:{
          type: Boolean,
          default: true,
        },
      },
      data() {
        return {
          indexNum:this.index,
          emitImgLoad: 1,
        };
      },
      computed:{
        leftNum(){
          return (this.indexNum * 100) + '%';
        },
      },
      methods: {
        // 用于计算tabControl的吸顶效果的距离
        swiperImgLoad(){
          if(this.postImgLoadItem)
            this.$bus.$emit('swiperImgLoad');
        },
      },
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
    width: 100%;
    max-height: 200px;
    vertical-align: middle;
  }
</style>
