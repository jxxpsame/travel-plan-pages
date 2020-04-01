import Vue from 'vue'
import App from './App.vue'
//import Vuetify from 'vuetify' // 追加したライブラリを読み込む
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
//Vue.use(Vuetify) // Vueライブラリは使用を宣言。グローバルスコープ。

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
