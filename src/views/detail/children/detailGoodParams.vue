<template>
    <div v-if="goodParams" class="params-box">
      <div v-for="item in goodParams" class="param-item">
        <div class="key">{{item.key}}</div>
        <div class="value">{{item.value}}</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "detailGoodParams",
    props:{
      goodParams:{
        type: Array,
        default(){
          return undefined;
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
  .params-box{
    width: 100%;
    padding: 20px 10px;
    border-bottom: 3px solid #eee;
  }
  .param-item{
    display: flex;
    line-height: 40px;
    font-size: 15px;
    border-bottom: 2px solid #eee;
  }
  .key{
    flex: 1;
  }
  .value{
    flex: 3;
    color: var(--color-high-text);
  }
</style>
