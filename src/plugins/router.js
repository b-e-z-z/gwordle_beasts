import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Daily from '../views/daily.vue'
import Random from '../views/random.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      toolbar: true,
      absoluteToolbar: true
    },
    component: Home
  },
  {
    path: '/daily',
    name: 'Daily',
    meta: {
      toolbar: false
    },
    component: Daily
  },
  {
    path: '/random',
    name: 'Random',
    meta: {
      toolbar: false
    },
    component: Random
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.key) {
    next();
  } else {
    let key = to.meta.key;
    store.dispatch('hasKey', key).then(function (authorized) {
      if (authorized) {
        next();
      } else {
        next('/');
      }
    })
  }
})

export default router
