import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'

Vue.use(Router)

export default new Router({
  routes: [
    // 主页
    {
      path: '',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          component: () => import('@/views/home/HomeIndex')
        }
      ]
    }
  ]
})
