<template>
  <div v-if="comment" class="comment-box">
    <div class="comment-title">
      <span>用户评价</span>
      <span class="right">更多</span>
    </div>
    <div class="comment-item">
      <div class="user">
        <div class="userImg"><img :src="comment.userImg" alt=""></div>
        <div class="username">{{comment.username}}</div>
      </div>
      <div class="content">
        <div class="word">{{comment.content}}</div>
        <div class="buyInfo">
          <span>{{comment.buyInfo[0]}}&nbsp</span>
          <span>颜色：{{comment.buyInfo[1]}}&nbsp</span>
          <span>尺码：{{comment.buyInfo[2]}}</span>
        </div>
      </div>
      <div class="photo" v-if="!(comment.buyImg.length === 0)">
        <img v-for="item in comment.buyImg" :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userComment",
    props:{
      comment: {
        type: Object,
        default(){
          return undefined;
        },
      },
    },
    data() {
      return {};
    },
    methods: {},
    components: {},
  }
</script>

<style scoped>
  .comment-box{
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border-bottom: 3px solid #eee;
  }
  .comment-title{
    line-height: 40px;
    font-size: 15px;
    border-bottom: 2px solid #eee;
  }

  .user{
    display: flex;
    padding-top: 15px;
  }
  .userImg img{
    height: 50px;
    border-radius: 50%;
  }
  .username{
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
    font-size: 17px;
  }

  .content{
    padding: 5px;
  }
  .word{
    font-size: 15px;
  }
  .buyInfo{
    line-height: 30px;
    font-size: 13px;
  }

  .photo img{
    height: 70px;
    padding-right: 10px;
  }

</style>
