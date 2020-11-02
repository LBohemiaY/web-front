import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'

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
          name: 'homeIndex',
          component: () => import('@/views/home/HomeIndex')
        },
        {
          path: '/noticeBoard',
          name: 'noticeBoard',
          component: () => import('@/views/common/NoticeBoard')
        },
        {
          path: '/log',
          name: 'log',
          component: () => import('@/views/common/Log')
        }
      ]
    }
  ]
})
