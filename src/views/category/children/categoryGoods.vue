<template>
  <div class="list-content-box" v-if="data">
    <div class="list-content-item" v-for="item of goods">
      <img v-lazy="item.imgUrl" alt="">
      <div>{{item.name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "categoryGoods",
    props:{
      data:{
        type:Array,
        default(){
          return undefined;
        }
      },
      current:{
        type: Number,
        default: 0
      },
    },
    computed:{
      // 根据当前高亮的分类显示的商品的内容
      goods(){
        if(!this.data[this.current]) return [];
        return this.data[this.current].value;
      },
    },
    data() {
      return {
        count: 0,
      };
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>
  .list-content-box{
    display: flex;
    /*flex布局换行*/
    flex-wrap: wrap;
    /*定义元素在主轴上的对齐方式*/
    justify-content: space-around;
    /*padding-top: 20px;*/
  }
  .list-content-item{
    width: 100px;
    height: 100px;
    text-align: center;
    font-weight: 500;
  }
  .list-content-item img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  div.list-content-item{
    margin-top: 20px;
  }
</style>
