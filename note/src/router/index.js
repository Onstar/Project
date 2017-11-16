import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Side from '@/components/Side'
import Commit from '@/components/Commit'
import Notelist from '@/components/Notelist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Header
    },
    {
      path: '/Header',
      name: 'HelloWorld',
      component: Header
    },
    {
      path: '/Side',
      name: 'HelloWorld',
      component: Side
    },
    {
      path: '/Commit',
      name: 'HelloWorld',
      component: Commit
    },
    {
      path: '/Notelist',
      name: 'HelloWorld',
      component: Notelist
    },
  ]
})
