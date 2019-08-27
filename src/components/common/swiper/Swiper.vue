<template>
    <div class="swiper-box" :style="'margin-top:'+top" @touchstart="touchStart" @touchend="touchEnd">
      <div class="swiper-img">
        <div v-for="(item,index) in banners" class="bannersImg">
          <SwiperItem :item="item" :index="index" ref="index" :postImgLoadItem="postImgLoad"></SwiperItem>
        </div>
      </div>
      <div class="dots">
      </div>
    </div>
</template>

<script>
  import SwiperItem from './SwiperItem'
  export default {
    name: "Swiper",
    props: {
      // 轮播图图片
      banners:{
        type: Array,
        default(){
          // 若类型为数组会object，则默认值必须使用函数
          return [];
        },
      },
      // 轮播图距离顶部的距离
      top: {
        type: String,
        default: '0px',
      },
      postImgLoad:{
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        startX : 0,
        endX : 0,
        current: 0,
        timer: null,
      };
    },
    methods: {
      order(text){
        let arr = this.$refs.index;
        let next = 0;
        let pre = 0;
        if(this.current === 0){
          next = 1;
          pre = arr.length-1;
        }else if(this.current === arr.length-1){
          next = 0;
          pre = this.current-1;
        }else{
          next = this.current + 1;
          pre = this.current - 1;
        }
        arr[pre].$el.style.left = '-100%';
        arr[next].$el.style.left = '100%';

        if(text === 'next'){
          arr[pre].$el.style.transition = "all 0.75s";
          arr[next].$el.style.transition = "all 0s";
        }else{
          arr[pre].$el.style.transition = "all 0s";
          arr[next].$el.style.transition = "all 0.75s";
        }

      },
      nextChange(){
        let arr = this.$refs.index;
        this.current = (this.current+1)%arr.length;
        for(let j = 0; j < arr.length; j++){
          // arr[j].indexNum = (arr[j].indexNum-1)%arr.length;
          arr[j].$el.style.zIndex = 1;
        }
        arr[this.current].$el.style.transition = "all 0.75s";
        arr[this.current].$el.style.left = '0%';
        arr[this.current].$el.style.zIndex = 2;
        this.order('next');
      },
      preChange(){
        let arr = this.$refs.index;
        this.current = this.current === 0 ? arr.length-1:this.current-1;
        for(let j = 0; j < arr.length; j++){
          // arr[j].indexNum = (arr[j].indexNum+1)%arr.length;
          arr[j].$el.style.zIndex = 1;
        }
        arr[this.current].$el.style.transition = "all 0.75s";
        arr[this.current].$el.style.left = '0%';
        arr[this.current].$el.style.zIndex = 2;
        this.order('pre');
      },
      touchStart(e){
       this.startX = e.changedTouches[0].clientX;
      },
      touchEnd(e){
        this.endX = e.changedTouches[0].clientX;
        if(this.startX - this.endX > 0){
          this.nextChange();
        }else{
          this.preChange();
        }
      },
    },
    updated() {
      /*let times = this.$refs.index.length;
      for (let i = 0; i < times; i++) {
        this.nextChange();
      }*/
      let arr = this.$refs.index;
      this.order('next');
      arr[this.current].$el.style.zIndex = 2;
      this.timer = setInterval(()=>{
        this.nextChange();
      },3000);
    },
    beforeDestroy(){
      clearInterval(this.timer)
    },
    components: {
      SwiperItem,
    },
  }
</script>

<style scoped>
  .swiper-img{
    width: 100%;
    /*overflow: hidden;*/
    position: relative;
    background-color: blue;
  }
  .swiper-box{
    width: 100%;
    height: 200px;
    background-color: pink;
  }

</style>
