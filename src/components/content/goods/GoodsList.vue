<template>
    <div class="goods-box">
      <GoodsListItem v-for="item in goods[currentGoods]" :item="item" class="goods-item" @imgComplete="imgComplete"></GoodsListItem>
    </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'
    export default {
      name: "GoodsList",
      props: {
        goods:{
          type: Object,
          default() {
            return {};
          }
        },
        goodIndex: 0,
      },
      data() {
        return {};
      },
      methods: {
        // 用户告诉父组件图片加载完成
        imgComplete(){
          this.$emit('goodsComplete');
        }
      },
      components: {
        GoodsListItem,
      },
      mounted(){
        // this.$emit('goodsComplete');
      },
      computed:{
        goodsKeys(){
          let arr = [];
          for(let key in this.goods)
            arr.push(key);
          return arr;
        },
        currentGoods(){
          return this.goodsKeys[this.goodIndex];
        }
      },
    }
</script>

<style scoped>

  .goods-box{
    width: 100%;
    display: flex;
    /*flex布局换行*/
    flex-wrap: wrap;
    /*定义元素在主轴上的对齐方式*/
    justify-content: space-around;
  }
  .goods-item{
    width: 48%;
  }
</style>
