<template>
  <ul v-if="data">
    <li v-for="(item,index) of data" :class="{active: current === index}" @click="titleClick(index)">{{item.key}}</li>
  </ul>
</template>

<script>
  export default {
    name: "categoryList",
    props:{
      data:{
        type: Array,
        default(){
          return undefined;
        }
      },
    },
    data() {
      return {
        current: 0,
      };
    },
    updated(){},
    methods: {
      titleClick(index){
        this.current = index;
        // 通知父组件当前被点击的分类
        this.$emit('listClick',index);
      },
    },
    components: {},
  }
</script>

<style scoped>
 ul li{
    font-size: 15px;
    line-height: 40px;
    background-color: #eee;
  }
 ul .active{
    color: var(--color-high-text);
    background-color: #ffffff;
    border-left: 3px solid red;
  }

</style>
