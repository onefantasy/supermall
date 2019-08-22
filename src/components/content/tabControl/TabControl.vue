<template>
    <div class="tab-control-box">
      <div v-for="(item,index) in title" class="tab-control-item" :class="{active: current === index}" @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "TabControl",
      props:{
        title:{
          type: Array,
          default(){
            return [];
          }
        },
      },
      data() {
        return {
          current: 0,
        };
      },
      methods: {
        itemClick(index){
          this.current = index;
          this.$emit('changeIndex',index);
        },
      },
      components: {},
    }
</script>

<style scoped>
  .tab-control-box{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
    /*border-bottom: 2px solid var(--color-tint);*/
  }
  .active span{
    border-bottom: 2px solid var(--color-tint);
  }

</style>
