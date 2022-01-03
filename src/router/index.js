import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/views/recommend'
import Search from '@/views/search'
import Singer from '@/views/singer'
import TopList from '@/views/top-list'
const routes = [
  { // 默认进入recommend页面
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  }, {
    path: '/singer',
    component: Singer
  }, {
    path: '/top-list',
    component: TopList
  }, {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
