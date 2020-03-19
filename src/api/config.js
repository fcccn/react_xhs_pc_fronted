export const VERSION = 'v1'
export const TIMEOUT = 15000
export const XHS_TOKEN = 'xhs_token'
const env = process.env.NODE_ENV || 'production'
// const env = 'staging'  // 在家用

let VERSION_URL = ''
if (env === 'development') {
  VERSION_URL = 'https://app.xiongfenxiang.com/api/v2/chunzhi'
} else if (env === 'staging') {
  VERSION_URL = 'https://app.xiongfenxiang.com/api/v2/chunzhi'
} else if (env === 'production') {
  VERSION_URL = 'https://app.xiongfenxiang.com/api/v2/chunzhi'
}

export const SERVER_URL = VERSION_URL
