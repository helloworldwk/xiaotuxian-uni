import { http } from '@/utils/http'

/**
 * 获取微信支付参数
 * @param data orderId 订单Id
 * @returns
 */
export const getPayWxPayMiniPayAPI = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data,
  })
}

/**
 * 模拟支付-内测版 在 DEV 环境中使用，模拟支付，更新订单状态为待发货。
 * @param data orderId 订单Id
 * @returns
 */
export const getPayMockAPI = (data: { orderId: string }) => {
  return http({
    method: 'GET',
    url: '/pay/mock',
    data,
  })
}
