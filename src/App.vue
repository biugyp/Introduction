<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app">
    <div class="container" v-on:mousewheel="mouseWheelEvent($event)" v-on:DOMMouseScroll="mouseWheelEvent($event)">
      <leftNav class="leftNav" v-show="navShow"></leftNav>
      <router-view class="routerView"></router-view>
    </div>
  </div>
</template>

<script>
import leftNav from 'components/LeftNav'
import _ from 'lodash'
export default {
  name: 'app',
  data: function(){
    return{
      routerArray:['information','project','skill','communication'],
      routerPage:0,
      navShow:true
    }
  },
  created(){
    let _this=this;
    window.onresize=_.debounce(function(){
      console.log(1)
      if(document.body.clientWidth<=760){
        _this.navShow=false;
      }else{
        _this.navShow=true
      }
    },50)
  },
  methods: {
    mouseWheelEvent:_.debounce(function(event){
          let eventUpDownJudge=event.wheelDelta||event.detail
          if(eventUpDownJudge>0){
            //下
            this.routerPage<3?this.routerPage++:this.routerPage=0
            console.log(1)
          }else if(eventUpDownJudge<0){
            //上
            this.routerPage>0?this.routerPage--:this.routerPage=3
            console.log(-1)
          }
          this.$router.push(this.routerArray[this.routerPage])
          //
    },150)
  },
  components: {
    leftNav
  }
}
</script>

<style lang="less">

@media screen and (max-device-width:760px){
  .leftNav{
    display: none;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  height: inherit;
  min-height: 568px;

  .container{
    height: inherit;
    position: relative;

    .routerView {
      border: 1px solid black;
      width: 75%;
      height: 85%;

      min-width: 15em;

      overflow: auto;
      margin: auto;
      position: absolute;
      top: 0; left: 0; bottom: 0; right: 0;
    }
  }
}

html, body {
  height:100%;
  width:100%;
  background-color: ghostwhite;
  overflow: hidden;
  margin: 0;
}




</style>
