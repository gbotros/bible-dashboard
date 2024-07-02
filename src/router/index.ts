import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookView from '@/views/BookView.vue'
import NewWordsAppearanceView from '@/views/NewWordsAppearanceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:word',
      name: 'home',
      component: HomeView
    },
    {
      path: '/book-view/:bookName?',
      name: 'book',
      component: BookView
    },
    {
      path: '/new-words',
      name: 'newWords',
      component: NewWordsAppearanceView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'all',
      component: HomeView
    }
  ]
})

export default router
