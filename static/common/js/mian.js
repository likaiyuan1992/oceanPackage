import Vue from 'vue'
import axios from 'axios'
// import '../../../src/main'
import router from '../../../src/router'

let domain = window.location.host
if (domain == 'localhost:8082' || domain == '192.168.1.248:8082') {
  // 测试线上地址
  Vue.prototype.ApiUrl = 'http://192.168.0.3:8088/offwebsite'
} else if (domain == 'admin.becent.cc') {
  Vue.prototype.ApiUrl = 'https://api-admin.becent.cc'
  Vue.prototype.ApiUrlKuang = 'https://api-admin.becent.cc'
} else {
  // 正式线上增量代码
  Vue.prototype.ApiUrl = 'offwebsite'
  Vue.prototype.ApiUrlKuang = 'offwebsite'
}
