import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import VueMeta from 'vue-meta'


Vue.config.productionTip = false
Vue.use(Vuex)

Vue.use(VueMeta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
})


const store = new Vuex.Store({
  state: {
    for_developers_page: [
      { title: 'Home', icon: 'mdi-home', color_val: 'rgb(22, 71, 225)', font_weight: 600, font_size: '15px', bg_color: 'rgb(22, 71, 225, 0.1)', url: 'home' },
      { title: 'API Keys', icon: 'mdi-api', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'api_keys' },
      { title: 'URL Endpoints', icon: 'mdi-web', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'endpoints' },
      { title: 'Uploading Files', icon: 'mdi-cloud-upload', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'upload_files' },
      { title: 'Retrieving Files', icon: 'mdi-cloud-download', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'retrieve_files' },
      { title: 'Deleting Files', icon: 'mdi-delete', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'delete_files' }
    ],

    for_api_keys_page: [
      { title: 'Home', icon: 'mdi-home', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'home' },
      { title: 'API Keys', icon: 'mdi-api', color_val: 'rgb(22, 71, 225)', font_weight: 600, font_size: '15px', bg_color: 'rgb(22, 71, 225, 0.1)', url: 'api_keys' },
      { title: 'URL Endpoints', icon: 'mdi-web', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'endpoints' },
      { title: 'Uploading Files', icon: 'mdi-cloud-upload', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'upload_files' },
      { title: 'Retrieving Files', icon: 'mdi-cloud-download', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'retrieve_files' },
      { title: 'Deleting Files', icon: 'mdi-delete', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'delete_files' }
    ],

    for_url_endpoints_page: [
      { title: 'Home', icon: 'mdi-home', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'home' },
      { title: 'API Keys', icon: 'mdi-api', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'api_keys' },
      { title: 'URL Endpoints', icon: 'mdi-web', color_val: 'rgb(22, 71, 225)', font_weight: 600, font_size: '15px', bg_color: 'rgb(22, 71, 225, 0.1)', url: 'endpoints' },
      { title: 'Uploading Files', icon: 'mdi-cloud-upload', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'upload_files' },
      { title: 'Retrieving Files', icon: 'mdi-cloud-download', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'retrieve_files' },
      { title: 'Deleting Files', icon: 'mdi-delete', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'delete_files' }
    ],

    upload_endpoint_page : [
      { title: 'Home', icon: 'mdi-home', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'home' },
      { title: 'API Keys', icon: 'mdi-api', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'api_keys' },
      { title: 'URL Endpoints', icon: 'mdi-web', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'endpoints' },
      { title: 'Uploading Files', icon: 'mdi-cloud-upload', color_val: 'rgb(22, 71, 225)', font_weight: 600, font_size: '15px', bg_color: 'rgb(22, 71, 225, 0.1)', url: 'upload_files' },
      { title: 'Retrieving Files', icon: 'mdi-cloud-download', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'retrieve_files' },
      { title: 'Deleting Files', icon: 'mdi-delete', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'delete_files' }
    ],

    retrieve_endpoint_page: [
      { title: 'Home', icon: 'mdi-home', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'home' },
      { title: 'API Keys', icon: 'mdi-api', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'api_keys' },
      { title: 'URL Endpoints', icon: 'mdi-web', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'endpoints' },
      { title: 'Uploading Files', icon: 'mdi-cloud-upload', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'upload_files' },
      { title: 'Retrieving Files', icon: 'mdi-cloud-download', color_val: 'rgb(22, 71, 225)', font_weight: 600, font_size: '15px', bg_color: 'rgb(22, 71, 225, 0.1)', url: 'retrieve_files' },
      { title: 'Deleting Files', icon: 'mdi-delete', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'delete_files' }
    ],

    delete_endpoint_page: [
      { title: 'Home', icon: 'mdi-home', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'home' },
      { title: 'API Keys', icon: 'mdi-api', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'api_keys' },
      { title: 'URL Endpoints', icon: 'mdi-web', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'endpoints' },
      { title: 'Uploading Files', icon: 'mdi-cloud-upload', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'upload_files' },
      { title: 'Retrieving Files', icon: 'mdi-cloud-download', font_weight: 600, font_size: '15px', color_val: 'rgba(0, 0, 0, 0.87)', url: 'retrieve_files' },
      { title: 'Deleting Files', icon: 'mdi-delete', color_val: 'rgb(22, 71, 225)', font_weight: 600, font_size: '15px', bg_color: 'rgb(22, 71, 225, 0.1)', url: 'delete_files' }
    ],

    status_code_list: [
      {
          status_code: '200, 201',
          description: 'This means that the request was successful and the intended action was carried out.'
      },
      {
          status_code: '400',
          description: 'This means that the request was not successful (Bad Request) and might be due to no network connection.'
      },
      {
          status_code: '401',
          description: 'This means that the API key that you sent with the request is not correct.'
      },
      {
          status_code: '404',
          description: 'This means that the url used to perform the request does not exist.'
      },
      {
          status_code: '405',
          description: 'This means that the method type used in making the request is wrong. Eg: Making a GET request to an endpoint that uses only the POST method type.'
      }
    ]
  }
})

new Vue({
  router,
  vuetify,
  VueMeta,
  store: store,
  render: h => h(App)
}).$mount('#app')
