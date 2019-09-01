<template>
    <div class="item-box">
      <div class="check-box">
        <div class="check" :class="{checked:item.checked}" @click="clickIt"></div>
      </div>
      <div class="img"><img :src="item.img" alt=""></div>
      <div class="explain">
        <div class="title">{{item.title}}</div>
        <div class="desc">{{item.desc}}</div>
        <div class="buyInfo clear-fix">
          <div class="left">&yen{{item.price}}</div>
          <div class="right">✖{{item.count}}</div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "cartListItem",
    props:{
      item:{
        type: Object,
        default(){
          return undefined;
        },
      },
    },
    data() {
      return {};
    },
    methods: {
      clickIt(){
        this.item.checked = !this.item.checked;
      },
    },
    components: {},
  }
</script>

<style scoped>
  .item-box{
    display: flex;
    height: 120px;
    padding: 10px;
  }

  .check-box{
    width: 30px;
    padding: 38px 3px;
  }
  .check{
    width: 20px;
    height: 20px;
    border: 2px solid #333;
  }
  .checked{
    background-color: skyblue;
  }

  .img{
    width: 70px;
    background-color: green;
  }
  .img img{
    width: 70px;

  }

  .explain{
    flex: 1;
    /*display:-webkit-box;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    padding-left: 10px;
    position: relative;
  }

  .title{
    width: 100%;
    height: 30px;
    /*  显示省略号只对inline有用*/
    display: inline;
    font-size: 25px;
  }

  .desc{
    margin-top: 5px;
    font-size: 13px;
  }

  .buyInfo{
    width: calc(100% - 10px);
    position: absolute;
    bottom: 0;
  }
  .buyInfo div:nth-child(1){
    color: orange;
  }
  .buyInfo div:nth-child(2){
    text-align: right;
  }
</style>
