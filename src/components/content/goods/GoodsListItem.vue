<template>
    <div class="goods-item-box">
      <img :src="item.img" alt="" @load="loadimg">
      <div>
        <p class="goods-item-name">{{item.name}}</p>
        <p class="goods-item-price">{{item.price}}</p>
      </div>
    </div>
</template>

<script>
    export default {
      name: "GoodsListItem",
      props:{
        item:{
          type: Object,
          default(){
            return {};
          }
        }
      },
      data() {
        return {};
      },
      updated(){

      },
      methods: {
        // 图片加载完成事件
        loadimg(){
          this.$emit('imgComplete');
        }
      },
      components: {},
    }
</script>

<style scoped>
  .goods-item-box{
    text-align: center;
    font-size: 12px;
  }
  .goods-item-box img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-item-box div{
    padding: 10px 0;
  }
  .goods-item-price{
    padding-top: 5px;
    color: var(--color-high-text);
  }
</style>
