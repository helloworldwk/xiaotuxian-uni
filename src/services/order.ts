import { http } from '@/utils/http'
import type { OrderPreResult } from '@/types/order'

/**
 * 填写订单-获取预付订单
 * @returns
 */
export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}

/**
 * 填写订单-获取立即购买订单
 * @param data query参数 skuId: 商品skuId count:购买商品的数量 addressId:下单时已经选择好的地址id
 * @returns
 */
export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}
