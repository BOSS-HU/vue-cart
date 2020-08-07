import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import { mapState } from 'vuex'
import store from '../store/index'
Vue.use(VueRouter)

function propsFn(route) {
  const { params, query } = route
  return {
    id: params.id,
    msg: params.msg,
    foo: query.foo
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../components/Dashboard.vue'),
    children: [
      {
        path: 'about/:foo',
        name: 'About',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'page',
        name: 'page',
        props: { foo: 'bar' },
        component: () => import(/* webpackChunkName: "page" */ '../views/Page.vue')
      },
      {
        path: 'user/:id/:msg',
        name: 'user',
        props: propsFn,
        component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
      },
      {
        path: 'contant/:id/:msg',
        name: 'contant',
        component: () => import(/* webpackChunkName: "contant" */ '../views/Contant.vue')
      }
    ]
  },
  { path: '/login', component: () => import(/* webpackChunkName: "login" */ '../components/Login.vue'), name: 'login' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局守卫
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.path !== '/login') { //登录
    if (store.state.isLogin) {
      next()
    } else {
      next('/login?redirect=' + to.path)
    }
  } else {
    next()
  }
})
export default router
