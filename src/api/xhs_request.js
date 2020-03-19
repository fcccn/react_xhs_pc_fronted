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

// 春知-大数据-单品牌投放-品牌列表
export function ChunZhiBigDataXhsBrandList () {
  return axios({
    method: 'POST',
    timeout: TIMEOUT,
    url: `${SERVER_URL}/chunzhi_bigdata_xhs_brand_list/`,
    responseType: 'json',
    contentType: 'application/json',
    headers: {
      'Authorization': Cookies.get(XHS_TOKEN)
    }
  })
}

// 春知-大数据-多品牌投放-柱状图
export function XhsEchartsColumnMultiple () {
  return axios({
    method: 'POST',
    timeout: TIMEOUT,
    url: `${SERVER_URL}/chunzhi_bigdata_xhs_echarts_column_multiple/`,
    responseType: 'json',
    contentType: 'application/json',
    headers: {
      'Authorization': Cookies.get(XHS_TOKEN)
    }
  })
}

// 春知-大数据-多品牌投放-折线图
export function XhsEchartsLineMultiple () {
  return axios({
    method: 'POST',
    timeout: TIMEOUT,
    url: `${SERVER_URL}/chunzhi_bigdata_xhs_echarts_line_multiple/`,
    responseType: 'json',
    contentType: 'application/json',
    headers: {
      'Authorization': Cookies.get(XHS_TOKEN)
    }
  })
}

// 春知-大数据-单品牌投放-数据概览
export function XhsEchartsGuide (data) {
  return axios({
    method: 'POST',
    timeout: TIMEOUT,
    url: `${SERVER_URL}/chunzhi_bigdata_xhs_echarts_guide/`,
    responseType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data),
    headers: {
      'Authorization': Cookies.get(XHS_TOKEN)
    }
  })
}

// 春知-大数据-单品牌投放-折线图
export function XhsEchartsLine (data) {
  return axios({
    method: 'POST',
    timeout: TIMEOUT,
    url: `${SERVER_URL}/chunzhi_bigdata_xhs_echarts_line/`,
    responseType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data),
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
