<template>
  <div class="proflie-box">
    <!--导航栏-->
    <NavBar class="proflie-title">
      <div slot="center">我的档案</div>
    </NavBar>

    <!--主要部分的内容-->
    <Scroll class="content">
      <personInfo></personInfo>
      <capital></capital>
      <capitalPart></capitalPart>
      <capitalPart :data="capitalPartData"></capitalPart>
    </Scroll>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import capitalPart from './children/capitalPart'
  import personInfo from './children/personInfo'
  import capital from './children/capital'

  export default {
    name: "profile",
    data() {
      return {
        capitalPartData:[
          {img:"part.jpg",word:"我的购物车"},
          {img:"part.jpg",word:"下载购物APP"}
        ],
      };
    },
    methods: {},
    components: {
      NavBar,
      Scroll,
      capitalPart,
      personInfo,
      capital,
    },
  }
</script>

<style scoped>

  .proflie-box{
    height: 100vh;
  }

  .proflie-title{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
