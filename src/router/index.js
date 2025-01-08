import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamsView from '@/views/TeamsView.vue'
import TeamView from '@/views/TeamDetailsView.vue'
import AddTeamView from '@/views/AddTeamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsView,
    },
    {
      path: '/teams/:teamId',
      name: 'team',
      component: TeamView,
    },
    {
      path: '/addteam',
      name: 'addteam',
      component: AddTeamView,
    }
  ],
})

export default router
