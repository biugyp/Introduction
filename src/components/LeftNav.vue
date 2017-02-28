<template>
  <div class="leftNav">
    <div class="outerSvg">
      <div class="outerShadow" v-bind:class="{shadow:ifIconShadow===0}" v-on:click="iconClick(0)">
        <img src="../assets/home.svg" alt="主页">
      </div>
    </div>
    <div class="outerSvg">
      <div class="outerShadow" v-bind:class="{shadow:ifIconShadow===1}" v-on:click="iconClick(1)">
        <img src="../assets/project.svg" alt="项目">
      </div>
    </div>
    <div class="outerSvg">
      <div class="outerShadow" v-bind:class="{shadow:ifIconShadow===2}" v-on:click="iconClick(2)">
        <img src="../assets/skill.svg" alt="技能">
      </div>
    </div>
    <div class="outerSvg">
      <div class="outerShadow" v-bind:class="{shadow:ifIconShadow===3}" v-on:click="iconClick(3)">
        <img src="../assets/com.svg" alt="联系">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'leftNav',
    props: ['handleScroll'],
    data() {
      return {
        ifIconShadow: this.handleScroll,
        routerArray:['information','project','skill','communication']
      }
    },
    watch:{
      handleScroll:function (){
        this.ifIconShadow=this.handleScroll
      }
    },
    methods: {
      iconClick: function (num) {
        this.ifIconShadow=num
        this.$emit('routerChange',num)
        this.$router.push(this.routerArray[num])
      }
    }
  }

</script>
<style lang="less" scoped>
  @import "../assets/color";
  @import "../assets/size";
  .shadow {
    background-color: @left_button_color;
    

    filter:alpha(opacity=90);         
    -moz-opacity:0.9;              
    -khtml-opacity:0.9;              
    opacity: 0.9;         
    
  }
  
  .leftNav {
    height: 50%;
    width: 5%;
    min-width: 5em;
    border-radius: @leftBorderR;
    background-color:@left_background_color;
    overflow: auto;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 87%;
    .outerSvg {
      margin: 0 auto;
      width: 80%;
      height: 25%;
      position: relative;
      .outerShadow {
        cursor: pointer;
        width: 55px;
        height: 55px;
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        border-radius: @iconBorderR;
        img {
          width: 70%;
          height: 70%;
          margin: auto;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          position: absolute;
          z-index: 1;
        }
      }
    }
  }

</style>
