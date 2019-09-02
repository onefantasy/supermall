<template>
  <div class="capital-item">
    <div><span>{{num}}</span>{{unit}}</div>
    <div>{{title}}</div>
  </div>
</template>

<script>
  export default {
    name: "capitalItem",
    props:{
      title:{
        type:String,
        default:''
      },
      num:{
        type: Number,
        default: 0,
      },
      unit:{
        type: String,
        default: '元'
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

  .capital-item{
    text-align: center;
    padding-top: 42px;
  }
  .capital-item div span{
    color: red;
    font-size: 25px;
  }
</style>
