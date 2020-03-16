import * as Cookies from 'js-cookie'
import {XHS_TOKEN} from '../../api/config'
// function getRootDomain () {
//   let domain = document.domain
//   const domainArr = domain.split('.')
//   const arrLen = domainArr.length
//   if (arrLen > 2) {
//     domain = domainArr[arrLen - 2] + '.' + domainArr[arrLen - 1]
//   }
//   return domain
// }

export function getCookie (key = 'xhs_token') {
  return Cookies.get(key)
  // return Cookies.get(key, {domain: getRootDomain()})
}

export function clearCookies () {
  Cookies.remove(XHS_TOKEN)
}

// 批量设置
export function setCookies (data) {
  // const rootDomain = getRootDomain()
  // Cookies.set(XK_WRITE_TOKEN, data[XK_WRITE_TOKEN], {domain: rootDomain})
  Cookies.set(XHS_TOKEN, data[XHS_TOKEN])
}
