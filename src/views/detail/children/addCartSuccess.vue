<template>
  <div class="box" :class="{showBox:showTip}" v-if="showTip">
    <span v-if="isSuccess">添加成功!</span>
    <span v-else>添加失败!</span>
  </div>
</template>

<script>
    export default {
        name: "addCartSuccess",
        props:{
          isSuccess:{
            type: Boolean,
            default: false,
          },
          showTip:{
            type: Boolean,
            default: false,
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

  .box{
    position: fixed;
    width: 30%;
    line-height: 40px;
    background-color: rgba(0,0,0,.5);
    top: 40%;
    left: 35%;
    text-align: center;
    border-radius: 5px;
    opacity: 0;
  }

  .showBox{
    animation-name: showAndHide;
    animation-duration: 2s;
    animation-timing-function: linear;
  }

  @keyframes showAndHide {
    0%{
      opacity: 0;
    }
    45%{
      opacity: 1;
    }
    55%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }

  .box span{
    color: #fff;
    font-size: 15px;
  }
</style>
