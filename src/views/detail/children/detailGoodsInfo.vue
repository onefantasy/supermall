<template>
    <div v-if="infoImg" class="info-box">
      <div v-for="item in infoImg" class="imgInfoItem">
        <img :src="item" alt="" @load="imgLoad">
      </div>
    </div>
</template>

<script>
  export default {
    name: "detailGoodsInfo",
    props:{
      infoImg:{
        type: Array,
        default() {
          return undefined;
        }
      },
    },
    data() {
      return {
        imgLength: 0,
        count: 0,
      };
    },
    watch:{
      infoImg(){
        this.imgLength = this.infoImg.length;
      }
    },
    methods: {
      imgLoad() {
        // 节流函数
        // 发射图片加载完成事件，用于刷新可滚动的长度
        if(++this.count === this.imgLength)
          this.$emit('infoImgLoad');
      }
    },
    components: {},
  }
</script>

<style scoped>
  .imgInfoItem img{
    width: 100%;
  }
  .info-box{
    padding-bottom: 5px;
    border-bottom: 3px solid #eee;
  }

</style>
