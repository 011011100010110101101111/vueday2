import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Navi from '@/navi/index.vue'
import det from '@/navi/det.vue'
import ajax from '@/ajax/ajax.vue'
import echarts from '@/echarts/echarts.vue'
import element from '@/elementUi/index.vue'
import future from '@/note/future.vue'
import webFramwork from '@/note/webFramwork.vue'
import noteIndex from  '@/note/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
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
      path: '/',
      name: 'index',
      component: element,
      children: [
        {
          path: '/echarts',
          name: 'echarts',
          component: echarts
        },
        {
          path: '/future',
          name: 'future',
          component: future
        },
        {
          path: '/webFramwork',
          name: 'webFramwork',
          component: webFramwork
        },
        {
          path: '',
          name: 'noteIndex',
          component: noteIndex
        }
      ]
    }
  ]
})
