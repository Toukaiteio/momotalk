import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'friendList',
    component: import('../components/mainBox_FriendList.vue')
  },
  {
    path: '/c',
    name: 'chatPage',
    component: import('../components/mainBox_ChatPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
