<template>
    <div class="recommend-box clear-fix">
      <div class="recommend-item" v-for="item in recommend">
        <img :src="item.img" alt="">
        <div>{{item.title}}</div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "RecommendView",
      props:{
          recommend:{
            type: Array,
            default() {
              return [];
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
  .recommend-box{
    width: 100%;
    padding: 15px 0 30px;
    border-bottom: 5px solid #eee;
  }
  .recommend-item{
    width: 25%;
    float: left;
    text-align: center;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 5px;
  }
</style>
