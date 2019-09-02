<template>
  <div class="capital-box">
    <capitalItem class="money" title="我的余额"></capitalItem>
    <capitalItem class="discount" title="我的优惠" unit="个"></capitalItem>
    <capitalItem class="point" title="我的积分" unit="分"></capitalItem>
  </div>
</template>

<script>
  import capitalItem from './capitalItem'
  export default {
    name: "capital",
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
