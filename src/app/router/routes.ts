import type { RouteRecordRaw } from 'vue-router'
// import CitiesPage from '@/features/public/cities/pages/CitiesPage.vue'
// import CityPage from '@/features/public/city/pages/CityPage.vue'
// import AnnouncementPage from '@/features/public/announcements/pages/AnnouncementPage.vue'
import LoginPage from '@/features/auth/pages/LoginPage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  // Public routes
  {
    path: '/',
    component: () => import('@/shared/layouts/PublicLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/features/public/home/pages/HomePage.vue'),
      },
      // TODO: Descomentar "Cidades" quando a página CitiesPage for implementada
      // {
      //   path: 'cidades',
      //   name: 'Cities',
      //   component: CitiesPage,
      // },
      // {
      //   path: 'cidades/:city',
      //   name: 'City',
      //   component: CityPage,
      // },
      // {
      //   path: 'cidades/:city/automotivo',
      //   name: 'CityAutomotive',
      //   component: AnnouncementPage,
      // },
      // {
      //   path: 'cidades/:city/imobiliario',
      //   name: 'CityRealEstate',
      //   component: AnnouncementPage,
      // },
      // {
      //   path: 'cidades/:city/hotelaria',
      //   name: 'CityHospitality',
      //   component: AnnouncementPage,
      // },
      {
        path: 'g8-construcoes',
        name: 'Constructions',
        component: () => import('@/features/public/contructions/pages/ConstructionsPage.vue'),
      },
      {
        path: 'fale-conosco',
        name: 'Contact',
        component: () => import('@/features/public/contact/pages/ContactPage.vue'),
      },
      {
        path: 'post/:slug',
        name: 'Post',
        component: () => import('@/features/public/post/pages/PostPage.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/features/public/blog/pages/BlogPage.vue'),
      },
    ],
  },
  // Panel routes
  {
    path: '/panel',
    name: 'Panel',
    component: () => import('@/shared/layouts/PanelLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/features/panel/modules/dashboard/pages/DashboardPage.vue'),
      },
      {
        path: 'posts',
        name: 'Posts',
        component: () => import('@/features/panel/modules/posts/pages/PostPage.vue'),
      },
      {
        path: 'posts/create',
        name: 'CreatePost',
        component: () => import('@/features/panel/modules/posts/pages/PostForm.vue'),
      },
      {
        path: 'ads',
        name: 'Ads',
        component: () => import('@/features/panel/modules/ads/pages/AdsPage.vue'),
      },
      {
        path: 'ads/create',
        name: 'CreateAd',
        component: () => import('@/features/panel/modules/ads/pages/AdsForm.vue'),
      },
      {
        path: 'cities',
        name: 'Cities',
        component: () => import('@/features/panel/modules/cities/pages/CitiesPage.vue'),
      },
      {
        path: 'cities/create',
        name: 'CreateCities',
        component: () => import('@/features/panel/modules/cities/pages/CitiesForm.vue'),
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/features/panel/modules/users/pages/UsersPage.vue'),
      },
      {
        path: 'users/create',
        name: 'CreateUser',
        component: () => import('@/features/panel/modules/users/pages/UsersForm.vue'),
      },
    ],
  },
]
