<template>
  <div class="communication">
    <div class="comContainer">
      <h1 class="comTitle">联系我</h1>
      <a href="https://github.com/Chan-Chun">Github</a>
      <a class="divider">|</a>
      <a href="http://chanchun.com.cn">个人主页</a>
      <div class="email">
        Email: <span href="chanchun2333@gmail.com">chanchun2333@gmail.com</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'communication',
    data() {
      return {

      }
    }
  }

</script>
<style lang="less" scoped>
  @import "../../assets/color";
  @import "../../assets/size";
  .communication {
    position: relative;
    .comContainer {
      position: absolute;
      height: 50%;
      width: 100%;
      margin: auto;
      position: absolute;
      top: 5%;
      left: 0;
      bottom: 0;
      right: 0;
      .comTitle {
        color: @font_color;
        font-size: 3em;
        text-shadow: 1px 2px #22c3aa, 2px 4px #aee2d9;
        margin: 0.5em auto;
      }
      a {
        color: @font_color;
        text-decoration: none;
        font-size: 1.7em;
        font-weight: 800;
        text-shadow: 0.5px 1px #22c3aa, 1px 2px #aee2d9;
      }
      a:hover {
        color: @hover_color;
        text-shadow: 0.5px 1px #22c3aa, 1px 2px #aee2d9;
      }
      .email {
          margin:3%;
          color:@hover_color;
          font-weight: border;
          font-size: 1.05em;
        span {
          color: @font_color;
          font-size: 1.05em;
          font-weight: border;
          text-shadow: 0.1px 0.3px #22c3aa, 0.4px 1px #aee2d9;
        }
      }
    }
  }

</style>
