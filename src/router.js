import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/caritems',
      name: 'caritems',
      component: () => import(/* webpackChunkName: "caritems" */ './views/caritems.vue')
    },
    {
      path: '/sportitems',
      name: 'sportitems',
      component: () => import(/* webpackChunkName: "sportitems" */ './views/sportitems.vue')
    },
    {
      path: '/fooditems',
      name: 'fooditems',
      component: () => import(/* webpackChunkName: "fooditems" */ './views/fooditems.vue')
    },
    {
      path: '/homeitems',
      name: 'homeitems',
      component: () => import(/* webpackChunkName: "homeitems" */ './views/homeitems.vue')
    },
    {
      path: '/caritemsform',
      name: 'caritemsform',
      component: () => import(/* webpackChunkName: "caritemsform" */ './views/caritemsform.vue')
    },
    {
      path: '/sportitemsform',
      name: 'sportitemsform',
      component: () => import(/* webpackChunkName: "caritemsform" */ './views/caritemsform.vue')
    },
    {
      path: '/fooditemsform',
      name: 'fooditemsform',
      component: () => import(/* webpackChunkName: "fooditemsform" */ './views/fooditemsform.vue')
    },
    {
      path: '/homeitemsform',
      name: 'homeitemsform',
      component: () => import(/* webpackChunkName: "homeitemsform" */ './views/homeitemsform.vue')
    }
  ]
})
