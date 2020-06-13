import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home'
import images from '@/components/images'
import schedule from '@/components/schedule'
import faqs from '@/components/FAQs'
import hero from '@/components/hero'


Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/images',
      name: 'images',
      component: images
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: schedule
    },
    {
      path: '/FAQs',
      name: 'faqs',
      component: faqs
    },
    {
      path: '/hero',
      name: 'hero',
      component: hero
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
