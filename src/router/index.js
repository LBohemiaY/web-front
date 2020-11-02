import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'

import {Message} from 'element-ui';

import store from '@/store'
import {getToken} from '@/request/token'

Vue.use(Router)

const router = new Router({
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
    },
    //登录
    {
      path : '/login',
      name : 'login',
      component : () => import('@/views/common/Login')
    },
    //注册
    {
      path : '/register',
      name : 'register',
      component : () => import('@/views/common/Register')
    },
    //写文章
    {
      path: '/write/:id?',
      component: () => import('@/views/blog/BlogWrite'),
      meta: {
        requireLogin: true
      },
    },

  ]
})

/**
 * router在切换前的token验证
 * 部分页面必须登录才能进行
 */
router.beforeEach((to, from, next) => {

  if (getToken()) {

    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (store.state.account.length === 0) {
        store.dispatch('getUserInfo').then(data => { //获取用户信息
          next()
        }).catch(() => {
          next({path: '/'})
        })
      } else {
        next()
      }
    }
  } else {
    if (to.matched.some(r => r.meta.requireLogin)) {
      Message({
        type: 'warning',
        showClose: true,
        message: '请先登录哦'
      })

    }
    else {
      next();
    }
  }
})

export default router
