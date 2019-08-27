<template>
    <div class="info-box" v-if="info">
      <div class="introduce">
        <span class="title">{{info.title}}</span>
      </div>
      <div class="price">
        <span class="newPrice">&yen{{info.newPrice}}</span>
        <span class="oldPrice">&yen{{info.oldPrice}}</span>
      </div>
      <div class="columns">
        <div class="columns-item">销量{{info.columns[0]}}笔</div>
        <div class="columns-item">收藏{{info.columns[1]}}人</div>
        <div class="columns-item">{{info.server[0]}}</div>
      </div>
      <div class="server">
        <div class="server-item">{{info.server[1]}}</div>
        <div class="server-item">{{info.server[2]}}</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "detailInfo",
    props:{
      info:{
        type: Object,
        default() {
          return undefined;
        }
      }
    },
    data() {
      return {};
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>
  .info-box{
    width: 100%;
    /*height: 200px;*/
    background-color: #fff;
    border-bottom: 3px solid #eee;
    padding: 15px;
  }

  .introduce{
    width: 100%;
  }
  .title{
    width: 100%;
    word-wrap: break-word;
    word-break: normal;
    font-size: 17px;
    font-weight: 500;
  }

  .price{
    margin-top: 15px;
  }
  .newPrice{
    color: var(--color-tint);
    font-size: 20px;
  }
  .oldPrice{
    padding-left: 10px;
    font-size: 12px;
    color: #999;
    text-decoration: line-through;
  }

  .columns{
    padding: 15px 0 10px 0;
    display: flex;
    border-bottom: 2px solid #eee;
    color: #999;
  }
  .columns-item{
    flex: 1;
    font-size: 11px;
  }
  .columns-item:nth-child(2){
    text-align: center;
  }
  .columns-item:nth-child(3){
    text-align: right;
  }

  .server{
    padding-top: 15px;
    font-size: 11px;
    font-weight: 500;
    display: flex;
  }
  .server-item{
    flex: 1;
  }
  .server-item:nth-child(2){
    text-align: right;
  }
</style>
