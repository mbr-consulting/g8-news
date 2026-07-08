import type { RouteRecordRaw } from 'vue-router'
import PublicLayout from '../../shared/layouts/PublicLayout.vue'
import HomePage from '@/features/public/home/pages/HomePage.vue'
import PostPage from '@/features/public/post/pages/PostPage.vue'
import CitiesPage from '@/features/public/cities/pages/CitiesPage.vue'
import ConstructionsPage from '@/features/public/contructions/pages/ConstructionsPage.vue'
import ContactPage from '@/features/public/contact/pages/ContactPage.vue'
import CityPage from '@/features/public/city/pages/CityPage.vue'
import AnnouncementPage from '@/features/public/announcements/pages/AnnouncementPage.vue'
import BlogPage from '@/features/public/blog/pages/BlogPage.vue'
import LoginPage from '@/features/auth/pages/LoginPage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomePage,
      },
      {
        path: 'cidades',
        name: 'Cities',
        component: CitiesPage,
      },
      {
        path: 'cidades/:city',
        name: 'City',
        component: CityPage,
      },
      {
        path: 'cidades/:city/automotivo',
        name: 'CityAutomotive',
        component: AnnouncementPage,
      },
      {
        path: 'cidades/:city/imobiliario',
        name: 'CityRealEstate',
        component: AnnouncementPage,
      },
      {
        path: 'cidades/:city/hotelaria',
        name: 'CityHospitality',
        component: AnnouncementPage,
      },
      {
        path: 'g8-construcoes',
        name: 'Constructions',
        component: ConstructionsPage,
      },
      {
        path: 'fale-conosco',
        name: 'Contact',
        component: ContactPage,
      },
      {
        path: 'post/:slug',
        name: 'Post',
        component: PostPage,
      },
      {
        path: 'blog',
        name: 'Blog',
        component: BlogPage,
      },
    ],
  },
]
