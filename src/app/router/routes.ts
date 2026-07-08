import type { RouteRecordRaw } from 'vue-router'
import PublicLayout from '../../shared/layouts/PublicLayout.vue'
import HomePage from '@/features/home/pages/HomePage.vue'
import PostPage from '@/features/post/pages/PostPage.vue'
import CitiesPage from '@/features/cities/pages/CitiesPage.vue'
import ConstructionsPage from '@/features/contructions/pages/ConstructionsPage.vue'
import ContactPage from '@/features/contact/pages/ContactPage.vue'
import CityPage from '@/features/city/pages/CityPage.vue'
import AnnouncementPage from '@/features/announcements/pages/AnnouncementPage.vue'
import BlogPage from '@/features/blog/pages/BlogPage.vue'

export const routes: RouteRecordRaw[] = [
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
