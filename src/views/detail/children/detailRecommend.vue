<template>
  <div v-if="goods" class="recommend">
    <div class="word">推荐</div>
    <GoodsList :goods="goods" :goodIndex="index" @item-img-load="gotImg"></GoodsList>
  </div>
</template>

<script>

  import GoodsList from 'components/content/goods/GoodsList'
  export default {
    name: "detailRecommend",
    props:{
      goods:{
        type: Object,
        default(){
          return undefined;
        },
      },
      goodsIndex:{
        type: Number,
        default(){
          return -1;
        }
      }
    },
    data() {
      return {
        fun: null,
      };
    },
    mounted(){
      this.fun = this.debounce(()=>{
        this.$emit('recommend-imgLoad');
      },100);
    },
    methods: {
      // 防抖函数
      debounce(fn, delay=50){
        let timer = null;
        return function(...args){
          if(timer) clearTimeout(timer);
          timer = setTimeout(()=>{
            fn.apply(this,args);
          },delay);
        };
      },
      // 图片加载完成事件
      gotImg(){
        this.fun();
      },
    },
    computed:{
      index(){
        return this.goodsIndex - 1;
      }
    },
    components: {
      GoodsList,
    },
  }
</script>

<style scoped>
  .recommend{
    width: 100%;
    padding-top: 5px;
  }

  .word{
    margin: 10px;
    line-height: 40px;
    font-size: 15px;
    border-left: 5px solid orange;
    padding-left: 15px;
  }
</style>
