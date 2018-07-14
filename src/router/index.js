import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Navi from '@/navi/index.vue'
import det from '@/navi/det.vue'
import ajax from '@/ajax/ajax.vue'
import echarts from '@/echarts/echarts.vue'
import element from '@/elementUi/index.vue'

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
    },
    {
      path: '/ajax',
      name: 'ajax',
      component: ajax
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/element',
      name: 'element',
      component: element
    }
  ]
})
