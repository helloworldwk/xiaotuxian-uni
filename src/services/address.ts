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

/**
 * 获取收货地址详情
 * @param id 地址id
 * @returns
 */
export const getMemberAddressById = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

/**
 * 修改收货地址
 * @param id 地址id
 * @param data 请求参数
 * @returns
 */
export const putMemberAddressAPI = (id: string, data: AddressParams) => {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

/**
 * 删除收货地址
 * @param id 地址id
 * @returns
 */
export const deleteMemberAddressAPI = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
