import request from '../../utils/http'

let api = {
  // 获取公司信息
  getComInfo: () => request.get('/info')
}
export default api
