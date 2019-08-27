<template>
  <div class="shop-box" v-if="shop">
    <div class="facade">
      <div><img :src="shop.logo" alt="" class="logo"></div>
      <div><span class="name">{{shop.name}}</span></div>
    </div>
    <div class="survey">
      <div class="survey-left">
        <div class="fans">
          <div class="number">{{shop.fan}}</div>
          <div class="text">人数</div>
        </div>
        <div class="sell">
          <div class="number">{{shop.sell}}</div>
          <div class="text">总销量</div>
        </div>
      </div>
      <div class="score">
        <div class="score-item">描述相符&nbsp
          <span class="low" :class="{height:shop.score[0] === 5}">{{shop.score[0]}}&nbsp{{shop.score[0] === 5 ? "&nbsp&nbsp&nbsp高":"低"}}</span>
        </div>
        <div class="score-item">价格合理&nbsp
          <span class="low" :class="{height:shop.score[1] === 5}">{{shop.score[1]}}&nbsp{{shop.score[1] === 5 ? "高":"低"}}</span>
        </div>
        <div class="score-item">质量满意&nbsp
          <span class="low" :class="{height:shop.score[2] === 5}">{{shop.score[2]}}&nbsp{{shop.score[2] === 5 ? "高":"低"}}</span>
        </div>
      </div>
    </div>
    <div class="toShop">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailShop",
    props:{
      shop:{
        type:Object,
        default(){
          return undefined;
        }
      },
    },
    data() {
      return {};
    },
    methods: {

    },
    components: {},
  }
</script>

<style scoped>
  .shop-box{
    width: 100%;
    padding: 15px;
    background-color: #fff;
  }

  .facade{
    display: flex;
  }
  .logo{
    width: 50px;
    border-radius: 50%;
    border: 2px solid #111;
  }
  .name{
    font-size: 25px;
    line-height: 54px;
    padding-left: 15px;
    flex: 1;
  }

  .survey{
    display: flex;
    padding-top: 15px;
  }
  .survey>div{
    flex: 1;
    text-align: center;
  }
  .survey-left{
    display: flex;
    padding: 21px 0;
  }
  .survey-left>div{
    flex: 1;
    height: 46px;
  }
  .sell{
    border-right: 1px solid #eee;
  }
  .number{
    font-size: 20px;
  }
  .text{
    padding-top: 10px;
    font-size: 12px;
  }
  .score{
    padding-left: 10px;
    font-size: 14px;
    line-height: 30px;
  }
  .score-item{
    text-align: left;
  }
  .low{
    color: green;
  }
  .height{
    color: red;
  }

  .toShop{
    padding: 10px;
    display: flex;
    background-color: #fff;
  }
  .toShop button{
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 40px;
    margin: auto;
    background-color: #eee;
  }
  .toShop button:hover{
    border: none;
  }
  .toShop button:focus{
    border: none;
    /*border: 2px solid #eee;*/
    border-radius: 5px;
  }

</style>
