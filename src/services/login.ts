import { http } from '@/utils/http'

// ;/login/Minwx
type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}
/**
 * 小程序登录
 * @param data
 * @returns
 */
export const postLoginMinwxAPI = (data: LoginParams) => {
  return http({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

/**
 * 小程序登录-内测版
 * @param data 模拟的手机号必传
 * @returns
 */
export const postLoginMinwxSimpleAPI = (phoneNumber: string) => {
  return http({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
