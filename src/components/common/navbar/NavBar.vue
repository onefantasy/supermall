<template>
    <div class="nav-box">
      <div class="nav-box-left">
        <slot name="left"></slot>
      </div>
      <div class="nav-box-center">
        <slot name="center"></slot>
      </div>
      <div class="nav-box-right">
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {};
        },
        methods: {},
        components: {},
    }
</script>

<style scoped>
.nav-box{
  display: flex;
  width: 100%;
  height: 44px;
  position: fixed;
  top: 0;
  box-shadow: 0 1px 1px rgba(100,100,100,.3);
}
.nav-box-left,
.nav-box-center,
.nav-box-right{
  width: 60px;
  line-height: 44px;
}
.nav-box-center{
  text-align: center;
  flex: 1;
}
</style>
