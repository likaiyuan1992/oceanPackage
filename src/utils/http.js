// 基础的ajax 封装
import axios from 'axios'
const baseUrl = 'http://112.74.55.74:3000'

axios.defaults.baseURL = baseUrl
const http = (url, method, options = {}) => {
  return new Promise(resolve => {
    axios({
      method: method,
      url: url,
      data: options
    }).then(res => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        alert('请求异常')
      }
    })
      .catch(err => {
        alert(err)
      })
  })
}

const httpGet = (url, options) => {
  return http(url, 'get', options)
}

const httpPost = (url, options) => {
  return http(url, 'post', options)
}

const httpDel = (url, options) => {
  return http(url, 'delete', options)
}

const httpDelJson = (url, options) => {
  return http(url, 'delete_json', options)
}

const httpPut = (url, options) => {
  return http(url, 'put', options)
}

export default {
  get: httpGet,
  post: httpPost,
  delete: httpDel,
  deleteJson: httpDelJson,
  put: httpPut
}
