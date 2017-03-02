<template>
  <div class="skill">
    <div class="outerSkillContainer">
      <h1 class="skillBarTitle">擅长技术</h1>
      <div class="skillPanel">  
          <div class="skillItem" v-for="(item,index) in skillOne"  v-bind:class="{master:0<=index,familiar:3<=index,know:4<=index}">{{item}}</div>
      </div>
      <div class="skillPanel">
          <div class="skillItem" v-for="(item,index) in skillTwo" v-bind:class="{master:0<=index,familiar:1<=index,know:2<=index}">{{item}}</div>
      </div>
      <div class="skillPanel">
          <div class="skillItem" v-for="(item,index) in skillThree" v-bind:class="{master:0<=index,familiar:0<=index,know:1<=index}">{{item}}</div>
      </div>
      <div class="skillPanel">
          <div class="skillItem" v-for="(item,index) in skillFour" v-bind:class="{master:0<=index,familiar:1<=index,know:2<=index}">{{item}}</div>
      </div>
      <div class="skillPanel">
          <div class="skillItem" v-for="(item,index) in skillFive" v-bind:class="{master:0<=index,familiar:0<=index,know:false}">{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'skill',
    data() {
      return {
          skillOne:["HTML","CSS","Javascript","jQuery","ES6",'Less'],
          skillTwo:["Vue.js","组件模块开发","Angular.js"],
          skillThree:["MongoDB","SQLite3"],
          skillFour:["Git","Webpack","Grunt"],
          skillFive:["Node.js","Express"]
      }
    }
  }

</script>
<style lang="less" scoped>
  @import "../../assets/color";
  @import "../../assets/size";

.master{
    background-color: @skill_item_background_color_master;
}

.familiar{
    background-color:@skill_item_background_color_familiar;
}

.know{
    background-color: @skill_item_background_color_know;
}

.skill{
    position: relative;
    .outerSkillContainer{
        position: absolute;
        height: 50%;
        width: 100%;
        margin: auto;
        position: absolute;
        top: 0%; left: 0; bottom: 0%; right: 0;
        .skillBarTitle{
            color:@font_color;
            font-size:3em;
            text-shadow: 1px 2px #22c3aa, 2px 4px #aee2d9;
            margin: 0.5em auto;
        }
        .skillPanel{
            .skillItem{
                margin: 4px;
                font-size:1.25em;
                display:inline-block;
                padding: 2px 8px;
                color:@skill_item_color;
                border-radius:@skillItemR;           
            }
        }
    }   
}

</style>
