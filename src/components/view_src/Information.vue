<template>
  <div class="information">
    <div class="outerInfoContainer">
      <img src="../../assets/huangren.jpeg">
      <h1 class="name">{{name}}</h1>
      <p class="intro">{{intro}}</p>
      <p class="school">{{school}}</p>
      <a class="email">{{email}}</p>
    </div>
    </div>
</template>

<script>
export default {
  name: 'information',
  data () {
      return {
          name:'陈俊',
          intro:'一飞快爬行的前端攻城狮',
          school:'华南理工大学 软件学院',
          email:'chanchun2333@gmail.com'
      } 
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/color";
  @import "../../assets/size";
.information{
    position: relative;
    .outerInfoContainer{
    position: absolute;
    height: 50%;
    width: 100%;
      margin: auto;
      position: absolute;
      top: 0; left: 0; bottom: 0%; right: 0;         
      img{
          height: 180px;
          width: 180px;
          border-radius: 90px;
      } 
        .name{
            color:@font_color;
            font-size:3.2em;
            text-shadow: 1px 2px #22c3aa, 2px 4px #aee2d9;
            margin: 0.25em auto;
        }
            .intro{
            color:@intro_color;
            font-size:1.45em;
            text-shadow: 0.5px 1px #22c3aa, 1px 2px #aee2d9;
            margin: 0.25em auto;
        }
        .school{
            color:@school_color;
            font-size:1.2em;
            text-shadow: 0.5px 1px #22c3aa, 1px 2px #aee2d9;
            margin: 0.25em auto;
        }
            .email{
            color:@email_color;
            font-size:1em;
        }    
    }
}
</style>
