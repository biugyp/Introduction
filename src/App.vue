<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app">
    <div class="container" v-on:mousewheel="mouseWheelEvent($event)" v-on:DOMMouseScroll="mouseWheelEvent($event)" v-on:tap="console.log(1)">
      <modal @show="blurStart" @hide="blurEnd"></modal>
      <leftNav class="leftNav" v-show="navShow" v-bind:handleScroll="routerPage" v-on:routerChange="routerChange"></leftNav>
      <router-view class="routerView"></router-view>
    </div>
  </div>
</template>

<script>
import leftNav from 'components/LeftNav'
import Modal from 'modal/Modal.vue'
import _ from 'lodash'
export default {
  name: 'app',
  data: function(){
    return{
      routerArray:['information','project','skill','communication'],
      routerPage:0,
      navShow:true,
      startY:-1,
      isBlur: false
    }
  },
  created(){
    this.dyShowNav();

    window.onresize=_.debounce(this.dyShowNav,50)

    this.routerPage=this.routerArray.indexOf(this.$route.path.slice(1))===-1?0:this.routerArray.indexOf(this.$route.path.slice(1))

    this.$router.beforeEach((to, from, next) => {
      this.routerPage=this.routerArray.indexOf(to.path.slice(1))===-1?0:this.routerArray.indexOf(to.path.slice(1))
      next()
    })
    
  },
  methods: {
    mouseWheelEvent:_.debounce(function(event){
          event.preventDefault();
          let eventUpDownJudge=event.wheelDelta||event.detail
          if(eventUpDownJudge<0){
            //下
            this.routerPage<3?this.routerPage++:this.routerPage=0
          }
          if(eventUpDownJudge>0){
            //上
            this.routerPage>0?this.routerPage--:this.routerPage=3
          }
          this.$router.push(this.routerArray[this.routerPage])
    },50),
    routerChange:function(num){
      this.routerPage=num
    },
    dyShowNav:function(){
      if(document.body.clientWidth<=760){
        this.navShow=false
      }else{
        this.navShow=true
      }
    }, 
    // touchStart:_.debounce(function(event){
    //    event.preventDefault();
    //    let touch=event.touches[0]
    //    this.startY = touch.pageY
    // },50),
    // touchMove:_.debounce(function(event){
    //   event.preventDefault()
    //   let touch = event.touches[0]          
    //   if(touch.pageY - this.startY<0){
    //     //上
    //     this.routerPage<3?this.routerPage++:this.routerPage=0
    //   }else if(touch.pageY - this.startY>0){
    //     //下
    //     this.routerPage>0?this.routerPage--:this.routerPage=3
    //   }
    //   this.$router.push(this.routerArray[this.routerPage])                                                        
    // },50),
    // touchEnd(event){
    //   event.preventDefault()
    //   this.startY=-1
    // },
    blurStart () {
        this.isBlur = true
    },
    blurEnd () {
        this.isBlur = false
    }
  },
  components: {
    leftNav,
    Modal
  }
}
</script>

<style lang="less">
 @import "/assets/color";
 @import "/assets/size";

@media screen and (max-device-width:760px){
  .leftNav{
    display: none;
  }
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*font-family: Lato,"Microsoft YaHei",sans-serif;*/
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
      width: 75%;
      height: 100%;

      min-width: 15em;

      overflow: auto;
      margin: auto;
      position: absolute;
      top: 0; left: 0; bottom: 15%; right: 0;
    }
  }
  }
  html, body {
  height:100%;
  width:100%;
  background-color: @main_background_color;
  overflow: hidden;
  margin: 0;
}
}


@media screen and (min-device-width:760px){
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*font-family: Lato,"Microsoft YaHei",sans-serif;*/
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
      width: 75%;
      height: 100%;
      min-width: 15em;

      overflow: auto;
      margin: auto;
      position: absolute;
      top: 10%; left: 0; bottom: 0; right: 0;
    }
  }
  }
  html, body {
  height:100%;
  width:100%;
  background-color: @main_background_color;
  overflow: hidden;
  margin: 0;
}
}


</style>
