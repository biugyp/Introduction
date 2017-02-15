import Vue from 'vue'
import Router from 'vue-router'
// import Hello from 'components/Hello'
import Information from 'components/view_src/Information'
import Project from 'components/view_src/Project'
import Skill from 'components/view_src/Skill'
import Communication from 'components/view_src/Communication'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/',
      name: 'InformationIndex',
      component: Information
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/communication',
      name: 'Communication',
      component: Communication
    }
  ]
})
