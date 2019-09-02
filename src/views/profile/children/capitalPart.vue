<template>
  <div class="capital-part-box">
    <capitalPartItem :data="data"></capitalPartItem>
  </div>
</template>

<script>
  import capitalPartItem from './capitalPartItem'

  export default {
    name: "capitalPart",
    props:{
      data:{
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
    components: {
      capitalPartItem,
    },
  }
</script>

<style scoped>

  .capital-part-box{
     border-top: 8px solid #eee;
  }
</style>
