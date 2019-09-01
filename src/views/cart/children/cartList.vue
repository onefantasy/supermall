<template>
    <div class="box">
      <ul class="ul">
        <li class="lis" v-for="(item,index) in cartList"><cartListItem :item="item"></cartListItem></li>
      </ul>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import cartListItem from './cartListItem'

  export default {
    name: "cartList",
    data() {
      return {};
    },
    computed:{
      ...mapGetters([
        'cartList',
      ]),
    },
    methods: {},
    components: {
      cartListItem,
    },
  }
</script>

<style scoped>
  .box{
    width: 100%;
  }

  .ul{
    width: 100%;
  }

  .lis{
    width: 100%;
    word-wrap: break-word;
    border-bottom: 2px solid #eee;
  }

  li + li{
    margin-top: 10px;
  }

</style>
