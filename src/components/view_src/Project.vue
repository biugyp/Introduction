<template>
  <div class="project">
    <div class="projectContainer">
      <h1 class="projectTitle">项目经历</h1>
      <div class="projectItem" v-bind:style="{width:itemWidth}">
        <a class="projectItemTitle">狼人岛游戏网页前端</a>
        <p class="projectItemInfo">Vue.js生态环境实现的狼人游戏网页前端</p>
      </div>
      <div class="projectItem" v-bind:style="{width:itemWidth}">
        <a class="projectItemTitle">广州中佰会议系统</a>
        <p class="projectItemInfo">Axure+BootStrap+jQuery快速搭建网页</p>
      </div>
      <div class="projectItem" v-bind:style="{width:itemWidth}">
        <a class="projectItemTitle">个人网页简历</a>
        <p class="projectItemInfo">Vue.js实现的屏幕适配网页简历</p>
      </div>
      <div class="projectItem" v-bind:style="{width:itemWidth}">
        <a class="projectItemTitle">Github小项目</a>
        <p class="projectItemInfo"><a href="https://github.com/Chan-Chun/Cellular-Automaton">Cellular-Automaton</a><a> | </a><a href="https://github.com/Chan-Chun/cc-audiobuffer">cc-audiobuffer</a></p>
      </div>
    </div>
  </div>
</template>
<script>
  import _ from 'lodash'
  export default {
    name: 'project',
    data() {
      return {
        itemWidth: '50%'
      }
    },
    created() {

      this.dyShowNav();

      window.onresize = _.debounce(this.dyShowNav, 50)
    },
    methods: {
      dyShowNav: function () {
        if (document.body.clientWidth <= 760) {
          this.itemWidth = "100%"
        } else {
          this.itemWidth = "50%"
        }
      }
    }
  }

</script>
<style lang="less" scoped>
  @import "../../assets/color";
  @import "../../assets/size";
  @media screen and (max-device-width:760px) {
   .project {
      position: relative;
      .projectContainer {
        overflow: hidden;
        position: absolute;
        height: 70%;
        width: 100%;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0%;
        right: 0;
        .projectTitle {
          color: @font_color;
          font-size: 3em;
          text-shadow: 1px 2px #22c3aa, 2px 4px #aee2d9;
          margin: 0.5em auto;
        }
        .projectItem {
          position: relative;
          float: left;
          width: 100%;
          text-align: left;
          margin: 2% 0;
          .projectItemTitle {
            color: @font_color;
            font-size: 2em;
            font-weight: 900;
            text-shadow: 0.1px 0.3px #22c3aa, 0.4px 1px #aee2d9;
          }
          .projectItemInfo {
            color: @project_inf_color;
            font-size: 1.3em;
            font-weight: bold;
            a {
              color: @project_inf_color;
              text-decoration: none;
              font-size: 1.3em;
              font-weight: bold;
            }
            a:hover {
              color: @hover_color;
            }
          }
        }
      }
    }
  }
  
  @media screen and (min-device-width:760px) {
    .project {
      position: relative;
      .projectContainer {
        overflow: hidden;
        position: absolute;
        height: 70%;
        width: 100%;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0%;
        right: 0;
        .projectTitle {
          color: @font_color;
          font-size: 3em;
          text-shadow: 1px 2px #22c3aa, 2px 4px #aee2d9;
          margin: 0.5em auto;
        }
        .projectItem {
          position: relative;
          left:5%;
          float: left;
          width: 50%;
          text-align: left;
          margin: 2% 0;
          .projectItemTitle {
            color: @font_color;
            font-size: 2em;
            font-weight: 900;
            text-shadow: 0.1px 0.3px #22c3aa, 0.4px 1px #aee2d9;
          }
          .projectItemInfo {
            color: @project_inf_color;
            font-size: 1.3em;
            font-weight: bold;
            a {
              color: @project_inf_color;
              text-decoration: none;
              font-size: 1.3em;
              font-weight: bold;
            }
            a:hover {
              color: @hover_color;
            }
          }
        }
      }
    }
  }

</style>
