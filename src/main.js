import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Button, Carousel, Tag, Icon } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css' // or 'antd/dist/antd.less'
import './assets/css/common.css'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Carousel)
Vue.use(Tag)
Vue.use(Icon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
