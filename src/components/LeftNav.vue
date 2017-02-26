<template>
    <div class="leftNav">
        leftNav
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
    width:10%;
    border: 1px solid black;
    border-radius: @leftBorderR;
    overflow: auto;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 80%;
  }
</style>
