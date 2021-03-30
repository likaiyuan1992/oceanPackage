import request from '../../utils/http'

let api = {
  // 获取公司信息
  getComInfo: () => request.get('/info'),
  // 联系我们
  getContacts: () => request.get('/contactUs')
}
export default api
