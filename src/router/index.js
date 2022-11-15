import Vue from 'vue'
import Router from 'vue-router'

// 1. 创建路由组件
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Breakfast from '../views/Breakfast.vue'
import Lunch from '../views/Lunch.vue'
import Dinner from '../views/Dinner.vue'

Vue.use(Router)

// 2. 将路由与组件进行映射
const routes = [
  // 主路由
  {
    path: '/',
    component: Main,
    redirect: '/home',
    children: [
      {
        // 当 /home 匹配成功，
        // Home 会被渲染在 Main 的 <router-view> 中
        path: 'home',
        component: Home
      },
      {
        // 当 /user 匹配成功
        // User 会被渲染在 Main 的 <router-view> 中
        path: 'user',
        component: User
      },
      {
        // 当 /breakfast 匹配成功
        // Breakfast 会被渲染在 Main 的 <router-view> 中
        path: 'breakfast',
        component: Breakfast
      },
      {
        // 当 /lunch 匹配成功
        // Lunch 会被渲染在 Main 的 <router-view> 中
        path: 'lunch',
        component: Lunch
      },
      {
        // 当 /dinner 匹配成功
        // Dinner 会被渲染在 Main 的 <router-view> 中
        path: 'dinner',
        component: Dinner
      }
    ]
  }
]

// 3. 创建 router 实例
const router = new Router({
  routes: routes
})

export default router