<template>
  <div class="part-item-box">
    <div v-for="item of content" class="part-item">
      <div class="part-item-img">
        <img :src="item.img" alt="">
      </div>
      <div class="part-item-word">{{item.word}}</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "capitalPartItem",
    props:{
      data:{
        type:Array,
        default(){
          return [
            {img:"part.jpg",word:"我的消息"},
            {img:"part.jpg",word:"积分商城"},
            {img:"part.jpg",word:"会员卡"}
          ]
        },
      },
    },
    data() {
      return {};
    },
    computed:{
      content(){
        let arr = [];
        this.data.forEach(item => {
          arr.push({
            // img: require('assets/img/category/'+item.img),
            img: require('assets/img/category/'+item.img),
            word: item.word
          });
        });
        return arr;
      },
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>
  .part-item-box{
    position: relative;
    z-index: 10;
  }


  .part-item{
    display: flex;
  }

  .part-item-img{
    width: 40px;
    padding: 5px;
  }
  .part-item-img img{
    width: 30px;
  }
  
  .part-item-word{
    flex: 1;
    line-height: 40px;
    border-bottom: 2px solid #eee;
    font-size: 18px;
  }
  .part-item:last-child .part-item-word{
    border: none;
  }
</style>
