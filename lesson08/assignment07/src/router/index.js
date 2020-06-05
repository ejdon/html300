import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import images from '@/components/images'
import schedule from '@/components/schedule'
import faqs from '@/components/FAQs'
import header from '@/components/header'


Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      path: '/header',
      name: 'header',
      component: header
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
