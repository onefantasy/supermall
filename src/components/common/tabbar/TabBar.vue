<template>
  <div id="tabBarBox">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar",
        data() {
            return {};
        },
        methods: {},
        components: {},
    }
</script>

<style scoped>
  #tabBarBox{
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 0 1px 5px rgba(100,100,100,.6);
  }

</style>
