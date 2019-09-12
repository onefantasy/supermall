<template>
  <div class="capital-box">
    <capitalItem class="money" title="我的余额" :num="pInfoData.isLogin ? parseInt(pInfoData.money) : 0"></capitalItem>
    <capitalItem class="discount" title="我的优惠" unit="个" :num="pInfoData.isLogin ? parseInt(pInfoData.discount) : 0"></capitalItem>
    <capitalItem class="point" title="我的积分" unit="分" :num="pInfoData.isLogin ? parseInt(pInfoData.point) : 0"></capitalItem>
  </div>
</template>

<script>
  import capitalItem from './capitalItem'
  export default {
    name: "capital",
    props:{
      pInfoData:{
        type: Object,
        default(){
          return {};
        }
      },
    },
    data() {
      return {};
    },
    methods: {},
    components: {
      capitalItem,
    },
  }
</script>

<style scoped>

  .capital-box{
    height: 120px;
    display: flex;
  }
  .money{
    flex: 1;
    border-right: 2px solid #eee;
  }
  .discount{
    flex: 1;
    border-right: 2px solid #eee;
  }
  .point{
    flex: 1;
  }

</style>
