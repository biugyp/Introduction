<template>
    <div class="information">
        <div class="outerHeadPicture">
            <img src="../../assets/huangren.jpeg">
        </div>
        <div class="outerName">
            <h1 class="name">陈俊</h1>
        </div>
        <div class="outerIntro">
            <p class="intro">一个飞快爬行的前端攻城狮</p>
        </div>
        <div class="outerSchool">
            <p class="school">华南理工大学 软件学院</p>
        </div>
        <div class="outerEmail">
            <a class="email">chanchun2333@gmail</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'information',
  data () {
      return {

      } 
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/color";
  @import "../../assets/size";
.information{
    position: relative;
    .outerHeadPicture{
      height: 60%;
      width: 100%;
      margin: auto;
      position: absolute;
      top: 0; left: 0; bottom: 0; right: 0;    
      img{
          height: 200px;
          width: 200px;
          border-radius: 100px;
      } 
    }
    .outerName {
        height:15%;
        width:100%;
        margin:auto;
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
        .name{
            color:@font_color;
            font-size:3.5em;
            word-spacing:2em;
            text-shadow: 1px 2px #22c3aa, 2px 4px #aee2d9
        }
    }
    .outerIntro{
        height:10%;
        width:100%;
        margin:auto;
        position: absolute;
        top: 22%; left: 0; bottom: 0; right: 0;
        .intro{
            color:@intro_color;
            font-size:1.6em;
            word-spacing:2em;
            text-shadow: 0.5px 1px #22c3aa, 1px 2px #aee2d9
        }
    }
    .outerSchool{
        height:20%;
        width: 100%;
        margin:auto;
        position: absolute;
        top: 45%; left: 0; bottom: 0; right: 0;
        .school{
            color:@school_color;
            font-size:1.2em;
            keyword:2em;
            text-shadow: 0.5px 1px #22c3aa, 1px 2px #aee2d9
        }
    }
    .outerEmail{
        height:20%;
        width: 100%;
        margin:auto;
        position: absolute;
        top: 60%; left: 0; bottom: 0; right: 0;
        .email{
            color:@email_color;
            fon-size:1em;
            keyword:2em;
        }
    }
}
</style>