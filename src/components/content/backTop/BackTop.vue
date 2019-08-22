<template>
    <div class="back-top-box">
      <img src="~assets/img/backTo/arrow.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop",
        data() {
            return {};
        },
        methods: {},
        components: {},
    }
</script>

<style scoped>
  .back-top-box{
    position: fixed;
    right: 7px;
    bottom: 50px;
  }
  .back-top-box img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>
