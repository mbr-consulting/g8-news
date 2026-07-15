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
import PanelLayout from '@/shared/layouts/PanelLayout.vue'
import {
  PanelDashboardPage,
  PanelPostsPage,
  PanelAdsPage,
  // PanelCitiesPage,
  PanelUsersPage,
  PanelUsersForm,
} from '@/features/panel/index.ts'
import PostForm from '@/features/panel/modules/posts/pages/PostForm.vue'
// import CitiesForm from '@/features/panel/modules/cities/pages/CitiesForm.vue'
import AdsForm from '@/features/panel/modules/ads/pages/AdsForm.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  // Public routes
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
  // Panel routes
  {
    path: '/panel',
    name: 'Panel',
    component: PanelLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: PanelDashboardPage,
      },
      {
        path: 'posts',
        name: 'Posts',
        component: PanelPostsPage,
      },
      {
        path: 'posts/create',
        name: 'CreatePost',
        component: PostForm,
      },
      {
        path: 'ads',
        name: 'Ads',
        component: PanelAdsPage,
      },
      {
        path: 'ads/create',
        name: 'CreateAd',
        component: AdsForm,
      },
      // {
      //   path: 'cities',
      //   name: 'Cities',
      //   component: PanelCitiesPage,
      // },
      // {
      //   path: 'cities/create',
      //   name: 'CreateCities',
      //   component: CitiesForm,
      // },
      {
        path: 'users',
        name: 'Users',
        component: PanelUsersPage,
      },
      {
        path: 'users/create',
        name: 'CreateUser',
        component: PanelUsersForm,
      },
    ],
  },
]
