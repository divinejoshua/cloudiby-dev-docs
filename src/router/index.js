import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/Home.vue')
  // },
  {
    path: '/',
    name: 'Developers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Developers.vue')
  },
  {
    path: '/api_keys',
    name: 'Api_Keys',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Api_keys.vue')
  },
  {
    path: '/url_endpoints',
    name: 'Url_Endpoints',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Url_endpoints.vue')
  },
  {
    path: '/api-url-endpoints/upload_file',
    name: 'Upload_Endpoint',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/api_url_endpoints/Upload_endpoint.vue')
  },
  {
    path: '/api-url-endpoints/retrieve_file',
    name: 'Retrieve_Endpoint',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/api_url_endpoints/Retrieve_endpoint.vue')
  },
  {
    path: '/api-url-endpoints/delete_file',
    name: 'Delete_Endpoint',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/api_url_endpoints/Delete_endpoint.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
