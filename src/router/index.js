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
    },
    {
      path: '/test',
      name: 'bind',
      component: () => import('../components/bindtest.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁',
          link: 'home'
        },
        {
          name: 'bindtest'
        }]
      }
    },
    {
      path: '/ittest',
      name: 'if',
      component: () => import('../components/IfTest.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁',
          link: 'home'
        },
        {
          name: 'iftest'
        }]
      }
    },
    {
      path: '/VonWatch',
      name: 'VonWatch',
      component: () => import('../components/VonWatch.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁',
          link: 'home'
        },
        {
          name: 'VonWatch'
        }]
      }
    },
    {
      path: '/Von',
      name: 'Von',
      component: () => import('../components/Von.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁',
          link: 'home'
        },
        {
          name: 'Von'
        }]
      }
    },
    {
      path: '/Watch',
      name: 'Watch',
      component: () => import('../components/Watch.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁',
          link: 'home'
        },
        {
          name: 'Watch'
        }]
      }
    },
    {
      path: '/Filter',
      name: 'Filter',
      component: () => import('../components/Filter.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁',
          link: 'home'
        },
        {
          name: 'Filter'
        }]
      }
    },
    {
      path: '/father',
      name: 'father',
      component: () => import('../pages/Home/emit/father.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁',
          link: 'home'
        },
        {
          name: 'father'
        }]
      }
    },
    {
      path: '/DataDriven',
      name: 'DataDriven',
      component: () => import('../components/DataDriven.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁',
          link: 'home'
        },
        {
          name: 'DataDriven'
        }]
      }
    },
    {
      path: '/Practice',
      name: 'Practice',
      component: () => import('../components/Practice.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁',
          link: 'home'
        },
        {
          name: 'Practice'
        }]
      }
    }
  ]
})
