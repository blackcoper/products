import Vue from 'vue'
import Router from 'vue-router'
import List from '../views/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    }
  ]
})