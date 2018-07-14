import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Navi from '@/navi/index.vue'
import det from '@/navi/det.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/navi',
      name: 'navi',
      component: Navi
    },
    {
      path: '/det',
      name: 'det',
      component: det
    }
  ]
})
