import axios from './axios-config'
import {TIMEOUT, SERVER_URL, XHS_TOKEN} from './config'
import * as Cookies from 'js-cookie'

// 春知-用户-手机登录
export function ChunZhiUserPhoneLogin (data) {
  return axios({
    method: 'POST',
    timeout: TIMEOUT,
    url: `${SERVER_URL}/chunzhi_user_phone_login/`,
    responseType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data)
  })
}

// 春知-用户-发送验证码
export function ChunZhiUserSmsCodeCreate (data) {
  return axios({
    method: 'POST',
    timeout: TIMEOUT,
    url: `${SERVER_URL}/chunzhi_user_smscode_create/`,
    responseType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data)
  })
}

// 春知-用户-滚动栏
export function ChunZhiUserBannerList (data) {
  return axios({
    method: 'POST',
    timeout: TIMEOUT,
    url: `${SERVER_URL}/chunzhi_user_banner_list/`,
    responseType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data)
  })
}

// 春知-用户-详情
export function ChunZhiUserInfo () {
  return axios({
    method: 'POST',
    timeout: TIMEOUT,
    url: `${SERVER_URL}/chunzhi_user_info/`,
    responseType: 'json',
    contentType: 'application/json',
    headers: {
      'Authorization': Cookies.get(XHS_TOKEN)
    }
  })
}

// 博彦页面测试hi
export function BoYanTest () {
  return axios({
    method: 'POST',
    url: 'https://lanqiangxcx.cn/php/ygcs.php'
  })
}
