<template>
  <div class="box">
    <div class="all">
      <div class="all-check" :class="{allChecked:allChecked}" @click="allClick"></div>
      <div>全选</div>
    </div>
    <div class="cost">
      合计:&yen{{cost}}
    </div>
    <div class="calculate" @click="calcClick">
      去结算:({{calcCount}})
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "cartBottomBar",
    data() {
      return {};
    },
    computed:{
      ...mapGetters([
        'cartList',
      ]),
      // 已选购物车的总花费
      cost(){
        return this.cartList.filter(
          item =>item.checked
        ).reduce((pre,item)=>{
          return pre + item.price * item.count
        },0)
      },
      // 结算的的选中的个数
      calcCount(){
        return this.cartList.filter(item=>item.checked).length;
      },
      // 是否已经全选
      allChecked(){
        if(this.cartList.length === 0) return false;
        return this.calcCount === this.cartList.length;
      }
    },
    methods: {
      // 点击全选
      allClick(){
        /*// 默认没有全选
         let flag = true;
         // 如果已经全选，则全部取消选中
         if(this.allChecked) flag =false;*/

        // 简化写法
        let flag = !this.allChecked;

        this.cartList.forEach(item => item.checked = flag);
      },
      // 点击结算按钮
      calcClick(){
        if(this.calcCount === 0) this.$toast.toastShow('请先选中物品',500);
      },
    },
    components: {},
  }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 49px;
    z-index: 20;

    background-color: #eee;
    box-shadow: 0 -1px 1px #bbb;
    font-size: 14px;

    display: flex;
  }

  .all{
    display: flex;
    line-height: 23px;
    padding: 10px 0 10px 10px;
    width: 70px;
  }
  .all-check{
    width: 20px;
    height: 20px;
    border: 2px solid #333;
    margin-right: 5px;
  }
  .allChecked{
    background-color: skyblue;
  }

  .cost{
    line-height: 40px;
    padding-left: 20px;
    flex: 1;
  }

  .calculate{
    /*width: 60px;*/
    height: 40px;
    padding: 0 10px;
    line-height: 40px;
    color: #fff;
    background-color: red;
  }

</style>
