import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Button, Carousel, Tag, Icon } from 'ant-design-vue'
import api from "./assets/api/indexApi"
import 'ant-design-vue/dist/antd.css' // or 'antd/dist/antd.less'
import './assets/style/common.css'
import './assets/style/media.scss'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Carousel)
Vue.use(Tag)
Vue.use(Icon)
Vue.prototype.api = api

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
