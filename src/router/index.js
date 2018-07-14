import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Navi from '@/navi/index.vue'
import det from '@/navi/det.vue'
import ajax from '@/ajax/ajax.vue'
import echarts from '@/echarts/echarts.vue'
import element from '@/elementUi/index.vue'
import future from '@/note/future.vue'
import in1 from '@/exam/in.vue'
import in2 from '@/exam/in2.vue'

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
          path: '/in',
          name: 'in',
          component: in1
        },
        {
          path: '/in2',
          name: 'in2',
          component: in2
        }
      ]
    }
  ]
})
