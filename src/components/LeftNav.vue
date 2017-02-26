<template>
    <div class="leftNav">
        <div class="outerSvg">
          <img src="../assets/wxb主页.svg" alt="主页">
        </div>
        <div class="outerSvg">
          <img src="../assets/iconfont-xingxing.svg" alt="项目">
        </div>
        <div class="outerSvg">
          <img src="../assets/wxb工具.svg" alt="技能">
        </div>
        <div class="outerSvg">
          <img src="../assets/iconfont-mingpian.svg" alt="联系">
        </div>
    </div>
</template>

<script>
export default {
  name: 'leftNav',
  data () {
      return {

      }
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/color";
  @import "../assets/size";
  .leftNav {
    height:50%;
    width:5%;

    min-width:5em; 

    border: 1px solid black;
    border-radius: @leftBorderR;
    overflow: auto;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 87%;
  }
</style>
