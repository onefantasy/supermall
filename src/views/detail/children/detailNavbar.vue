<template>
  <NarBar>
    <div slot="left" class="title-left" @click="goBack"> < </div>
    <div slot="center" class="title-center">
      <div v-for="(item,index) in titles"
           class="title-center-item"
           :class="{active: current === index}"
           @click="titlesClick(index)">{{item}}</div>
    </div>
  </NarBar>
</template>

<script>
  import NarBar from 'components/common/navbar/NavBar'
  export default {
    name: "detailNavbar",
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        current: 0,
      };
    },
    methods: {
      // title center click
      titlesClick(index){
        this.current = index;
        this.$emit('itemClick',index);
      },
      // go back
      goBack(){
        this.$router.back();
      },
    },
    components: {
      NarBar,
    },
  }
</script>

<style scoped>
  .title-center{
    display: flex;
  }
  .title-center-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }

  .title-left{
    text-align: center;
    font-size: 40px;
  }
</style>
