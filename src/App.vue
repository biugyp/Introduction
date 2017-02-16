<template>
  <div id="app">
    <leftNav class="leftNav"></leftNav>
    <router-view class="routerView"></router-view>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  height: inherit;
}

html, body {
  height:100%;  
  width:100%;
  background-color: ghostwhite;
  overflow: hidden;
}

.leftNav{
  position: absolute;
  border: 1px solid black;
}

.routerView{
  height: 70%;
  width: 70%;
  border:1px solid black;
}

</style>
