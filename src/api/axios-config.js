import axios from 'axios'
// import { _vue } from '../main.js'
import { clearCookies } from '../static/js/cookie-util'

axios.interceptors.request.use((config) => {
  return config
}, function (error) {
  console.log('连接服务器失败')
  return Promise.reject(error)
})
axios.interceptors.response.use(function (config) {
  return config
}, function (err) {
  if (err.response) {
    let msg = ''
    switch (err.response.status) {
      case 400:
        msg = '请求错误'
        break
      case 401:
        msg = '未授权，请登录'
        console.log('未授权，请登录')
        clearCookies()
        window.location.href = `/login?redirect=${encodeURI(window.location.href.replace(window.location.origin, ''))}+'&time='${new Date().getTime()}`
        break
      case 403:
        msg = '拒绝访问'
        break
      case 404:
        msg = `请求地址出错`
        break
      case 408:
        msg = '请求超时'
        break
      case 500:
        msg = '服务器内部错误'
        break
      case 501:
        msg = '服务未实现'
        break
      case 502:
        msg = '网关错误'
        break
      case 503:
        msg = '服务不可用'
        break
      case 504:
        msg = '网关超时'
        break
      case 505:
        msg = 'HTTP版本不受支持'
        break
      default:
    }
    console.dir(msg)
  }
  return Promise.reject(err)
})
export default axios
