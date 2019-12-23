/*
 * @Author: 邹中兴
 * @Date: 2019-12-20 14:16:07
 * @LastEditors  : 邹中兴
 * @LastEditTime : 2019-12-23 10:12:00
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../mobile/index.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/mobile',
    name: 'mobile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "mobile_index" */ '../mobile/index.vue')
  },
  {
    path: '/pc',
    name: 'pc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pc_index" */ '../pc/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
