<template>
  <div class="tabBarItem" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
          path: String,
          activeColor: {
            type: String,
            default: 'red',
          },
        },
        data() {
            return {
              // isActive: true,
            };
        },
        computed:{
          isActive(){
            return this.$route.path.indexOf(this.path) !== -1;
          },
          activeStyle(){
            return this.isActive ? {color: this.activeColor} : {};
          },
        },
        methods: {
          itemClick(){
            if(this.path !== this.$route.path)
              this.$router.push(this.path);
            // this.$route.push(this.path);
          },
        },
        components: {},
    }
</script>

<style scoped>
  .tabBarItem{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    padding-top: 5px;
  }
  .tabBarItem img{
    width: 20px;
    height: 20px;
  }
</style>
