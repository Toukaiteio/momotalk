import { createRouter, createMemoryHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Flist from '../components/mainBox_FriendList.vue'
import Clist from '../components/mainBox_ChatPage.vue'
const routes = [
  {
    path: '/',
    name: 'friendList',
    component: Flist
  },
  {
    path: '/c',
    name: 'chatPage',
    component: Clist
  }
]

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  routes
})

export default router
