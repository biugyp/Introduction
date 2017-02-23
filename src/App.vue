<template>
  <div id="app">
    <div class="container">
      <leftNav class="leftNav"></leftNav>
      <router-view class="routerView"></router-view>
    </div>
  </div>
</template>

<script>
import leftNav from 'components/LeftNav'
export default {
  name: 'app',
  components: {
    leftNav
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  height: inherit;

  .container{
    height: inherit;
    position: relative;
    .leftNav {
      height:50%;
      width:10%;
      border: 1px solid black;
      overflow: auto;
      margin: auto;
      position: absolute;
      top: 0; left: 0; bottom: 0; right: 80%;
    }

    .routerView {
      border: 1px solid black;
      width: 60%;
      height: 70%;
      overflow: auto;
      margin: auto;
      position: absolute;
      top: 0; left: 10%; bottom: 0; right: 0;
    }
  }
}

html, body {
  height:100%;
  width:100%;
  background-color: ghostwhite;
  overflow: hidden;
}



</style>
