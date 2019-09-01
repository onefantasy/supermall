<template>
    <div class="goods-item-box">
      <!--图片懒加载处理-->
      <img v-lazy="item.img" alt="" @load="loadimg" @click="goDetail">
      <!--<img :src="item.img" alt="" @load="loadimg" @click="goDetail">-->
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
          // 往总线传递信号，通知home.vue图片已经加载完成
          this.$bus.$emit('imgLoad');
          // 往父组件发射信号
          this.$emit('img-load');
        },
        // 跳转到详情页面
        goDetail(){
          this.$router.push('/detail/'+ this.item.id);
        },
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
