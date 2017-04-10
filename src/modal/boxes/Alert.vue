<template>
    <div class="alert-box">
      <h1>{{ data.title }}</h1>
      <p> {{ data.message }}</p>
      <button @click="commit(true)"> OK </button>
      <button @click="commit(false)"> Cannel </button>
    </div>
</template>
<style>
  .alert-box {
    background-color: #EFEFEF;
    width: 200px;
  }
</style>
<script>
  import BaseBox from './BaseBox'
  export default{
    mixins: [BaseBox],
    components: {}
  }
</script>


