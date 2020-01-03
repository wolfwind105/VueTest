import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        breadcrumb: [{
          name: '首頁'
        }]
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../components/Header.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁',
          link: 'home'
        },
        {
          name: '最新消息'
        },
        {
          name: '範例層test',
          link: 'test'
        }]
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/About.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁',
          link: 'home'
        },
        {
          name: '關於我'
        }]
      }
    }
  ]
})
