import { http } from '@/utils/http'
import type { AddressItem, AddressParams } from '@/types/address'

/**
 * 添加收货地址
 * isDefault:是否为默认，1为是，0为否
 * @param data 请求参数
 * @returns
 */
export const postMemberAddress = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

/**
 * 获取收货地址列表
 * @returns
 */
export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}
