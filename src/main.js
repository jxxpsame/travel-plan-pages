import Vue from 'vue'
import App from './App.vue'
//import Vuetify from 'vuetify' // 追加したライブラリを読み込む
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

 //routerのページ読み込み
import Home from '@/components/Home'
import Tab1 from '@/components/Tab1'

Vue.config.productionTip = false; // 開発中は true にしたほうがいいかも
// true の場合の方が開発者向けのメッセージがコンソールによりたくさん出るようです。
Vue.use(VueRouter)
//Vue.use(Vuetify) // Vueライブラリは使用を宣言。グローバルスコープ。

const routes = [
  { path: '/',      component: Home },
  { path: '/tab1', component: Tab1 }
]

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  render: h => h(App),
  router:router
}).$mount('#app')
